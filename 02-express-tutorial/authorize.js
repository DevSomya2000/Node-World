const authorize = (req,res,next) => {
    const {user} = req.query
    if(user === 'john') {
        req.user = {name:'john',id:30}
        next()
    }
    else {
        res.status(401).end('Unauthorised')
    }
}

module.exports = authorize