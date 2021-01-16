import React from "react";
import "./scss/masthead.scss"
function MastHeadwithCOA(props) {
    return (
        <section className={props.sectionClass ? "-reBackground " + props.sectionClass : null}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="col-8 mx-auto -re_mt-70">
                            <h1 className={props.titleClass ? props.titleClass : "display-4"}>{props.title}</h1>
                            <div className="row">
                                <div className="input-group">
                                    <input type="text" className="form-control re_search-box font-text" maxlength="200" placeholder="State, County, City, Zip Code..."></input>
                                    <span className="searchButton"><i class="fas fa-search fa-2x "></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MastHeadwithCOA