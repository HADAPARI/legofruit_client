const validateField = (value, regex, errorMessage) => {
  let error = "";
  if (value === "") {
    error = "* Champ obligatoire";
  } else if (!regex?.test(value)) {
    error = errorMessage;
  }

  return error;
};

export default validateField;
