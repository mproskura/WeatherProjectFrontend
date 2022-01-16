import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SpeedIcon from '@mui/icons-material/Speed';
import CloudIcon from '@mui/icons-material/Cloud';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import AirIcon from '@mui/icons-material/Air';
import './ResultDetail.css'

const ResultDetail = (props) => {

    console.log("Result detail " + props.forecast.weatherSource)
    console.log("Temp " + props.forecast.airTemperature)

    return (
        <table>
            <tbody>
            <row className={'column-style'}>
                <td>{props.forecast.weatherSource}</td>
                <td><DeviceThermostatIcon/> {props.forecast.airTemperature}°C</td>
                <td><SpeedIcon/> {props.forecast.airPressure}hPa</td>
                <td><CloudIcon/> {props.forecast.cloudiness}%</td>
                <td><InvertColorsIcon/> {props.forecast.humidity}%</td>
                <td><AirIcon/> {props.forecast.windDirection}° {props.forecast.windSpeed}km/h</td>
            </row>
            </tbody>
        </table>
    )
}

export default ResultDetail;