import {useEffect, useState} from "react";
import classes from './ServiceLogo.module.css'
import instance from "../axios/axios";

const ServiceLogo = (props) => {
    const [serviceLogo, setServiceLogo] = useState();

    useEffect(() => {
        if (props.weatherSource) {
            instance.get("/logo/" + props.weatherSource,  {responseType: 'blob'})
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    setServiceLogo(url);
                })
        }
    }, [props.weatherSource])

    return <div className={classes.logoContainer}>
        <img src={serviceLogo} className={classes.logo} alt="No image fetched"/>
    </div>
}

export default ServiceLogo;


