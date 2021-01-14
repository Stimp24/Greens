import React, { Component } from 'react'
import "./scss/signup.scss"
export class SignUp extends Component {
      state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            zipCode: ""
      };

      handleChange = e => {
            this.setState({
                  [e.target.id]: e.target.value
            });
      };
      handleSubmit = e => {
            e.preventDefault();
            this.props.history.push("/Dashboard");
      };

      render() {
            return (
                  <section className="re-signup">
                        <div className="container ">
                              <div className="row">
                                    <div className="col-4 offset-4 mb-5 mt-5 rp-signup-bk">
                                          <div className="mx-auto">
                                                <div className="col-12">
                                                      <div className="row">
                                                            <div className="mx-auto">
                                                                  <h2 className="title">Sign Up</h2>
                                                            </div>
                                                      </div>
                                                      <form className="col-12" onSubmit={this.handleSubmit}>
                                                            <div className="form-group mt-4">
                                                                  <label htmlFor="firstName">First Name</label>
                                                                  <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="firstName"
                                                                        onChange={this.handleChange}
                                                                  />
                                                            </div>
                                                            <div className="form-group mt-4">
                                                                  <label htmlFor="lastName">Last Name</label>
                                                                  <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="lastName"
                                                                        onChange={this.handleChange}
                                                                  />
                                                            </div>
                                                            <div className="form-group">
                                                                  <label htmlFor="Password">Password</label>
                                                                  <input
                                                                        type="password"
                                                                        className="form-control"
                                                                        id="password"
                                                                        onChange={this.handleChange}
                                                                  />
                                                            </div>
                                                            <div className="form-group mt-4">
                                                                  <label htmlFor="Email">Email address</label>
                                                                  <input
                                                                        type="email"
                                                                        className="form-control"
                                                                        id="email"
                                                                        placeholder="Enter email"
                                                                        onChange={this.handleChange}
                                                                  />
                                                            </div>
                                                            <div className="form-group mt-4">
                                                                  <label htmlFor="zipcode">Zip Code</label>
                                                                  <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="zipcode"
                                                                        onChange={this.handleChange}
                                                                  />
                                                            </div>
                                                            <div className="mx-auto col-6">
                                                                  <button
                                                                        type="submit"
                                                                        className="btn btn-primary mb-3"
                                                                  >
                                                                        Sign Up
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
}

export default SignUp
