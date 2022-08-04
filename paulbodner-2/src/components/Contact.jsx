import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Form from './contactComponents/Form';
import Status from './contactComponents/Status';
import Confirmation from './contactComponents/Confirmation';

import useVisualMode from '../hooks/useVisualMode';

import './contactComponents/contact.scss'

export default function Contact(props) {
  // props.setPage('CONTACT');
  const { mode, transition } = useVisualMode("FORM")
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [message, setMessage] = useState(undefined);

  const [errorType, setErrorType] = useState(undefined);

  const handleChange = (setTo, setChange) => {
    if (setTo.target.value.length === 0){
      setChange(undefined);
    } else {
      setChange(setTo.target.value);
    }
  }

  const form = useRef();

  const sendEmail = () => {
    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE, 
      form.current, 
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          transition("CONFIRM");
      }, (error) => {
          console.log(error.text);
      });
  };

  const confirmForm = (event) => {
    event.preventDefault();
    if (!name || !email|| !message){
      setErrorType('INCOMPLETE');
    } else if (!email.includes('@') || !email.includes('.')){
      setErrorType('EMAIL');
    } else if (message.length < 50) {
      setErrorType('MESSAGE');
    } else {
      transition("STATUS");
      sendEmail();
    }
}

  return (
    <article className='page contact'>
      { mode === "FORM" && < Form 
        submitForm={ confirmForm } 
        form={ form } 
        handleChange={ handleChange }
        setName={ setName }
        setEmail={ setEmail }
        setMessage={ setMessage }
        error={ errorType } 
        /> }
      { mode === "STATUS" && < Status /> }
      { mode === "CONFIRM" && < Confirmation />}
    </article>
  );
};