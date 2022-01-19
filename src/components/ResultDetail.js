import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SpeedIcon from '@mui/icons-material/Speed';
import CloudIcon from '@mui/icons-material/Cloud';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AirIcon from '@mui/icons-material/Air';
import './ResultDetail.css'
import ServiceLogo from "./ServiceLogo";
import {useEffect, useState} from "react";

const ResultDetail = (props) => {

    console.log("Result detail " + props.forecast.weatherSource)
    console.log("Temp " + props.forecast.airTemperature)
    const [logo, setLogo] = useState();
    // setLogo(ServiceLogo(props.forecast.weatherSource));


    return (

        <tr>
            <td>{logo}</td>
            <td><DeviceThermostatIcon/> {props.forecast.airTemperature}°C</td>
            <td><SpeedIcon/> {props.forecast.airPressure}hPa</td>
            <td><CloudIcon/> {props.forecast.cloudiness}%</td>
            <td><InvertColorsIcon/> {props.forecast.humidity}%</td>
            <td><AirIcon/> {props.forecast.windDirection}° {props.forecast.windSpeed}km/h</td>
        </tr>
    )
}

export default ResultDetail;