import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';



export default function Loading(props) {

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 125,
      bgcolor: 'none',
      border:"none",
      
      p: 4,
      justifyContent: "center"
      };


  return (

<div style={{height:"100vh", width:"10vw", display:"flex", justifyContent:"center"}}>
<div class="loader">
    <div class="face">
        <div class="circle"></div>
    </div>
    <div class="face">
        <div class="circle"></div>
    </div>
</div>
</div>
  )
}


