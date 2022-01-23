import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SpeedIcon from '@mui/icons-material/Speed';
import CloudIcon from '@mui/icons-material/Cloud';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AirIcon from '@mui/icons-material/Air';
import './ResultDetail.css'
import ServiceLogo from "./ServiceLogo";

const ResultDetail = (props) => {

    return (
        <tr>
            <td title="Weather service"><ServiceLogo weatherSource={props.forecast.weatherSource}/></td>
            <td title="Air temperature"><DeviceThermostatIcon/> {props.forecast.airTemperature}°C</td>
            <td title="Air pressure"><SpeedIcon/> {props.forecast.airPressure}hPa</td>
            <td title="Cloudiness"><CloudIcon/> {props.forecast.cloudiness}%</td>
            <td title="Humidity"><InvertColorsIcon/> {props.forecast.humidity}%</td>
            <td title="Wind"><AirIcon/> {props.forecast.windDirection}° {props.forecast.windSpeed}km/h</td>
        </tr>
    )
}

export default ResultDetail;