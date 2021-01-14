import React from "react";
import "./scss/masthead.scss"
function MastHeadwithCOA(props) {
    return (
        <section className={props.sectionClass ? props.sectionClass : null}>
            <div className="container">
                <div className="row">
                    <div className="col-12 -reBackground">
                        <div className="col-12">
                            <h1 className="text-light text-center">Best place to buy property for fair market value</h1>
                            <div className="row">
                                <div className="input-group">
                                    <input type="text" className="form-control" maxlength="200" placeholder="State, County, City, Zip Code..."></input>
                                    <span><i class="fas fa-search"></i></span>
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