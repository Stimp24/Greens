import React, { useState } from 'react'
//import "./scss/signup.scss"
import TextInput from "../Global/components/reusuable/Input/TextInput"
import PropTypes from 'prop-types'


const OfferForm = (props) => {
      const [firstName, setFirstName] = useState()
      const [lastName, setLastName] = useState();
      const [email, setEmail] = useState();
      const [password, setPassword] = useState();
      const [zipCode, setZipCode] = useState()

      const handleChangeFirstName = (e) => {
            setFirstName(e.target.value)
      }
      const handleChangeLastName = (e) => {
            setLastName(e.target.value)
      }
      const handleChangeEmail = (e) => {
            setEmail(e.target.value)
      }
      const handleChangePassword = (e) => {
            setPassword(e.target.value)
      }
      const handleChangeZipCode = (e) => {
            setZipCode(e.target.value)
      }

      const handleSubmit = e => {
            e.preventDefault();
            props.history.push("/Dashboard");
      };

      console.log(props)
      return (
            <section className="">
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
                                                <form className="col-12" onSubmit={handleSubmit}>
                                                      <div className="form-group mt-4">
                                                            <TextInput
                                                                  labelname="First Name"
                                                                  type="text"
                                                                  className="form-control"
                                                                  id="firstName"
                                                                  value={firstName}
                                                                  onChange={handleChangeFirstName}
                                                            />
                                                      </div>
                                                      <div className="form-group mt-4">
                                                            <TextInput
                                                                  labelname="Last Name"
                                                                  type="text"
                                                                  className="form-control"
                                                                  id="lastName"
                                                                  value={lastName}
                                                                  onChange={handleChangeLastName}
                                                            />
                                                      </div>
                                                      <div className="form-group">
                                                            <TextInput
                                                                  labelname="Password"
                                                                  type="password"
                                                                  className="form-control"
                                                                  id="password"
                                                                  value={password}
                                                                  onChange={handleChangePassword}
                                                            />
                                                      </div>
                                                      <div className="form-group mt-4">
                                                            <TextInput
                                                                  labelname="Email Address"
                                                                  type="email"
                                                                  className="form-control"
                                                                  id="email"
                                                                  placeholder="Enter email"
                                                                  value={email}
                                                                  onChange={handleChangeEmail}
                                                            />
                                                      </div>
                                                      <div className="form-group mt-4">
                                                            <TextInput
                                                                  labelname="Zip Code"
                                                                  type="text"
                                                                  className="form-control"
                                                                  id="zipcode"
                                                                  value={zipCode}
                                                                  onChange={handleChangeZipCode}
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
OfferForm.propTypes = {

}

export default OfferForm
