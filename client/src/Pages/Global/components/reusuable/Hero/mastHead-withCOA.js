import React from "react";
import Search from "../SearchBar/search"
function MastHeadwithCOA(props) {
    return (
        <section className={props.sectionClass ? "-reBackground " + props.sectionClass : null}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="col-8 mx-auto -re_mt-70">
                            <h1 className={props.titleClass ? props.titleClass : "display-4"}>{props.title}</h1>
                            <div className="row">
                                <Search />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MastHeadwithCOA