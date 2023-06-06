import { useState, useEffect } from "react";
//import { useDispatch } from "react-redux";

export const useForm = (initialForm, validateForm) => {
  //const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null);

  /*useEffect(() => {
        setErrors(validateForm(form));
    }, [form]);*/

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /*if(Object.keys(errors).length === 0) {
            setResponse(true);
        } else {
            return;
        }*/
  };

  return {
    form,
    errors,
    response,
    handleChange,
    handleSubmit,
  };
};
