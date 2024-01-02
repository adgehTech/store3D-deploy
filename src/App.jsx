import React, { Component } from "react";
import Pants from "./models/pants/Pant";
import Shoe from "./models/shoe/Shoe";
import Shorts from "./models/shorts/Shorts";
import Tshert from "./models/tshert/Tshert";

export class App extends Component {
  render() {
    return (
      <> 
      <div className="appCanva">
        <Tshert/> 
      </div>
      <div className="appCanva">
        <Pants/> 
      </div>
      <div className="appCanva"> 
        <Shoe/> 
      </div>
      <div className="appCanva">
        <Shorts/> 
      </div> 
      </>
    );
  }
}

export default App;
