import React, {useState,useEffect} from "react";
import {Grid} from '@material-ui/core';

import { getPlacesData} from "./api";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

//*import PlaceDetails from "./components/PlaceDetails/PlaceDetails";*//

//*container spacing To control space between children, use the spacing prop. The spacing value can be any positive number, including decimals and any string. *//

//To put it simply, both useState and useEffect enhance functional components to make them do things that classes can but functional components (without hooks) cannot: useState allows functional components to have state, like this.state in class components. useEffect allows functional components to have lifecycle methods (such as componentDidMount, componentDidUpdate and componentWillUnmount) in one single API

const App = () =>{
    const [bounds,setBounds]=useState({});
    const [coords,setCoords]=useState({});
    const[places,setPlaces]=useState([]);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            setCoords({lat: latitude , lng: longitude});
        })
    },[]);

    useEffect(()=>{

        getPlacesData(bounds.sw, bounds.ne).then((data) =>{
                setPlaces(data);
            })
    },[coords,bounds]); 
    return (
        <>
            <Header />
            <Grid container spacing={3} style={{width:'100'}}>
                <Grid item xs={6} md={4}>
                    <List places={places}
                         
                    /> 
                </Grid>
                <Grid item xs={6} md={8}>
                    <Map
                        setCoords={setCoords}
                        setBounds={setBounds}
                        coords={coords}
                        places={places}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;