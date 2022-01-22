import {useEffect, useState} from "react";


const ServiceLogo = (props) => {
    console.log("Service id for logo: " + props.weatherSource);
    const [serviceLogo, setServiceLogo] = useState();

    useEffect(()=>{
        console.log("Logo source: " + props.weatherSource)
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
        <img src={serviceLogo} className="Logo" alt="No image fetched"/>
    </div>
}

export default ServiceLogo;


