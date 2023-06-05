import * as React from 'react';
import styles from '@/styles/Body.module.css'
import { Box } from '@mui/material';


const Card=()=>{

    return(
        <>
         {/* <Box 
            sx={{borderRadius: "2px 5px 2px 5px", border:"2px ridge #e7e248", filter: "blur(50px)", width: "100%", height:"100vh"}}
            component="img" alt="logo"
        src="./assets/images/logo.PNG" /> */}
<div className={styles.card}>
  {/* <div className={styles.tools}>
    <div className={styles.circle}>
      <span className={`${styles.red} ${styles.box}`}></span>
    </div>
    <div className={styles.circle}>
      <span className={`${styles.yellow} ${styles.box}`}></span>
    </div>
    <div className={styles.circle}>
      <span className={`${styles.green} ${styles.box}`}></span>
    </div>
  </div> */}
  <div>
  
  <img src="./assets/images/logo.PNG" style={{  objectFit: "fill", height:"120px", width: "100%"}}/>
  
  <div className={styles.details}>
  <h2 className={styles.course_name}> Course: Next.js </h2>
  <h4 className={styles.price}> ট ৬০০  </h4>
  </div>
  
  </div>
</div>
          </> 
           
    )
}

export default Card;