import React, {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup, useMap} from 'react-leaflet';
import './Map.css';


function SetView(props) {
    const coords =props.coords;
    const zoom = props.newZoom;
    const map = useMap();
    map.flyTo(coords, zoom )
    return null;
}


export default function MyMap(props) {
    let [currentId, setCurrentId] = useState(40);
    let [longitude, setLongitude] = useState(0);
    let [latitude, setLatitude] = useState(25);
    let [zoom, setZoom] = useState(1.0);
    if (props.location.id != null && props.location.id != currentId) {
        setCurrentId(props.location.id);
        setLongitude(props.location.longitude);
        setLatitude(props.location.latitude);
        setZoom(12.0);
    }

    return (
        <MapContainer center={[latitude, longitude]} zoom={[zoom]} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <SetView
                coords={[latitude, longitude]} newZoom={zoom}
            />
        </MapContainer>
    );
}
