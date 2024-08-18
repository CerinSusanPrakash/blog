//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )
import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState } from 'react';
import { Grid } from '@mui/material';
import {Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [data,setdata]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3001/get').then((res)=>{
            setdata(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[])
    function del(e){
        axios.delete('http://localhost:3001/delete/'+e).then((res)=>{
            alert('Blog Deleted')
            window.location.reload();
        }).catch((error)=>{
            console.log(error)
        })
    }
    function up(val){
        navigate('/add',{state:{val}})
    }
  return (
    <>

    <Box sx={{margin:'5%' }}>
        <Grid container spacing={3}>
    {data.map((item)=>(
        <Grid item xs={12} sm={6} md={4}>
    
    <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} style={{marginTop:'5%'}}>
    <CardMedia
      sx={{ height: 140 }}
      image={item.img_url}
      title="green iguana"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        {item.content}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
      
    </CardContent>
    <CardActions>
      <Button variant='contained' size="small" color="secondary" onClick={()=>{del(item._id)}}>Delete</Button>
      <Button variant='contained' size="small" color="secondary" onClick={()=>{up(item)}}>update</Button>
    </CardActions>
  </Card>
   </Grid>
      
    ))}
    </Grid>
    </Box>
  </>
  )
}

export default Home

//Write your code here