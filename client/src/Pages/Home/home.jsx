//Libraries
import React, { Component } from 'react'
import MastHeadwithCOA from "../Global/components/reusuable/Hero/mastHead-withCOA"
import SliderHomes from "./component/sliderHomes"
import ContentPanelWithImg from "../Global/components/reusuable/contentPanel/contentPanelWithImg"
import HowItWorks from "./component/HowItWorks"
import "./scss/home.scss"

class Home extends Component {
      render() {
            return (
                  <div>
                        <MastHeadwithCOA
                              sectionClass="randomppl -re_mb-40"
                              title="Best place to buy pre-Forclosure and forclosure homes"
                              titleClass="text-light text-center"
                        // subTitleClass="subTitleColor"
                        // subTitle="Most popular place to meet random people from around the world"
                        // buttonClass="btn btn-primary btn-lg adjBtn btn-light"
                        // button="Get Started"
                        />

                        {/* <SliderHomes
                              sectionClass="reSlider -re_mb-40"
                              outterContainer="col-12 slide"
                              state="Florida"
                        /> */}
                        <HowItWorks />

                        <ContentPanelWithImg
                              sectionClass="why"
                              img="content1Img"
                              title="Why RealEstate Company"
                              content={[
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
                                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                              ]}


                        />


                  </div>
            )
      }
}

export default Home
