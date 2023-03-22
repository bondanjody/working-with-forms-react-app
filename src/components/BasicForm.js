import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = (props) => {
  const {
    value: firstnameValue,
    isValid: firstnameIsValid,
    hasError: firstnameHasError,
    valueChangeHandler: firstnameChangeHandler,
    valueBlurHandler: firstnameBlurHandler,
    reset: resetFirstname
  } = useInput(isNotEmpty);

  const {
    value: lastnameValue,
    isValid: lastnameIsValid,
    hasError: lastnameHasError,
    valueChangeHandler: lastnameChangeHandler,
    valueBlurHandler: lastnameBlurHandler,
    reset: resetLastname
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isEmail);

  let formIsValid = false;

  // function untuk mengatur ketika form di submit 
  const submitHandler = event => {
    event.preventDefault();
    
    if (!formIsValid) {
      return;
    }

    console.log("Submitted !");
    console.log(firstnameValue, lastnameValue, emailValue);

    // Mereset field
    resetFirstname();
    resetLastname();
    resetEmail();
  }

  // Mengecek validitas masing-masing field
  if (firstnameIsValid && lastnameIsValid && emailIsValid) {
    formIsValid = true;
  }

  // Menentukan styling field jika invalid
  const firstnameStyle = firstnameHasError ? 'form-control invalid' : 'form-control';
  const lastnameStyle = lastnameHasError ? 'form-control invalid' : 'form-control';
  const emailStyle = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstnameStyle}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={firstnameValue} onChange={firstnameChangeHandler} onBlur={firstnameBlurHandler} />
          {firstnameHasError && <p className="error-text">Please enter a valid first name.</p>}
        </div>
        <div className={lastnameStyle}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={lastnameValue} onChange={lastnameChangeHandler} onBlur={lastnameBlurHandler} />
          {lastnameHasError && <p className="error-text">Please enter a valid last name.</p>}
        </div>
      </div>
      <div className={emailStyle}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
