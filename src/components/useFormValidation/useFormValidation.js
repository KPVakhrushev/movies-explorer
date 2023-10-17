import React from 'react';

const useFormValidation = (callback, initialValues={}) => {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const handleChange = (event) => {
    event.persist();
    const error = !event.target.validity.valid? (event.target.getAttribute('errormsg')?? event.target.validationMessage) :'';
    const submitDisabled = !event.currentTarget.checkValidity();
    setErrors((errors)=>{
      errors.submit = '';
      errors.submit = submitDisabled;
      if(!error){
        delete errors[event.target.name];
        return errors;
      }
      else{
        return  {...errors, [event.target.name]: error};
      }
    })
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };
  React.useEffect(() => {
    //setValues(data);
  });
  return {
    handleChange,
    values,
    errors,
    setValues,
    setErrors
  }
};
export default useFormValidation;
