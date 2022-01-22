import {useEffect, useState} from "react";
import './ServiceLogo.css'

const ServiceLogo = (props) => {
    const [serviceLogo, setServiceLogo] = useState();

    useEffect(()=>{
        if (props.weatherSource) {
            const url = "http://localhost:8080/logo/" + props.weatherSource;
            fetch(url)
                .then(response => response.blob())
                .then(image => {
                    setServiceLogo(URL.createObjectURL(image));
                });
        }
    }, [props.weatherSource])

    return <div>
        <img src={serviceLogo} className="logo" alt="No image fetched"/>
    </div>
}

export default ServiceLogo;


