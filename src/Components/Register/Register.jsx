import '../Register/Register.css';
import TwitterIcon from '@mui/icons-material/Twitter'; // Twitter iconni tanlang

function Register() {
  return (
    <div className="login">
     <TwitterIcon className='Twitter__Icon'/>
      <h2>Log in to Twitter</h2>
      <form className="login_form">
        <input placeholder="Phone number, email address" />
        <input placeholder="Password" />

        <button type="submit">Log In</button>
      </form>
      <ul className="forgot_or_create">
        {/* 'to' prop is not applicable for anchor tags */}
        <a href='#' className="forgot_or_create_links">Forgot password?</a>
        <a href='#' className="forgot_or_create_links">Sign up to Twitter</a>
      </ul>
    </div>
  );
}

export default Register;
