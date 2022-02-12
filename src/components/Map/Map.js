import React from "react";
import GoogleMapReact from "google-map-react";
import {Paper, Typography,useMediaQuery} from '@material-ui/core';
import LocationOnOutLinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'

import useStyles    from './styles'

 
const Map =({setCoords,setBounds,coords,places,setChildClicked}) =>{
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');
    

    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
             bootstrapURLKeys={{ key: 'AIzaSyBleVyzmu76yV_blsbiS9S9UaJ3xJhFK-Y'}}
             defaultCenter={coords}
             center={coords}
             defaultZoom={14}
             margin={[50, 50, 50, 50]}
             options={''}
             onChange={(e)=>{
                setCoords({lat: e.center.lat,lng: e.center.lng});
                setBounds({ne:e.marginBounds.ne, sw: e.marginBounds.sw});
             }}
             onChildClick={(child)=>setChildClicked(child)}
            >
                {places?.map((place,i)=>(
                    <div
                    
                    className={classes.markerContainer}
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={i}
                    >
                        {
                            !isDesktop?(
                                <LocationOnOutLinedIcon color='primary' fontSize='large'/>
                            ) : (
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img
                                        className={classes.pointer}
                                        src={place.photo ? place.photo.images.large.url : 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Restaurant_in_The_Mus%C3%A9e_d%27Orsay.jpg'}
                                        alt={place.name}
                                    />
                                    <Rating size='small' value={Number(place.rating)} readOnly />
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map