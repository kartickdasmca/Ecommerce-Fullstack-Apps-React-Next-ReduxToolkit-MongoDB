import jwt from 'jsonwebtoken'

export const createActivationToken = async(payload) => {
    try{
      const token = await jwt.sign(payload,process.env.ACTIVATION_TOKEN_SECRET,{
        expiresIn : "2d",
      })
      return token
    }catch(err){
      return false
    }
   
}