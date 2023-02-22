import { useState } from "react";
import image from "./image1/image.jpg";
import images from "./image1/images.jpg"
import './image1/bulb.css'

const BULB = ()=>{
 const [tube, setTube] = useState(true);

const ON = ()=> {
  setTube (false);
}
const OFF = ()=> {
  setTube (true);
}
  
return(
  <div className="Main1">
    <h1>Bulb Project</h1>
   { tube ? (
   <>
    <img src={image} id="pic"></img><button onClick = {ON} id="but1">
    ON
    </button>
   </>)
   :(
   <>
   <img src={images} id="hash"></img><button onClick = {OFF} id="but2">
    OFF Please save electricity
    </button>
   </>
)
   }

  </div>
)
}
export default BULB;

