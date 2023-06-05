import { Box } from "@mui/material";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <div
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          
        }}
      >
        <div>
          <img
            src="./assets/images/landing.jpg"
            style={{ width: "100vw", height: "auto" }}
          />
        </div>
        <Box className="landing_page_text" sx={{ fontSize: { xs: '1.6rem',sm:'2.2rem', md: '3rem' }, position: "absolute", zIndex: 2 }}>
        
          Build Your career with Javascript
        
        </Box>
      </div>
    </>
  );
}
