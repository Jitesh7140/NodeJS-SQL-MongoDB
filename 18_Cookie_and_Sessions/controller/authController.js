
exports.auth = (req ,res , next)=>{  
     res.render("auth/login", {isLogin:false , user:{}} );

}

 

exports.authPost = (req ,res , next)=>{ 
    req.session.isLogin = {true:true};
    // res.cookie('isLogin' , true)
    // req.isLogin =true;
    res.redirect("/"   );

}
 

exports.authLogout = (req ,res , next)=>{ 

    console.log('resq body' , req.body)
    req.session.destroy((err)=>{
        if(err){
            console.log('Error destroying session:', err);
        }else{
            console.log('Session destroyed successfully');
            res.redirect("/login"   );
        }
    })

}

 