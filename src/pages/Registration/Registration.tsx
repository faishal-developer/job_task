/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-constant-condition */
/* @ts-ignore */
import google from '../../assets/28638635916000402301.png';
import apple from '../../assets/7829863615301033041.png';
import { loginStyles } from '../constants/LoginStyles';
import { useTranslation } from 'react-i18next';
import Commonbutton from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import UseAuth from '../Login/UseAuth.logic';
import { yupResolver } from "@hookform/resolvers/yup";
import email from "../../assets/email.png";
import lock from "../../assets/lock.png";
import smily from "../../assets/smily.png";
import FormInput from '../../components/FormInput/FormInput';
import { styles } from '../../components/FormInput/styles';
import { useLogin } from './useRegistration.logic';
import { Link } from 'react-router-dom';
import useFireBase from './useFireBase';
import { useState } from 'react';

function Registration() {
  const { t } = useTranslation();
  const [,setGoogleSigninLoader] = useState(false)
  const {RegistrationSchema} = UseAuth();
  const {registrationHandle,onChange,check,error} = useLogin();
  const {googleSignin} = useFireBase();

  return (
    <div className={loginStyles.container}>
      <div className={loginStyles.mainBox}>
        <h2 className={loginStyles.h2}>{t('auth.get_start')}</h2>
        <p className={loginStyles.p}>{t('auth.create_account')}</p>
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
          <Form submitHandler={registrationHandle} resolver={yupResolver(RegistrationSchema)}>
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
            <div>
              <FormInput
                name="name"
                type="text"
                icon={smily}
                label="Name"
                placeholder='Your Name'
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
              <input checked={check} onChange={onChange} className={styles.checkbox} type='checkbox' value="ok" id="check"/>
              <label htmlFor='check' className={error?'errorMessage':'muted-gray'}> I agree to the Terms & Conditions</label>
            </div>
            <Commonbutton
                type="submit"
                className={styles.button}
                btnText="Sign Up"
                isLoading={false}
                disabled={false}
            />
          </Form>
          <p className='muted-gray text-center'>
            Already have an account? 
            <Link to="/login" className="secondary">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
