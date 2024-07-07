import React from 'react'

export default function Content() {
    // let a= new Date();
    // document.getElementById('demo').innerHTML=a
    let show=()=>{
        // let a= new Date();
        document.getElementById('demo').innerHTML=new Date()
    }
  return (
    <>
    <h3>This is use to show the time of Bharat</h3><br />
    <button onClick={show}>Click Here</button>
    <h4 id='demo'></h4><br />
    </>
  )
}
