const jwt = require('jsonwebtoken');
require('dotenv').config();


const authMiddleware = (req, res, next)=>{
  const authorization = req.headers.authorization;
  if(authorization){
    const token = authorization.split('Bearer ')[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET,{algorithms: 'HS512'});
      next()
    } catch (error) {
      res.status(401).json({message: "No token"})
    }
  } else {
    res.status(401).json({message: "No token provided"})
  }
}

// const authMiddleware = (req, res, next)=>{
//   const authorization = req.headers.authorization;
//   const token = authorization.split('Bearer ')[1];
//   console.log(token);
//   jwt.verify(
//     token,
//     process.env.JWT_SECRET,
//     {algorithms: 'HS512'},
//     (err, decoded)=>{
//       if(err){
//         res.status(400).json({error: 'invalid token', message: 'Token no valido, envía un token correcto'})
//       } else {
//         console.log(decoded);
//         next();
//       }
//     }
//   )
// }

module.exports = authMiddleware;