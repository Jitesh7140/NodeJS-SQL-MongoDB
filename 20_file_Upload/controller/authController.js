const { check, validationResult } = require("express-validator");
const User = require("../model/user");
const bcrypt = require("bcryptjs");

exports.Loginauth = (req, res, next) => {
    res.render("auth/login", { isLogin: false, errorMessage: null, user: {} });

}

exports.LoginauthPost = async (req, res, next) => {
    const { email, password } = req.body;  
    //  const user = {key: "value"};
    const user = await User.findOne({ email: email });
    if (!user) {
        return res.status(401).render("auth/login", {
            isLogin: false,
            errorMessage: "Invalid email", 
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).render("auth/login", {
            isLogin: false,
            errorMessage: "Invalid password",
            user: {}
        });
    } 
    req.session.isLogin = true;   
    
    req.session.user = { 
        _id: user._id.toString(),
        username: user.username,
        email: user.email,
        role: user.role,
        favorites: user.favorites.map(fav => fav.toString())
    };
    // console.log("Session User after login:", req.session.user);

    await req.session.save(()=>{
        console.log("Session saved successfully");
        res.redirect("/");
    });
 

};



exports.SignAuth = (req, res, next) => {
    res.render("auth/signup", { isLogin: false, oldInput: req.body, errors: [], user: {} });

}



exports.SignAuthPost = [
    // Username
    check("username")
        .trim()
        .notEmpty().withMessage("Username is required")
        .isLength({ min: 3 }).withMessage("Username must be at least 3 characters"),

    // Email
    check("email")
        .isEmail().withMessage("Please enter a valid email")
        .normalizeEmail(),

    // Role
    check("role")
        .notEmpty().withMessage("Role is required")
        .isIn(["guest", "host"]).withMessage("Invalid role selected"),

    // Password
    check("password")
        .isLength({ min: 4 }).withMessage("Password must be at least 4 characters")
        .matches(/[a-z]/).withMessage("Password must contain a lowercase letter")
        .matches(/[0-9]/).withMessage("Password must contain a number"),

    // Confirm Password
    check("confirmPassword")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Passwords do not match");
            }
            return true;
        }),

    // Terms Checkbox
    check("terms")
        .equals("on").withMessage("You must accept Terms & Conditions"),

    // Final error handler middleware
    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).render("auth/signup", {
                errors: errors.array(),
                oldInput: req.body,
                isLogin: false
            });
        }

        bcrypt.hash(req.body.password, 12).then(hashedPassword => {
            const user = new User({ username: req.body.username, email: req.body.email, role: req.body.role, password: hashedPassword });
            return user.save();
        }).then(() => {

            res.redirect("/login");
        }).catch(err => {
            console.log("Error saving user:", err);
            res.status(500).render("auth/signup", {
                errors: [{ msg: "An error occurred while creating your account. Please try again." }],
                oldInput: req.body,
                isLogin: false
            });
        }
        );
    }
];


exports.authLogout = (req, res, next) => {

    console.log('req body', req.body)
    req.session.destroy((err) => {
        if (err) {
            console.log('Error destroying session:', err);
        } else {
            console.log('Session destroyed successfully');
            res.redirect("/login");
        }
    })

}

