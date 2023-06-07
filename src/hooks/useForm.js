import { useState, useEffect } from "react";

export const useForm = (initialForm, validateForm, success, error) => {
  //const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState(null);
  const [send, setSend] = useState(null);

  useEffect(() => {
    setErrors(validateForm(form));
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  console.log(Object.keys(errors).length === 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSend(true);
    if (Object.keys(errors).length === 0) {
      setResponse(true);
      success(e);
    } else {
      error(e);
    }
  };

  return {
    form,
    errors,
    response,
    send,
    handleChange,
    handleSubmit,
  };
};
