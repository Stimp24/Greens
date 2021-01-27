import React from 'react'
import "../scss/pplList.scss"
import { Link } from "react-router-dom";
export default function PplList(props) {
      const { items } = props;
      return (
            <div className="col-6">
                  <Link
                        to={{
                              pathname: "/users/" + items.id,
                              state: {
                                    items: props.items
                              }
                        }}
                  >
                        <div key={items.id} className="mmpplList">
                              <div className="card mb-3">
                                    <div className="cardHeader mb-5 ">
                                          <img
                                                className="img-fluid manageImage"
                                                src={items.links.pictures}
                                                alt="Card cap"
                                          />

                                    </div>
                                    <div className="divider avatar mx-auto">

                                    </div>
                                    <div className="card-body">
                                          <div className="row">
                                                <div className="col-12">
                                                      <div className="badge badge-primary">
                                                            {" "}
                                                            {items.saleType}
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="row">
                                                <div className="col-12">
                                                      <div className="text-center text-dark">
                                                            {" "}
                                                            {items.fullAddress.streetNumber} {items.fullAddress.streetName}
                                                      </div>
                                                </div>
                                          </div>
                                          <div className="row">
                                                <div className="col-12">
                                                      <div className="text-center text-dark">
                                                            {" "}
                                                            {items.fullAddress.city}, {items.fullAddress.state}{" "}
                                                            {items.fullAddress.zipCode}

                                                      </div>
                                                </div>
                                          </div>
                                          <div className="row -re_mt-15">
                                                <div className="col-4 mx-auto">
                                                      <div className="col-6">
                                                            <i class="fas fa-bed fa-lg"></i>
                                                      </div>

                                                      <div>
                                                            <span className="card-title text-dark">{items.beds} </span>
                                                            <span className="card-text mb-3 text-dark">Beds</span>
                                                      </div>
                                                </div>

                                                <div className="col-4 mx-auto">
                                                      <div className="col-6">
                                                            <i class="fas fa-bath fa-lg"></i>
                                                      </div>

                                                      <div>
                                                            <span className="card-title text-dark">{items.baths} </span>
                                                            <span className="card-text mb-3 text-dark">Bath</span>
                                                      </div>
                                                </div>
                                                <div className="col-4 mx-auto">
                                                      <div className="col-6">
                                                            <i class="fas fa-ruler-horizontal fa-lg"></i>
                                                      </div>

                                                      <div>
                                                            <span className="card-title text-dark">{items.sqft} </span>
                                                            <span className="card-text mb-3 text-dark">sqft</span>
                                                      </div>
                                                </div>
                                          </div>


                                          {/*  <div>
                                                <span className="card-title">Location: </span>
                                                <span className="card-text mb-3">
                                                      {items.location.city}, {items.location.state}
                                                </span>
                                          </div> */}

                                    </div>
                                    <div className="card-footer">
                                          <Link
                                                to={{
                                                      pathname: "/offer/" + items.id + items.fullAddress.streetNumber + items.fullAddress.streetName,
                                                      state: {
                                                            items: props.items
                                                      }
                                                }}
                                          >Offer</Link>
                                    </div>

                              </div>
                        </div>
                  </Link>
            </div>
      )
}
