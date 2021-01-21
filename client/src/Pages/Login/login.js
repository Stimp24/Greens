import React, { useState } from 'react'
import "../SignUp/scss/signup.scss"

import TextInput from "../Global/components/reusuable/Input/TextInput"
const Login = () => {

      const [email, setEmail] = useState();
      const [password, setPassword] = useState();

      const handleEmailChange = (e) => {
            setEmail(e.target.value)
      }

      const handlePasswordChange = (e) => {
            setPassword(e.target.value)
      }

      const handleSubmit = () => {
            e.preventDefault();
            this.props.history.push("/Dashboard");
      }
      return (
            <section className="re-signup">
                  <div className="container ">
                        <div className="row">
                              <div className="col-4 offset-4 mb-5 mt-5 rp-signup-bk">
                                    <div className="mx-auto">
                                          <div className="col-12">
                                                <div className="row">
                                                      <div className="mx-auto">
                                                            <h2 className="title">Login</h2>
                                                      </div>
                                                </div>
                                                <form className="col-12" onSubmit={handleSubmit}>
                                                      <div className="form-group mt-4">
                                                            <TextInput
                                                                  labelName="Email Address"
                                                                  type="email"
                                                                  className="form-control"
                                                                  id="email"
                                                                  placeholder="Enter email"
                                                                  value={email}
                                                                  onChange={handleEmailChange}
                                                            />
                                                      </div>
                                                      <div className="form-group">
                                                            <TextInput
                                                                  labelName="Password"
                                                                  type="password"
                                                                  className="form-control"
                                                                  id="password"
                                                                  value={password}
                                                                  onChange={handlePasswordChange}
                                                            />
                                                      </div>
                                                      <div className="mx-auto col-6">
                                                            <button
                                                                  type="submit"
                                                                  className="btn btn-primary mb-3"
                                                            >
                                                                  Login
                                </button>
                                                      </div>

                                                </form>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>
            </section>
      );
}

export default Login
