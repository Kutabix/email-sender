import React, { useState, useRef } from 'react';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';

const Info = () => {
    const handleSubmit = async () => {
        setShowError(false);
        setShowSuccess(false);

        const email = emailRef.current.value;
        const subject = subjectRef.current.value;
        const message = messageRef.current.value;

        emailRef.current.value = ''
        subjectRef.current.value = '';
        messageRef.current.value = '';

        if (!email || !subject || !message || !isEmail(email)) return setShowError(true);
        
        try {
            const emailSent = await axios.post('https://email-sending-server.herokuapp.com/send-mail', { email, subject, message });
            if (emailSent.status === 200) return setShowSuccess(true);
            setShowError(true);
        } catch {
            setShowSuccess(false);
            setShowError(true);
        }

    }

    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const emailRef = useRef();
    const subjectRef = useRef();
    const messageRef = useRef();
    
    return (
        <>
            <div className="login-box">
                <h2>Send me an email</h2>
                <form>
                    <div className="user-box">
                        <input type="text" ref={emailRef} required />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="text" ref={subjectRef} required />
                        <label>Subject</label>
                    </div>
                    <div className="user-box">
                        <input type="text" ref={messageRef} required />
                        <label>Message</label>
                    </div>
                    
                    {showError && (<h3 className='error'>Fields are badly formatted!</h3>)}
                    {showSuccess && (<h3 className='success'>Email sent successfully!</h3>)}
                    <a onClick={() => handleSubmit()}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Send
                    </a>
                </form>
            </div>
        </>
    );
}


export default Info; 