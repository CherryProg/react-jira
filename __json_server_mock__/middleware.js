module.exports = (req,res,next) => {
    console.log('....middleware')
    if(req.method ===  'POST' && req.path === '/login'){
        if(req.body.username === 'yq' && req.body.password === '123456'){
            return res.status(200).json({
                user:{
                    token:'123'
                }
            })
        }else{
            return res.status(400).json({mesage:'用户名或者密码错误'})
        }
    }
    next()
}