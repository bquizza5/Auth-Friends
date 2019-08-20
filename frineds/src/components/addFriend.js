import React, { Component }  from 'react';
import { withFormik, Form, Field } from 'formik'
import { axiosWithAuth } from '../utils/axiosWithAuth.js';
import axios from 'axios'
import * as Yup from 'yup';

const AddFriend = ({ errors, touched }) => {

    return (
        <>
        <Form>
            <Field
                name='name'
                type='text'
                autoComplete='off'
                placeholder='name'
            />
            {touched.name && errors.name && <p className="error">{errors.name}</p>}
            <Field
                name='age'
                type='age'
                autoComplete='off'
                placeholder='age'
            />
            {touched.age && errors.age && <p className="error">{errors.age}</p>}
            <Field
                name='email'
                type='email'
                autoComplete='off'
                placeholder='Email'
            />
            {touched.email && errors.email && <p className="error">{errors.email}</p>}
            <button type='submit'>Login &rarr;</button>
        </Form>
        </>
    )
    
}

const FormikForm = withFormik({
  mapPropsToValues({ name, age, email }) {
    return {
      name: name || '',
      age: age || '',
      email: email || ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.string().required(),
    email: Yup.string().required(),
  }),



  handleSubmit(values, {setStatus}) {
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', {...values, id: Date.now()})
      .then(res => {
          console.log(values)
          console.log(res.data)
          })
      .catch(err => {
          console.log(values)
          console.log(err.response)
      });
  }
})(AddFriend);

export default FormikForm;