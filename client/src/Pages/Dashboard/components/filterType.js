import React from 'react'
import MultiSelect from "react-multi-select-component";
import "../scss/filter.scss"
import TextInput from "../../Global/components/reusuable/Input/TextInput"
const FilterType = (priceValue, handleChange, propertySelected, bath, bed, status) => {
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
            <div className="card adj-height">
                  <div className="card-group-item">
                        <div className="col-12 card-header">
                              <h6 className="title ">Filter </h6>
                        </div>
                        <div className="row card-body">
                              {/* <div className="col-12 mx-auto col-md-3">
                                    <TextInput
                                          labelName="Price"
                                          className="form-input"
                                          min="0"
                                          max="10000000"
                                          type="number"
                                          id="price-from"
                                          placeholder="$1,000,000"
                                          value={priceValue}
                                    />
                              </div> */}
                              <div className="col-12 mx-auto col-md-3">
                                    <h6 className="title ">Property Type </h6>
                                    <MultiSelect
                                          className="mx-auto form-check-input"
                                          name="Property Type"
                                          options={options}
                                          onChange={handleChange}
                                          value={propertySelected}
                                    />
                              </div>
                              <div className="col-12 mx-auto col-md-3">
                                    <h6 className="title ">Baths</h6>
                                    <select
                                          className=" mx-auto form-select form-check-input"
                                          name="filter"
                                          value={bath}
                                          onChange={handleChange}
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
                                          value={bed}
                                          onChange={handleChange}
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
                                          onChange={handleChange}
                                          value={status}
                                    />

                              </div>
                        </div>
                  </div>
            </div>
      );
}


export default FilterType