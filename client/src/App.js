import React, { Component } from "react";
import "./Pages/Global/scss/root.scss"
import SiteRouter from "./Pages/Routes/siteRouter";

//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Provider store={store}> */}
        <SiteRouter />
        {/* </Provider> */}
      </div>
    );
  }
}

export default App;
