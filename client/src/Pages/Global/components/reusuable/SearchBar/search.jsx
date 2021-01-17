import React from 'react'
import "./scss/searchBar.scss"
const Search = (props) => {
      return (
            <div className="-re_searchBar col-12">
                  <div className="input-group">
                        <input
                              type="text"
                              className="form-control re_search-box font-text"
                              maxlength="200"
                              onChange={props.handleChange}
                              value={props.value}
                              placeholder="State, County, City, Zip Code..."
                        />

                        <span className="searchButton"><i class="fas fa-search fa-2x "></i></span>
                  </div>
            </div>
      )
}
export default Search