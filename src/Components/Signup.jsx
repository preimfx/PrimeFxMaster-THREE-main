import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../config/firebase'; // Ensure correct import
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup, updateProfile } from 'firebase/auth';
import { useMyContext } from './Mycontext';
import LOGO from '../assets/NAV.png';
import '../Components/login.css';

const Signup = () => {
  const { toggleNavbarVisibility } = useMyContext();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    toggleNavbarVisibility(true);
    return () => {
      toggleNavbarVisibility(false);
    };
  }, [toggleNavbarVisibility]);

  const validateName = (name) => {
    const restrictedNames = ['Kvng', 'Miss', 'Mhiz', 'Itz', 'Szn', 'Thatgirl'];
    const formattedName = name.trim();
    return formattedName && formattedName[0] === formattedName[0].toUpperCase() && !restrictedNames.includes(formattedName);
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) => password.length >= 6;

  const signup = async (e) => {
    e.preventDefault();

    if (!validateName(firstName)) {
      alert('Please enter a valid name without restricted words.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      alert('Please choose a stronger password (at least 6 characters).');
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update profile and send verification email
      await updateProfile(user, { displayName: firstName });
      await sendEmailVerification(user);

      console.log('User created:', user);
      alert('A verification email has been sent to your email address. Please verify your email before logging in.');
      navigate('/login'); // Redirect to a page that informs users to check their email

    } catch (error) {
      console.error('Error signing up:', error.code, error.message);
      alert('Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error('Error signing in with Google:', error);
      alert('Failed to sign in with Google. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='Signup-Hero'>
        <div className='Singup-Container'>
          <div className='Form-Container'>
            <div className='Logo-BackHome'>
              <img className='Logo' src={LOGO} alt='Logo' />
              <div className='Back'>
                <Link to='/'>Back Home</Link>
              </div>
            </div>

            <div className='Login-to'>
              <h3>Sign Up to PrimeFxmargins</h3>
            </div>

            <form className='Contact-Form' onSubmit={signup}>
              <div className='form-group'>
                <p className='P'>Full Name</p>
                <input
                  type='text'
                  name='name'
                  placeholder='Enter Name'
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />

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

                <input
                  className='BtnC'
                  type='submit'
                  value={loading ? 'Creating Account...' : 'Create Account'}
                  disabled={loading}
                />
              </div>
            </form>

            <div className='OR'>
              <div className='Dash'></div>
              <p>OR</p>
              <div className='Dash'></div>
            </div>

            <button className='Btn2' type='button' onClick={signInWithGoogle} disabled={loading}>
              Sign up with Google
            </button>

            <div className='Policy'>
              <h5>
                By proceeding, you agree to our <Link to='/TermsAndCondition'>Terms and Privacy Policy</Link>
              </h5>
              <h5>
                Already have an Account? <Link to='/login'>Login</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
