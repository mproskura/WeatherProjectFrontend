import {useEffect, useState} from "react";
import ResultDetail from "./ResultDetail";
import {render} from "react-dom";

const ResultByDate = (props) => {
    let [forecastDetails, setForecastDetails] = useState([]);

    useEffect(() => {
        if (props.id != null) {
            console.log("pid: " + props.id)
            fetch('http://localhost:8080/weather/' + props.id + '/' + props.date)
                .then((responseJson) => {
                    return responseJson.json();
                }).then((responseJson) => {
                    console.log(responseJson)
                    console.log(responseJson.queryDate)
                    let detailsList = [];
                    responseJson.forecastDetails.forEach((detail) => {
                        let forecastDetail = {
                            "id": detail.id,
                            "airPressure": detail.airPressure,
                            "airTemperature": detail.airTemperature,
                            "cloudiness": detail.cloudiness,
                            "humidity": detail.humidity,
                            "weatherSource": detail.weatherSource.sourceName,
                            "windDirection": detail.windDirection,
                            "windSpeed": detail.windSpeed,
                        };

                        detailsList.push(forecastDetail);
                    })
                    setForecastDetails(detailsList);
                }
            )
        }
    }, [props.id]);


    return (
        <>
            <tr>
                <td>
                    {props.date}
                </td>
            </tr>
            {
                forecastDetails.map(forecastDetail =>
                    <tr>
                        <td>
                            <ResultDetail key={forecastDetail.id} forecast={forecastDetail}/>
                        </td>
                    </tr>
                )
            }
        </>
    )
}


export default ResultByDate;