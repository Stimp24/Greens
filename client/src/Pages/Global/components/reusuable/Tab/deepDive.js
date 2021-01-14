import React, { Fragment } from 'react'

import "./scss/deepDive.scss"
const DeepDive = (props) => {
      return (
            <Fragment>
                  <div
                        className={
                              props.className ? props.className : "-ta_description scroll mb-5"
                        }
                  >
                        <div className="row">
                              {props.items.gender && (
                                    <div className="col-12 mt-3">
                                          <span className="ta_title">Gender: </span>
                                          <span className="ta_text">{props.items.gender}</span>
                                    </div>
                              )}
                        </div>
                        <div className="row">
                              {props.items.email && (
                                    <div className="col-12 mt-3">
                                          <span className="ta_title">Email: </span>
                                          <span className="ta_text">{props.items.email}</span>
                                    </div>
                              )}
                        </div>
                        <div className="row">
                              {props.items.phone && (
                                    <div className="col-12 mt-3">
                                          <span className="ta_title">Phone: </span>
                                          <span className="ta_text">{props.items.phone}</span>
                                    </div>
                              )}
                        </div>
                        <div className="row">
                              {props.items.dob.date && (
                                    <div className="col-12 mt-3">
                                          <span className="ta_title">BirthDate: </span>
                                          <span className="ta_text">{props.items.dob.date}</span>
                                    </div>
                              )}
                        </div>
                        <div className="row">
                              {props.items.dob.age && (
                                    <div className="col-12 mt-3">
                                          <span className="ta_title">Age: </span>
                                          <span className="ta_text">{props.items.dob.age}</span>
                                    </div>
                              )}
                        </div>
                        <div className="row">
                              {props.items.cell && (
                                    <div className="col-12 mt-3">
                                          <span className="ta_title">Cell: </span>
                                          <span className="ta_text">{props.items.cell}</span>
                                    </div>
                              )}
                        </div>
                        <div className="row">
                              {props.items.location && (
                                    <div className="col-12 mt-3">
                                          <span className="ta_title">Address: </span>
                                          <span className="ta_text">{props.items.location.street.number}{" "}</span>
                                          <span className="ta_text">{props.items.location.street.name}</span>

                                    </div>
                              )}
                        </div>
                        <div className="row">
                              {props.items.location.city && (
                                    <div className="col-12 mt-3">

                                          <span className="ta_title">City: </span>
                                          <span className="ta_text">{props.items.location.city}</span>

                                    </div>
                              )}
                        </div>
                        <div className="row">
                              {props.items.location.state && (
                                    <div className="col-12 mt-3">
                                          <span className="ta_title">State: </span>
                                          <span className="ta_text">{props.items.location.state}</span>
                                    </div>
                              )}
                        </div>
                        <div className="row">
                              {props.items.location.postcode && (
                                    <div className="col-12 mt-3">
                                          <span className="ta_title">ZipCode: </span>
                                          <span className="ta_text">{props.items.location.postcode}{" "}</span>
                                    </div>
                              )}
                        </div>
                        <div className="row">
                              {props.items.location.country && (
                                    <div className="col-12 mt-3">

                                          <span className="ta_title">Country: </span>
                                          <span className="ta_text">{props.items.location.country}{" "}</span>
                                    </div>
                              )}
                        </div>

                  </div>
            </Fragment>
      );
};

export default DeepDive;