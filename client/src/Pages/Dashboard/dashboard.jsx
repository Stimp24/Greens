//Libraries
import React, { Component } from 'react'

//components
import FilterType from "./components/filterType"
import PplList from "./components/pplList"
import Search from "./components/search"
import home4 from "./img/home4.jpg"


export class Dashboard extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  newData: null,
                  results: [{
                        id: 1,
                        links: {
                              pictures:"https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80 750w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80 1050w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80 1350w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80 1500w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80 1650w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80 1950w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80 2100w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80 2250w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80 2550w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2700&q=80 2700w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80 2850w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3150&q=80 3150w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3300&q=80 3300w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3450&q=80 3450w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3750&q=80 3750w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3900&q=80 3900w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4050&q=80 4050w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4350&q=80 4350w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4500&q=80 4500w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4650&q=80 4650w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4950&q=80 4950w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=5100&q=80 5100w, https://images.unsplash.com/photo-1570544820446-1690843de6ea?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=5184&q=80 5184w"
                        },
                        fullAddress:{
                              streetNumber: 580,
                              streetName: "CharlieFuller Rd",
                              city: "Grantville",
                              state: "GA",
                              zipCode: 30220,
                              latitude:0,
                              longitude:0,
                        },
                        saleType: "Bank Owned",
                        beds: 3,
                        baths: 4,
                        sqft: 1482,
                        description: "The property at 136 Cedars Glen Cir, Villa Rica, GA is a Residential Single Family property with 3 bedroom(s) and 3 bath",
                        halfBath: 1,
                        homeType: "Single Family",
                        lotSize: 20473,
                        views:30, 
                  }],
                  search: "",
                  filter: ""
            };
            this.handleChange = this.handleChange.bind(this);
      }

      // componentDidMount() {
      //       fetch(`https://randomuser.me/api/?results=15`)
      //             .then(response => response.json())
      //             .then(data => this.setState({ data, results: data.results }));
      // }

      handleChange = e => {
            this.setState({
                  [e.target.name]: e.target.value
            });
      };

      render() {
            const profileData = this.state.results;
            let listProfile = profileData.filter(items => {
                  if (this.state.search) {
                        return items.name.first
                              .toLowerCase()
                              .includes(this.state.search.toLowerCase());
                  }
                  if (this.state.filter) {
                        return items.gender
                              .toLowerCase()
                              .indexOf(this.state.filter.toLowerCase());
                  } else return items;
            });
            return (
                  <div className="container">
                        <div className="row">
                              <div className="col-12 mb-5">
                                    <Search
                                          handleChange={this.handleChange}
                                          profileData={profileData}
                                    />
                              </div>
                        </div>
                        <div className="row">
                              <div className="col-12 mb-3">
                                    <FilterType handleChange={this.handleChange} />
                              </div>
                        </div>

                        <div className="row">
                              {listProfile &&
                                    listProfile.map((items, index) => {
                                          return (
                                                <PplList
                                                      index={index}
                                                      items={items}
                                                      profileData={profileData}
                                                />
                                          );
                                    })}
                        </div>
                  </div>

            );
      }
}



export default Dashboard


