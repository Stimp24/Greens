import React from 'react'
import MultiSelect from "react-multi-select-component";
import "../scss/filter.scss"
export default function FilterType(props) {
      const options = [
            { label: "House", value: "house" },
            { label: "Condo", value: "condo" },
            { label: "Townhouse", value: "townhouse" },
            { label: "Co-op", value: "co-op" },
            { label: "Multi-Family", value: "multiFamily" },
            { label: "Land", value: "land" },
      ]
      const optionStatus = [
            { label: "Coming Soon", value: "comingSoon" },
            { label: "Active", value: "active" },
            { label: "Townhouse", value: "townhouse" },
            { label: "Under Contract/Pending", value: "underContract-pending" },
            { label: "Sold", value: "sold" },
      ]
      return (
            <div className="card">
                  <div className="card-group-item">
                        <div className="col-12 card-header">
                              <h6 className="title ">Filter </h6>
                        </div>
                        <div className="row card-body adj-height">
                              <div className="col-12 mx-auto col-md-3">
                                    <h6 className="title ">Price</h6>
                                    <input
                                          className="form-input"
                                          min="0"
                                          max="10000000"
                                          type="number"
                                          id="price-from"
                                          placeholder="$1,000,000"
                                          value={props.priceValue}
                                    />
                              </div>
                              <div className="col-12 mx-auto col-md-3">
                                    <h6 className="title ">Property Type </h6>
                                    <MultiSelect
                                          className="mx-auto form-check-input"
                                          name="Property Type"
                                          options={options}
                                          onChange={props.handleChange}
                                          value={props.propertySelected}
                                    />
                              </div>
                              <div className="col-12 mx-auto col-md-3">
                                    <h6 className="title ">Baths</h6>
                                    <select
                                          className=" mx-auto form-select form-check-input"
                                          name="filter"
                                          value={props.bath}
                                          onChange={props.handleChange}
                                    >
                                          <option value="">1+</option>
                                          <option value="">2+</option>
                                          <option value="">3+</option>
                                          <option value="">4+</option>
                                          <option value="">5+</option>
                                          <option value="">6+</option>
                                    </select>
                              </div>
                              <div className="col-12 mx-auto col-md-3">
                                    <h6 className="title ">Beds</h6>
                                    <select
                                          className=" mx-auto form-select form-check-input"
                                          name="filter"
                                          value={props.bed}
                                          onChange={props.handleChange}
                                    >
                                          <option value="">1+</option>
                                          <option value="">2+</option>
                                          <option value="">3+</option>
                                          <option value="">4+</option>
                                          <option value="">5+</option>
                                          <option value="">6+</option>
                                    </select>
                              </div>
                              <div className="col-12 mx-auto col-md-3">
                                    <h6 className="title ">Status </h6>
                                    <MultiSelect
                                          className="mx-auto form-check-input"
                                          name="filter"
                                          options={optionStatus}
                                          onChange={props.handleChange}
                                          value={props.status}
                                    />

                              </div>
                        </div>
                  </div>
            </div>
      );
}


