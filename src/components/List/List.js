import React,{useState,useEffect,createRef} from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from "@material-ui/core";

import PlaceDetails from '../PlaceDetails/PlaceDetails'

import useStyles from './styles'

const List =({places}) =>{

    const classes = useStyles();
    const [type,setType]=useState('restaurants');
    const [rating,setRating]=useState('restaurants');



    return(
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels and attractions around you</Typography>
            <Grid container spacing={3} className={classes.list}>
                {places?.map((place,i)=>(
                    <Grid  item key={i} xs={12}>
                        <PlaceDetails 
                            place={place}
            
                        
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List