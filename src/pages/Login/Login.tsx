/* eslint-disable @typescript-eslint/ban-ts-comment */
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
import { setTitle } from '../../helper/LocalStorgeMS';

function Login() {
  const { t } = useTranslation();
  const {loginSchema} = UseAuth();
  const {loginHandle,loginLoader} =useLogin();
  const {googleSignin} = useFireBase();
  const [,setGoogleSigninLoader] = useState(false)

  setTitle('Stack | Login')
  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.mainBox}>
        <h2 className={loginStyles.h2}>{t('auth.login')}</h2>
        <p className={loginStyles.p}>{t('auth.back')}</p>
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
                placeholder={t('auth.email')}
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
                placeholder={t('auth.password')}
                required
              />
            </div>
            <div className={'mb-2'}>
              <input className={styles.checkbox} type='checkbox' value="ok" id="check"/>
              <label htmlFor='check' className='muted-gray'>{t('auth.remember')}</label>
            </div>
            <Commonbutton
                type="submit"
                // onclickCallback={() => console.log(false)}
                className={styles.button}
                btnText={t('auth.login')}
                isLoading={loginLoader}
                disabled={loginLoader}
            />
          </Form>
          <p className='muted-gray text-center'>
            {t('auth.not_r')} 
            <Link to='/registration' className="secondary">{t('auth.register')}</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
