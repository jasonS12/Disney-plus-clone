import "./Login.css"
import React from 'react';


function Login() {
    return (
        <div className='body-section'>
            <img src="images/login-background.jpg" />
            <div className="Content">
               <div className="CTA">
                  <div className="CTA-logo">
                        <img src="images/cta-logo-one.svg" alt="this is logo"/>
                </div>
                  <div className="Sign-up">
                        <button>Get All There</button>
                  </div>

                  <div className="Description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolor et quis ab officia nihil, qui facere iure nesciunt? Ipsum!</p>
                  </div>
                  <div className="logoTwo">
                      <img src="images/logo2.png"/>
                  </div>
               </div>
            </div>
        </div>

    )
}

export default Login



