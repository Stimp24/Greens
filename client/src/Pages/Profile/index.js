import React from "react"
import "./scss/profile.scss"
import Tab from "../Global/components/reusuable/Tab/tab"
import ProfileInfo from "../Profile/components/profileInfo"
import Subscription from "./components/subscription"
import MyOffers from "./components/myOffers"
import Favorite from "./components/favorite"
function Profile() {
    
    return (
        <section className="-pp_profile">
            <div className="container">
                <div className="row -re_pt-30">
                    <div className="col-12 profileBackground">
     <div className="avatar mx-auto white">
          <img
            src="https://mdbootstrap.com/img/Others/documentation/img%20(20)-mini.jpg"
            alt="avatar mx-auto white"
            className="rounded-circle img-fluid"
          />
        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
 <Tab>
                        <div label="Profile Info">
<ProfileInfo/>
                        </div>
                        <div label="Subscription">
<Subscription/>
                        </div>
                          <div label="Past Offers">
<MyOffers/>
                        </div>
                          <div label="My Favorite">
<Favorite/>
                        </div>
                    </Tab>
                    </div>
                   
                </div>

            </div>
        </section>


    )
}

export default Profile;