import React from 'react'

export default function Signup() {
  return (
    <>
        <main className="signup">
            
            <div className='signup-div'>
                <form action="#">

                    <h1>Create an account</h1>

                    <div>
                        <label for="username">Your username</label>
                        <input type="text" name="username" placeholder="username" required="true" />
                    </div>
                    <div className="error username"></div>

                    <div>
                        <label for="email">Your email</label>
                        <input type="email" name="email" placeholder="name@company.com" required="true" />
                    </div>
                    <div className="error email"></div>

                    <div>
                        <label for="password">Password</label>
                        <input type="password" name="password" required="true" />
                    </div>
                    <div className="error password"></div>

                    <div>
                        <label for="confirm-password">Confirm password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" required="true" />
                    </div>
                    <div className="error confirm"></div>

                    <div>
                      <div>
                        <input id="terms" aria-describedby="terms" type="checkbox" required="true" />
                      </div>
                      <div>
                        <label for="terms">I accept the <a href="#">Terms and Conditions</a></label>
                      </div>
                    </div>
                    <button type="submit">Create an account</button>
                    <p>
                        Already have an account? <a href="#">Login here</a>
                    </p>

                </form>
            </div>
        </main>
        

    </>
  )
}
