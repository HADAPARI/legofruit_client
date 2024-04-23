const validateField = (value, regex, errorMessage) => {
  let error = "";
  if (value === "") {
    error = "Please fill this field.";
  } else if (!regex?.test(value)) {
    error = errorMessage;
  }

  return error;
};

export default validateField;
