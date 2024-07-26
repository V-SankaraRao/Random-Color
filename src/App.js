
import './App.css';
import {useState} from 'react';
function App() {
  const[rcol,setrcol]=useState("rgb(255,12,11)");
  const[hcol,sethcol]=useState("#2A98B1");
  const[isrgb,setisrgb]=useState(true);

  function generation(){
    //console.log("working")
     if(isrgb){
        // let color="";
        let r=Math.round(Math.random()*250);
        let g=Math.round(Math.random()*250);
        let b=Math.round(Math.random()*250);
       setrcol("rgb("+r+","+g+","+b+")");
        //console.log(col);
        
     }
     else{
       let arr=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
       let color="";
       for(let i=0;i<6;i++){
       color+=arr[Math.round(Math.random()*15)];
       }
       sethcol("#"+color);
       console.log(color);
     }
  }
  return (
    <div style={isrgb?{background:rcol}:{background:hcol}}className="App">
      <div>
      <button onClick={()=>{setisrgb(false);}}>Hex Code</button>
      <button onClick={()=>{setisrgb(true);}}>RGB code</button>
      <button onClick={generation}>Generate</button></div>
      <h1>{isrgb?"RGB Color":"HEX Code"} Code</h1>
      <h1>Generated Code is {isrgb?rcol:hcol}</h1>
    </div>
  );
}

export default App;
