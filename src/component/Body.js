// import * as React from 'react';
// import Box from '@mui/material/Box';
 import Card from './Card'
// import { Grid, } from '@mui/material';

// const Body=()=>{

//     return(
//        <>
//        <Box>
//        <Grid container spacing={4}>

//        <Grid>
//        <Card/>
//        </Grid>

//        <Grid>
//        <Card/>
//        </Grid>

//        <Grid>
//        <Card/>
//        </Grid>

//        <Grid>
//        <Card/>
//        </Grid>
//       </Grid>
//       </Box>
//        </>
           
//     )
// }

// export default Body;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Body() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={3}>
          <Card/>
        </Grid>
        <Grid item xs={3}>
        <Card/>
        </Grid>
        <Grid item xs={3}>
        <Card/>
        </Grid>
        <Grid item xs={3}>
        <Card/>
        </Grid>
        <Grid item xs={3}>
        <Card/>
        </Grid>
        <Grid item xs={3}>
        <Card/>
        </Grid>
        <Grid item xs={3}>
        <Card/>
        </Grid>
        <Grid item xs={3}>
        <Card/>
        </Grid>
      </Grid>
    </Box>
  );
}