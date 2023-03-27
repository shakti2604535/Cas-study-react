import React, { useState } from 'react';
import classes from './ContactForm.module.css'

function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    confirmEmail: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formState);
    if (Object.keys(errors).length === 0) {
      // handle form submission logic here
      console.log(formState)
      setFormErrors(errors);
      event.target.reset(); // reset the form fields
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        message: ''
      });

    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email is invalid';
    }
    if (!values.confirmEmail) {
      errors.confirmEmail = 'Confirm email is required';
    } else if (values.confirmEmail !== values.email) {
      errors.confirmEmail = 'Emails do not match';
    }
    return errors;
  };

  return (
    <div className="d-flex justify-content-center">
    <form onSubmit={handleSubmit} className="d-flex justify-content-center">
     
       <div className={classes.container} >
                  <div className="row">
          <input
          type="text"
          name="firstName" className="form-control"
          value={formState.firstName}
          placeholder="Firstname"
          onChange={handleChange}
        />
      {formErrors.firstName && <div>{formErrors.firstName}</div>}
        </div>
        <div className='row'>
        <input
          type="text"
          name="lastName"
          className="form-control"
          placeholder='Lastname'
          value={formState.lastName}
          onChange={handleChange}
        />
        {formErrors.lastName && <div>{formErrors.lastName}</div>}
        </div>
       <div className='row'>
       <input
          type="email"
          name="email"
          placeholder='Email'
          className='form-control'
          value={formState.email}
          onChange={handleChange}
        />
        {formErrors.email && <div>{formErrors.email}</div>}
       </div>
       <div className="row">
       <input
          type="email"
          name="confirmEmail"
          className='form-control'
          placeholder='Confirm Email'
          value={formState.confirmEmail}
          onChange={handleChange}
        />
        {formErrors.confirmEmail && <div>{formErrors.confirmEmail}</div>}
       </div>
          <div className='row'>
          <textarea
          name="message"
          value={formState.message}
          placeholder='message'
          className='form-control'
          onChange={handleChange}
        />
          </div>
          <div className='row'>
          <button  className="btn btn-primary" type="submit">Submit</button>
          </div>
          </div>
          
      </form>
    
      </div>
    
  );
}

export default ContactForm;