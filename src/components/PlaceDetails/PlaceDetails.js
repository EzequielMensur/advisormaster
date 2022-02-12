import React from "react";
import {Box,Typography, Button,Card,CardMedia,CardActions,Chip, CardContent} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyle from './styles'


const PlaceDetails =({place}) =>{
    const classes = useStyle();

    return(
        <Card elevation={6}>
            <CardMedia
                style={{height:350}}
                image={place.photo ? place.photo.images.large.url : 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Restaurant_in_The_Mus%C3%A9e_d%27Orsay.jpg'}
                tittle={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant="subtitle1">Price</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                </Box>
                <Box display='flex' justifyContent='space-between'>
                    <Typography variant="subtitle1">Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                </Box>
                <Box>
                    {place?.awards?.map((award) => (
                          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
                             <img src={award.images.small} />
                            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                            </Box>
                     ))}
                </Box>
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography variant="body2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Trip Advisor
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>
        </Card>
    );
}

export default PlaceDetails 