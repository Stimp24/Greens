import React, { Fragment } from 'react'

const QuickHits = (props) => {
      return (
            <Fragment>
                  <div
                        className={
                              props.className ? props.className : " scroll mb-5"
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

                  </div>
            </Fragment>
      );
};

export default QuickHits;