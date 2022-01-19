import {useState} from "react";

const ServiceLogo = (serviceId) => {
    const url = "http://localhost:8080/logo/" + serviceId;
    const [imageData, setImageData] = useState('');
    fetch(url)
        .then(response => response.blob())
        .then(image => {
            // Create a local URL of that image
            const localUrl = URL.createObjectURL(image);
            setImageData(localUrl);
        });

    return <div>
        <img src={imageData} className="Logo" alt="No image fetched"/>
    </div>
}

export default ServiceLogo;