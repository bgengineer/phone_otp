import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaLock, FaPhoneAlt } from 'react-icons/fa';
import OtpInput from 'otp-input-react';
import './styles/OtpPage.css';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const PhoneOTP = () => {
    const [phoneNumber, setPhoneNumber] = useState(''); // 6380591740
    const navigate = useNavigate()
    const [otp, setOtp] = useState('');// 123456
    const [user, setUser] = useState(null);// 123456
    const [showOtp, setShowOtp] = useState(false);
    const [loading, setLoading] = useState(false);

    const auth = getAuth(app);// firebasee.js
    

    const handleSendOtp = async() => {
        setLoading(true);
        try{
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})// I am not a robot
            const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptcha)// send otp
            console.log(confirmation)
            setUser(confirmation)// 123456
            setLoading(false)
            setShowOtp(true)
            toast.success("OTP Send Successfully")
        }catch(err){
            toast.error("Invalid Phone Number")
            console.log(err)
        }
    };
    

    const handleVerifyOtp = async () =>{
        try{
            const data = await user.confirm(otp)// 123456 === 123456
            console.log(data)
            toast.success("OTP Verified")
            navigate('/home')
        }catch(err){
            toast.error(err)
            console.log(err)
        }
    }

    return (
        <div className="container">
        <Toaster
        position="top-center"
        reverseOrder={false}
        />
            <div className="title-container">
                <FaPhoneAlt className="phone-icon" />
                <h2 className="title">Verify your phone number</h2>
            </div>
            <div className="input-container">
                <PhoneInput
                    country={'in'}
                    value={phoneNumber}
                    onChange={(phone) => setPhoneNumber("+" + phone)}
                    placeholder="Enter phone number"
                />
                <button className="send-otp-btn" onClick={handleSendOtp}>
                    {loading ? 'Sending...' : 'Send OTP'}
                </button>
                <div id='recaptcha'></div>
            </div>
            {showOtp && (
                <div className="input-container">
                    <OtpInput
                        value={otp}
                        onChange={(e) => setOtp(e)}
                        OTPLength={6}
                        separator={<span>-</span>}
                        inputStyle="otp-input"
                    />
                    <button className="verify-otp-btn" onClick={handleVerifyOtp}>
                        {loading ? 'Verifying...' : 'Verify OTP'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default PhoneOTP;
