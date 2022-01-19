import React, {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import './Map.css';


function SetView({coords}, zoom) {
    //console.log(coords.getCenter());
    const map = useMap();
    map.setView(coords, 12);
    return null;
}


export default function MyMap(props) {
    let [currentId, setCurrentId] = useState(40);
    let [longitude, setLongitude] = useState(40);
    let [latitude, setLatitude] = useState(0);
    let [zoom, setZoom] = useState(1);
    if (props.location.id != null && props.location.id !=currentId) {
        setCurrentId(props.location.id);
        setLongitude(props.location.longitude);
        setLatitude(props.location.latitude);
        setZoom(12);
    }
    console.log("Longitude is set to " + longitude);
    console.log("Latitude is set to " + latitude);

    return (
        <MapContainer center={[latitude, longitude]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <SetView
                coords={[latitude, longitude]}
            />
        </MapContainer>
    );
}
