import React,{ useState, useRef } from 'react';
import firebase from '../firebase';
import { RecaptchaVerifier } from '@firebase/auth';

const Auth = () => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [ verificationId, setVerificationId] = useState('');
    const recaptchaRef = useRef(null);

    const handleSendOtp = () =>{

        if(recaptchaRef.current){
            recaptchaRef.current.innerHTML = '<div id="recaptcha-container"></div>'
        }

        const verfier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
            size: 'invisible'
        });

        firebase.auth().signInWithPhoneNumber(phoneNumber,verfier)
        .then(confirmationResult => { 
            setVerificationId(confirmationResult.verificationId);
            alert('Phone OTP has sent to your phone.');

        })
        .catch(error => {
            console.error('Error sending OTP:',error);

        });

    };
    const handleVerifyOTP = () => {
       const credentials = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
       firebase.auth().signInWithCredential(credentials)
       .then(userCredential => {
            console.log('User Logged In:', userCredential.user);
       })
       .catch(error => {
           console.error('Error verifing OTP:- ',error);
       });
    }

    return(
        <div>
            <h1>Phone OTP Authentication</h1>
            <div ref={recaptchaRef}>  </div>
            <input type="tel"
                placeholder="Enter your phone number with country code"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
            />   
            <button onClick={ handleSendOtp }> Send OTP </button> 
            <br/>
            <input type="text"
            placeholder='Enter OTP'
            value={ verificationCode }
            onChange={ e => setVerificationCode(e.target.value)}/>
            <button onClick= {handleVerifyOTP}>Verify OTP</button>
        </div>
    );
}

export default Auth;