import React, { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Signin.module.scss'
import {BiLeftArrowAlt} from 'react-icons/bi'
import Link from 'next/link'
import { Formik, Form } from "formik";
import * as Yup from 'yup'
import LoginInput from '../components/inputs/loginInput'
const initialvalues = {
  login_email: "",
  login_password: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
  success: "",
  error: "",
  login_error: "",
};
const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [user,setUser] = useState(initialvalues)
  const {
    login_email,
    login_password,
    name,
    email,
    password,
    conf_password,
    success,
    error,
    login_error,
  } = user;
   const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Email address is required.")
      .email("Please enter a valid email address."),
    login_password: Yup.string().required("Please enter a password"),
  });
  const handleChange = (e) =>{
  const {name,value} = e.target;
  setUser({...user,[name] : value})
  }
  return (
    <>
    <Header />
      <div className={styles.login}>
         <div className={styles.login__container}>
             <div className={styles.login__header}>
                <div className={styles.back__svg}>
                    <BiLeftArrowAlt/>
                </div>
                <span>W&apos;d be happy to join us !  <Link href='/'>Go Store</Link></span>
             </div>
             <div className={styles.login__form}>
                <h1>Sign in</h1>
                <p>
                  Get access to one of the best Eshopping services in the world.
                </p>
                <Formik
                  enableReinitialize
                  initialValues={{
                     login_email,
                     login_password,
                  }}
                  validationSchema={loginValidation}
                >
                   {
                    (form)=>(
                      <Form>
                         <LoginInput
                          type="text"
                          name="login_email"
                          icon="email"
                          placeholder="Email Address"
                         onChange={handleChange}
                        />
                      </Form>
                     
                    )
                   }
                </Formik>
            </div>
         </div>
      </div>
    <Footer country='kolkata'/>
    </>
    
  )
}

export default Signin