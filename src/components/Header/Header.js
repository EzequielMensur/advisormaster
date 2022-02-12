import React from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar,Typography,InputBase,Box  } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';


const Header =() =>{
    const classes = useStyles();
    return(
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                        Travel Advisor
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header

//*Estaba mirando las propiedades CSS predeterminadas producidas por cada componente. El propósito principal de la barra de herramientas es mostrar sus elementos secundarios con una pantalla en línea (los elementos se colocan uno al lado del otro), algo que Appbar no hace. El componente AppBar usa display: flex y flex-direction: column , lo que significa que los descendientes directos se apilan uno encima del otro. Por otro lado, la barra de herramientas también usa display: flex , pero no establece flex-direction , lo que significa que usa su valor predeterminado: row . Dicho esto, el componente Button usa display: inline-block. Esa es la razón por la que los elementos se colocan uno al lado del otro dentro de los componentes de la barra de herramientas .*//