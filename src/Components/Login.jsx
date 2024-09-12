import React, { useEffect, useState } from 'react';
import "../Components/login.css";
import { useMyContext } from './Mycontext';
import LOGO from "../assets/NAV.png";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase'; // Ensure correct import
import { signInWithEmailAndPassword, sendEmailVerification, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const { toggleNavbarVisibility } = useMyContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    toggleNavbarVisibility(false); // Set navbar to be hidden on this page
  }, [toggleNavbarVisibility]);

  const login = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if the email is verified
      if (!user.emailVerified) {
        alert('Please verify your email before logging in.');
        await sendEmailVerification(user); // Optionally, resend verification email
        await signOut(auth); // Sign out the user if email is not verified
        setLoading(false);
        return;
      }

      console.log('User logged in:', user);
      navigate('/'); // Redirect to home or dashboard

    } catch (error) {
      console.error('Error logging in:', error.code, error.message);
      alert('Failed to log in. Please check your credentials and try again.');
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    setLoading(true);

    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the email is verified
      if (!user.emailVerified) {
        alert('Please verify your email before logging in.');
        await sendEmailVerification(user); // Optionally, resend verification email
        await signOut(auth); // Sign out the user if email is not verified
        setLoading(false);
        return;
      }

      console.log('User logged in with Google:', user);
      navigate('/'); // Redirect to home or dashboard

    } catch (error) {
      console.error('Error logging in with Google:', error.code, error.message);
      alert('Failed to log in with Google. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='Signup-Hero'>
        <div className='Singup-Container'>
          <div className="Form-Container">
            <div className='Logo-BackHome'>
              <img className='Logo' src={LOGO} alt='Logo'></img>
              <div className='Back'>
                <Link to="/">Back Home</Link>
              </div>
            </div>

            <div className='Login-to'>
              <h3>Login to PrimeFxmargins</h3>
            </div>

            <form className='Contact-Form' onSubmit={login}>
              <div className='form-group'>
                <p className='P2'>Email</p>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter Email'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />

                <p className='P2'>Password</p>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className='Btn' type='submit' disabled={loading}>
                  {loading ? 'Logging In...' : 'Login Account'}
                </button>
              </div>
            </form>

            <div className='OR'>
              <div className='Dash'></div>
              <p>OR</p>
              <div className='Dash'></div>
            </div>

            <button className='Btn2' type='button' onClick={loginWithGoogle} disabled={loading}>
              Sign up with Google
            </button>

            <div className='Policy'>
              <h5>By proceeding, you agree to our <Link to='/TermsAndCondition'>Terms and Privacy Policy</Link></h5>
              <h5>Don't have an Account? <Link to="/signup">Signup</Link></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
