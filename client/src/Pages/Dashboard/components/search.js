import React, { Fragment } from 'react'

//scss
import "../scss/search.scss";

export default function Search(props) {
      return (
            <Fragment>
                  <section className="mm-search mt-10">
                        <div className="container">
                              <div className="input-group ">
                                    <input
                                          type="text"
                                          name="search"
                                          className="form-control"
                                          placeholder="Search for..."
                                          onChange={props.handleChange}
                                          value={props.value}
                                    />
                                    <span className="input-group-btn">
                                          <button className="btn btn-search" type="button">
                                                <i className="fa fa-search fa-fw" /> Search
                </button>
                                    </span>
                              </div>
                        </div>
                  </section>
            </Fragment>
      )
}
