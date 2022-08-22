import React from "react";

export default function Form(props) {

  const placeholder = 'Please write your message here and you will hear from me as soon as possible.'

  const { setName, setEmail, setMessage, form, submitForm, handleChange, error } = props;

  return (
    <>
      <div className="contact-message">
        <h4>Contact</h4>
        <p className="contact-line">Please message me for any developement inquiries!</p>
        <p><strong>bodner80@gmail.com</strong></p>
      </div>
      <form ref={ form } onSubmit={ submitForm } className='email'>
        { error === "INCOMPLETE" && <p className={ "error" }>
          *Please ensure all input feilds are complete*
        </p> }
        { error === "EMAIL" && <p className={ "error" }>
          *Please enter a vaild email ex. johndoe@gmail.com*
        </p> }
        { error === "MESSAGE" && <p className={ "error" }>
          *Please enter a more detailed message*
        </p> }
        <div>
          <label>Name: </label>
          <input type="text" name="user_name" className='input-area' onChange={(e) => handleChange(e, setName) } />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="user_email" className='input-area' onChange={(e) => handleChange(e, setEmail) } />
        </div>
        <div className='message'>
          <textarea name="message" className='input-area' onChange={(e) => handleChange(e, setMessage) } placeholder={ placeholder }/>
        </div>
        <button type="submit" >SEND</button>
      </form>
    </>
  );
}