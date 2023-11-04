/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-constant-condition */
import google from '../../assets/28638635916000402301.png';
import apple from '../../assets/7829863615301033041.png';
import { loginStyles } from '../constants/LoginStyles';
import { useTranslation } from 'react-i18next';
import Commonbutton from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import UseAuth from './UseAuth.logic';
import { yupResolver } from "@hookform/resolvers/yup";
import email from "../../assets/email.png";
import lock from "../../assets/lock.png";
import FormInput from '../../components/FormInput/FormInput';
import { styles } from '../../components/FormInput/styles';
import { useLogin } from '../Registration/useRegistration.logic';
import { Link } from 'react-router-dom';
import useFireBase from '../Registration/useFireBase';
import { useState } from 'react';

function Login() {
  const { t } = useTranslation();
  const {loginSchema} = UseAuth();
  const {loginHandle} =useLogin();
  const {googleSignin} = useFireBase();
  const [googleSigninLoader,setGoogleSigninLoader] = useState(false)

  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.mainBox}>
        <h2 className={loginStyles.h2}>{t('auth.login')}</h2>
        <p className={loginStyles.p}>Welcome back, you’ve been missed!</p>
        <div className={loginStyles.social}>
          <div onClick={() => {googleSignin(setGoogleSigninLoader) }} className={loginStyles.googleBtn}>
            <img className={loginStyles.socialImg} src={google}/>
            <p>{t('auth.r_google')}</p>
          </div>
          <div className={loginStyles.AppleBtn}>
            <img className={loginStyles.socialImg} src={apple}/>
            <p>{t('auth.r_apple')}</p>
          </div>
        </div>
        <div className={loginStyles.hlBlock}>
          <div className={loginStyles.hr}/>
          <p className={loginStyles.or}>{t('auth.or')}</p>
          <div className={loginStyles.hr}/>
        </div>
        <div>
          <Form submitHandler={loginHandle} resolver={yupResolver(loginSchema)}>
            <div>
              <FormInput
                name="email"
                type="text"
                icon={email}
                label="Email"
                placeholder='Your Email'
                required
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}
            >
              <FormInput
                name="password"
                type="password"
                icon={lock}
                size="large"
                label="User Password"
                placeholder='Your Password'
                required
              />
            </div>
            <div className={'mb-2'}>
              <input className={styles.checkbox} type='checkbox' value="ok" id="check"/>
              <label htmlFor='check' className='muted-gray'> Remember Me</label>
            </div>
            <Commonbutton
                type="submit"
                // onclickCallback={() => console.log(false)}
                className={styles.button}
                btnText="Sign In"
                isLoading={false}
                disabled={false}
            />
          </Form>
          <p className='muted-gray text-center'>
            Don’t have an account yet? 
            <Link to='/registration' className="secondary">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
