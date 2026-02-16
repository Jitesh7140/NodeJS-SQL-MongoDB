
const data = 'jitesh'
exports.PageNotFound = (req , res ,next)=>{ 
    res.render('404' , { data: data })
}