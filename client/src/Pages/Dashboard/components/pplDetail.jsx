//Libraries
import React from 'react'

//Component
import Tab from "../../Global/components/reusuable/Tab/tab"
import QuickHits from "../../Global/components/reusuable/Tab/QuickHits"
import DeepDive from "../../Global/components/reusuable/Tab/deepDive"

//scss
import "../scss/pplDetail.scss"

export default function pplDetail(props) {
      const items = props.location.state.items;
      console.log(items)
      return (
            <div>
                  <section className="basicInfo -ta_description">
                        <div className="container">
                              <div className="row">
                                    <div className="col-6">
                                          <div className="avatar mx-auto">
                                                <img
                                                      className="rounded-circle img-fluid manageImage"
                                                      src={items.links.pictures}
                                                      alt="Image of person"
                                                />
                                          </div>
                                    </div>
                                    {/* <div className="col-6">
                                          <h2>{items.name.title} {items.name.first} {items.name.last}</h2>
                                          <span>Member Since: </span> <span>{items.registered.date} </span>
                                    </div> */}
                              </div>
                              <div className="row">
                                    <div className="col-12">
                                          <Tab>
                                                <div label="Basic Info">
                                                      <QuickHits
                                                            items={items}
                                                      />
                                                </div>
                                                <div label="Deep Dive">
                                                      <DeepDive
                                                            items={items}
                                                      />
                                                </div>
                                          </Tab>
                                    </div>
                              </div>
                        </div>
                  </section>


            </div>
      )
}
