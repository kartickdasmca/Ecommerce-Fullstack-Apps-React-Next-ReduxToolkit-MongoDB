import  { createRouter } from 'next-connect';
import db from '../../../lib/db'
import User from '../../../models/User'
import {validateEmail} from '../../../utils/validation'
import bcrypt from 'bcryptjs';
const router = createRouter();
import {createActivationToken} from '../../../utils/tokens'
import { sendEmail } from '../../../utils/sendEmails';
import { activateEmailTemplate } from '../../../emails/activateEmailTemplate';


router.post(async (req, res) => {

  try{
    const {name,email,password} = req.body
    await db.connectDb();
    if(!email || !name || !password){
      res.status(400).json({ message: 'All fields are required'});
    }
    if(!validateEmail(email)){
      res.status(400).json({ message: 'Email must be valid!'});
    }
    const user = await User.findOne({email})
    if(user){
      res.status(400).json({ message: 'Email already exist'});
    }

    
     const cryptedPassword = await bcrypt.hash(String(password), 12);
     const addedUser = await User.create({name,email,password:cryptedPassword})
     const activation_token = await createActivationToken({
      id : addedUser?._id.toString()
     })
     const url = `${process.env.BASE_URL}/activate/${activation_token}`;
     sendEmail(email,url,"","Activate Your Account",activateEmailTemplate)
    // const newUser = new User({ name, email, password });
    //  const addedUser = await newUser.save();
    if(addedUser){
        res.status(200).json({user:addedUser, message: 'Registration successfull!' });
    }
   
  }catch(err){
     console.log('error',err)
     res.json({ message: 'Server error' });
  }

});

export default router.handler();
