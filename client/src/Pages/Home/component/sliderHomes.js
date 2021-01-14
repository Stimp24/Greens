import React from "react"

function SliderHomes(props) {
    return (
        <section className={props.sectionClass?props.sectionClass:null}>
            <div className="container">
                <div className="row">
                      <div className="col-12">
                        <h2>Property in your area</h2>
                        {props.state && <h3>{props.state}</h3>}
                    </div>
                </div>
                <div className="row">
                    <div className={ props.outterContainer?props.outterContainer:"col-12"}>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderHomes;