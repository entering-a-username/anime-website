import React, {useState} from 'react';
// import { useNavigate } from "react-router-dom";

export default function Signup() {
    // VALUES
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // ERRORS
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmError, setConfirmError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setUsernameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmError('');

        // client-side validation
        if (password !== confirmPassword) {
            setConfirmError("Passwords do not match.");
            return;
        }

        // sending to backend
        try {
            const res = await fetch('http://localhost:3050/signup', {
              method: 'POST',
              body: JSON.stringify({ username, email, password }),
              headers: { 'Content-Type': 'application/json' },
            });
      
            const data = await res.json();
            console.log(data);
      
            if (data.errors) {
              setUsernameError(data.errors.username || '');
              setEmailError(data.errors.email || '');
              setPasswordError(data.errors.password || '');
            } else if (data.redirect) {
              window.location.href = '/login'; // flash mesage +
            }
          } catch (err) {
            console.log(err);
        };
    }

  return (
    <>
        <main className="signup">
            
            <div className='signup-div'>
                {/* no action attr in react */}
                <form onSubmit={handleSubmit}>

                    <h1>Create an account</h1>

                    <div className='label-input'>
                        <label htmlFor="username">Your username</label>
                        {/* ??????? VALUYE */}
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username} type="text" name="username" placeholder="username" required={true} />
                    </div>
                    <div className="error username">{usernameError}</div>

                    <div className='label-input'>
                        <label htmlFor="email">Your email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} type="email" name="email" placeholder="name@company.com" required={true} />
                    </div>
                    <div className="error email">{emailError}</div>

                    <div className='label-input'>
                        <label htmlFor="password">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password} type="password" name="password" placeholder="••••••••" required={true} />
                    </div>
                    <div className="error password">{passwordError}</div>

                    <div className='label-input'>
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword} type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" required={true} />
                    </div>
                    <div className="error confirm">{confirmError}</div>

                    <div className='terms-div'>
                      <div>
                        <input id="terms" aria-describedby="terms" type="checkbox" required={true} />
                      </div>
                      <div>
                        <label htmlFor="terms">I accept the <a href="#">Terms and Conditions</a></label>
                      </div>
                    </div>
                    <button type="submit">Signup</button>
                    <p>
                        Already have an account? <a href="/login">Login here</a>
                    </p>

                </form>
            </div>
        </main>
        

    </>
  )

}