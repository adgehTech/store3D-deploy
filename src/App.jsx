import React, { Component } from "react";
import Pants from "./models/pants/Pant";
import Shoe from "./models/shoe/Shoe";
import Shorts from "./models/shorts/Shorts";

export class App extends Component {
  render() {
    return (
      <> 
      <div>
        <Pants/> 
      </div>
      <div>
        <Shoe/> 
      </div>
      <div>
        <Shorts/> 
      </div> 
      </>
    );
  }
}

export default App;
