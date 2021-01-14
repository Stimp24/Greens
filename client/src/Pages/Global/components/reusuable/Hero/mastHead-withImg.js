import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
function MastHeadwithImg(props) {
      return (
            <section className={props.sectionClass ? props.sectionClass : "jumbotron"}>
                  <div className="container">
                        <h1 className={props.titleClass ? props.titleClass : "display-4"}>{props.title}</h1>
                        <p className={props.subTitleClass ? props.subTitleClass : "lead"}>{props.subTitle}</p>
                        <div className={props.paragraphClass ? props.paragraphClass : "my-4"}>
                              <p>{props.paragraph}</p>
                              <Link className={props.buttonClass ? props.buttonClass : "btn btn-primary btn-lg"} to="#" >{props.button}</Link>
                        </div>
                  </div>

            </section>
      )
}


MastHeadwithImg.propTypes = {
      sectionClass: PropTypes.string,
      titleClass: PropTypes.string,
      title: PropTypes.string,
      subTitleClass: PropTypes.string,
      subTitle: PropTypes.string,
      paragraphClass: PropTypes.string,
      paragraph: PropTypes.string,
      buttonClass: PropTypes.string,
      button: PropTypes.string

}
export default MastHeadwithImg

