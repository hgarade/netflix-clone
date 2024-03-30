export const validateForm = (email, password, name) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  let isNameValid = false;
  if (name) {
    isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  }

  let errorMessages = {};

  errorMessages.emailInvalidMsg = !isEmailValid
    ? "* Email is not valid."
    : null;
  errorMessages.passwordInvalidMsg = !isPasswordValid
    ? "* Password is not valid."
    : null;
  errorMessages.nameInvalidMsg = !isNameValid
    ? "* Name is not in correct format."
    : null;
  return errorMessages;
};
