 
exports.PageNotFound = (req , res ,next)=>{ 
    res.render('404' ,{isLogin:req.isLogin , user:{}} )
}