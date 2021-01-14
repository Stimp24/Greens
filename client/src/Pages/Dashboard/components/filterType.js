import React from 'react'
import MultiSelect from "react-multi-select-component";

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
            <div className="col-sm-12">
                  <div className="card">
                        <div className="card-group-item">
                              <div className="card-header">
                                    <h6 className="title ">Filter </h6>
                              </div>
                              <div className="filter-content">
                                    <div className="row card-body">

                                          <div className="col-12 col-md-3">
                                                <div className="form-check-label">Property Type</div>
                                                <label className="form-check">
                                                      <MultiSelect
                                                            className="form-check-input"
                                                            name="filter"
                                                            options={options}
                                                            onChange={props.handleChange}
                                                            value={props.selected}
                                                      />

                                                </label>
                                          </div>
                                          <div className="col-12 col-md-3">
                                                <label className="form-check">
                                                      <select
                                                            className="form-check-input"
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
                                                      <span className="form-check-label">Bath</span>
                                                </label>
                                          </div>
                                          <div className="col-12 col-md-3">
                                                <label className="form-check">
                                                      <select
                                                            className="form-check-input"
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
                                                      <span className="form-check-label">Bed</span>
                                                </label>
                                          </div>
                                          <div className="col-12 col-md-3">
                                                <div className="form-check-label">Property Type</div>
                                                <label className="form-check">
                                                      <MultiSelect
                                                            className="form-check-input"
                                                            name="filter"
                                                            options={optionStatus}
                                                            onChange={props.handleChange}
                                                            value={props.selected}
                                                      />
                                                </label>

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}


