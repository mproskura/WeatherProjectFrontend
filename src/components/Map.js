import React, {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import './Map.css';


function SetView({coords}) {
    //console.log(coords.getCenter());
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
}


export default function MyMap(props) {
    let [currentId, setCurrentId] = useState(40);
    let [longitude, setLongitude] = useState(40);
    let [latitude, setLatitude] = useState(0);
    if (props.location.id != null && props.location.id !=currentId) {
        setCurrentId(props.location.id);
        setLongitude(props.location.longitude);
        setLatitude(props.location.latitude);
    }
    console.log("Longitude is set to " + longitude);
    console.log("Latitude is set to " + latitude);

    return (
        <MapContainer center={[longitude, latitude]} zoom={1} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <SetView
                coords={[longitude, latitude]}
            />
        </MapContainer>
    );
}
