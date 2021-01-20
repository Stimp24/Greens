import React from "react";
import Search from "../SearchBar/search"
const MastHeadwithCOA = ({ sectionClass, titleClass, title }) => {
    return (
        <section className={sectionClass ? "-reBackground " + sectionClass : null}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="col-8 mx-auto -re_mt-70">
                            <h1 className={titleClass ? titleClass : "display-4"}>{title}</h1>
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