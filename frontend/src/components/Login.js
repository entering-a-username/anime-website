import React, { useState } from 'react'

export default function Login() {

    // form values
    const [username_email, setUsername_email] = useState('');
    const [password, setPassword] = useState('');

    // errors
    const [usernameEmailError, setUsernameEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();

      setUsernameEmailError('');
      setPasswordError('');

      // sending to backend
      console.log(username_email)
      try {
          const res = await fetch('http://localhost:3050/login', {
            method: 'POST',
            body: JSON.stringify({ username_email, password }),
            headers: { 'Content-Type': 'application/json' },
          });
    
          const data = await res.json();
          console.log(data);
    
          if (data.errors) {
            setUsernameEmailError(data.errors.username_email || '');
            setPasswordError(data.errors.password || '');
          } else if (data.user) {
            window.location.href = '/'; // flash mesage +
          }
        } catch (err) {
          console.log(err);
      };
    }

  return (
    <>

      <main className="login">
        <div className='login-div'>
          <form onSubmit={handleSubmit}>
              <h1>Create an account</h1>
              <div className='label-input'>
                  <label htmlFor="email_username">Your email or username</label>
                  <input 
                    onChange={(e) => setUsername_email(e.target.value)}
                    value={username_email} type="text" name="email_username" placeholder="email or username" required={true} />
              </div>
              <div className="error email_username"></div>

              <div className='label-input'>
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} type="password" name="password" placeholder="••••••••" required={true} />
              </div>
              <div className="error password"></div>
              

              <div className='terms-div'>
                <div>
                  <input id="terms" aria-describedby="terms" type="checkbox" required={true} />
                </div>
                <div>
                  <label htmlFor="terms">Remember Me</label>
                </div>
              </div>
              <button type="submit">Sign In</button>
              <p>
                  Don't habe an account? <a href="/signup">Signup here</a>
              </p>
          </form>
        </div>
      </main>

    </>
  )
}
