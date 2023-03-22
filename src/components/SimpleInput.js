import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName, 
    isValid: enteredNameIsValid, 
    hasError: nameInputHasError, 
    valueChangeHandler: nameInputChangeHandler, 
    valueBlurHandler: nameInputBlur, 
    reset: resetNameInput} = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail, 
    isValid: enteredEmailIsValid, 
    hasError: emailInputHasError, 
    valueChangeHandler: emailInputChangeHandler, 
    valueBlurHandler: emailInputBlur, 
    reset: resetEmailInput} = useInput(value => value.includes('@'));

  let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
    }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    resetNameInput();
    resetEmailInput();
  }

  const nameInputStyle = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputStyle = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputStyle}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlur} />
        {nameInputHasError && <p className="error-text">Name must not be EMPTY !</p>}
      </div>
      <div className={emailInputStyle}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={emailInputChangeHandler} value={enteredEmail} onBlur={emailInputBlur} />
        {emailInputHasError && <p className="error-text">Email is INVALID !</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
