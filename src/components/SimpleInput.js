import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
    }

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  }

  const nameInputBlur = event => {
    setEnteredNameTouched(true);
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }

  const emailInputBlur = event => {
    setEnteredEmailTouched(true);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  const nameInputStyle = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputStyle = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputStyle}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlur} />
        {nameInputIsInvalid && <p className="error-text">Name must not be EMPTY !</p>}
      </div>
      <div className={emailInputStyle}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={emailInputChangeHandler} value={enteredEmail} onBlur={emailInputBlur} />
        {emailInputIsInvalid && <p className="error-text">Email is INVALID !</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
