import React from 'react';

const useFormValidation = (initialValues={}, joiScheme) => {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const handleChange = (event) => {
    event.persist();
    const newValues = { ...values, [event.target.name]: event.target.value };
    const validity  = joiScheme.validate(newValues, {abortEarly :false});

    setErrors((errors)=>{
      const newErrors = {}
      validity.error?.details.forEach(er => {
        newErrors[er.path[0]] = er.message
      })
      newErrors.submit = Boolean(validity.error);
      return newErrors;
    })
    setValues(newValues);
  };

  return { handleChange, values, errors, setValues, setErrors }
};
export default useFormValidation;
