import React, { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Signin.module.scss'
import {BiLeftArrowAlt} from 'react-icons/bi'
import Link from 'next/link'
import { Formik, Form } from "formik";
import * as Yup from 'yup'
import LoginInput from '../components/inputs/loginInput'
import CircledIconBtn from '../components/buttons/circledIconBtn'
import {
  getCsrfToken,
  getProviders,
  getSession,
  signIn,
  country,
} from "next-auth/react";
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
const Signin = ({providers,err}) => {
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

const registerValidation = Yup.object({
    name: Yup.string()
      .required("What's your name ?")
      .min(2, "First name must be between 2 and 16 characters.")
      .max(16, "First name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]/, "Numbers and special characters are not allowed."),
    email: Yup.string()
      .required(
        "You'll need this when you log in and if you ever need to reset your password."
      )
      .email("Enter a valid email address."),
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
      )
      .min(6, "Password must be atleast 6 characters.")
      .max(36, "Password can't be more than 36 characters"),
    conf_password: Yup.string()
      .required("Confirm your password.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
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
                        <LoginInput
                          type="password"
                          name="login_password"
                          icon="password"
                          placeholder="Password"
                          onChange={handleChange}
                        />
                         <CircledIconBtn type="submit" text="Sign In" />
                         <div className={styles.forgot}>
                             <Link href="/forget">Forgot Password</Link>
                         </div>
                      </Form>
                     
                    )
                   }
                  
                </Formik>
               <div className={styles.login__socials}>
                  <span className={styles.or}>Or continue with</span>
                  <div className={styles.login__socials_wrap}>
                          {providers.map((provider) => {
                            if (provider.name == "Credentials") {
                              return;
                            }
                      return (
                        <div key={provider.name}>
                          <button
                            className={styles.social__btn}
                            onClick={() => signIn(provider.id)}
                          >
                            <img src={`../../icons/${provider.name}.png`} alt="" />
                            Sign in with {provider.name}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

            </div>
         </div>

         <div className={styles.login__container}>
          <div className={styles.login__form}>
            <h1>Sign up</h1>
            <p>
              Get access to one of the best Eshopping services in the world.
            </p>
            <Formik
              enableReinitialize
              initialValues={{
                name,
                email,
                password,
                conf_password,
              }}
              validationSchema={registerValidation}
              onSubmit={() => {
                signUpHandler();
              }}
            >
              {(form) => (
                <Form>
                  <LoginInput
                    type="text"
                    name="name"
                    icon="user"
                    placeholder="Full Name"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="text"
                    name="email"
                    icon="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="password"
                    icon="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <LoginInput
                    type="password"
                    name="conf_password"
                    icon="password"
                    placeholder="Re-Type Password"
                    onChange={handleChange}
                  />
                  <CircledIconBtn type="submit" text="Sign up" />
                </Form>
              )}
            </Formik>
            <div>
              {success && <span className={styles.success}>{success}</span>}
            </div>
            <div>{error && <span className={styles.error}>{error}</span>}</div>
          </div>
        </div>
      </div>
    <Footer country='kolkata'/>
    </>
    
  )
}

export default Signin

export async function getServerSideProps(){
  try{
     const providers = Object.values(await getProviders());
       return {
          props: {
          providers: providers ?? null,
       },
    }
  }catch(err){
        return {
          props: {
          providers : null,
          err : 'Failed to load authentication providers'
       }}
    }
}