import * as React from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import ReactDOM, {render} from "react-dom";
import './Map.css'

const App = () => {

    const position = [51.505, -0.09]


    return (
        ReactDOM.render(
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            , document.getElementById('root'))
    )

    // return (
    //     <div>
    //             <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    //                 <TileLayer
    //                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //                 />
    //                 <Marker position={position}>
    //                     <Popup>
    //                         A pretty CSS3 popup. <br/> Easily customizable.
    //                     </Popup>
    //                 </Marker>
    //             </MapContainer>
    //
    //     </div>
    // )
}

export default App;