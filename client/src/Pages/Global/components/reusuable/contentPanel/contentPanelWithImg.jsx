import React from 'react'
import PropTypes from 'prop-types'
const ContentPanelWithImg = ({ sectionClass, titleClass, title, content, img }) => {
      return (
            <section className={sectionClass ? sectionClass : null}>
                  <div className="fluid-container">
                        <div className="row no-gutters ">
                              <div className="col-md-6 col-sm-12">
                                    <div className="col-12">
                                          <div className="mt-5">
                                                <div className="col-12 mx-auto">
                                                      <h2 className={titleClass ? titleClass : null}>
                                                            {title}
                                                      </h2>
                                                </div>
                                                <div className="mx-auto pl-3">
                                                      {content && content.map(paragraphs => {
                                                            return (
                                                                  <p>{paragraphs}</p>
                                                            )

                                                      })}

                                                </div>
                                          </div>

                                    </div>
                              </div>
                              <div className="col-md-6 col-sm-12 -re_mt-70">
                                    <div className={img} />
                              </div>
                        </div>
                  </div>
            </section>
      )
}

ContentPanelWithImg.propTypes = {
      sectionClass: PropTypes.string,
      titleClass: PropTypes.string,
      img: PropTypes.string,
      content: PropTypes.shape({
            paragraphs: PropTypes.array,
      }),
      title: PropTypes.string,

}
export default ContentPanelWithImg
