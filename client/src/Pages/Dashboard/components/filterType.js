import React from 'react'

export default function FilterType(props) {
      return (
            <div className="col-sm-12">
                  <div className="card">
                        <div className="card-group-item">
                              <div className="card-header">
                                    <h6 className="title ">Filter By Gender </h6>
                              </div>
                              <div className="filter-content">
                                    <div className="card-body">
                                          <label className="form-check">
                                                <input
                                                      className="form-check-input"
                                                      type="radio"
                                                      name="filter"
                                                      value="male"
                                                      onChange={props.handleChange}
                                                />
                                                <span className="form-check-label">Male</span>
                                          </label>
                                          <label className="form-check">
                                                <input
                                                      className="form-check-input"
                                                      type="radio"
                                                      name="filter"
                                                      value="female"
                                                      onChange={props.handleChange}
                                                />
                                                <span className="form-check-label">Female</span>
                                          </label>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}


