import {useEffect, useState} from "react";
import ResultDetail from "./ResultDetail";
import './ResultByDate.css'
import instance from "../axios/axios";

const ResultByDate = (props) => {
    let [forecastDetails, setForecastDetails] = useState([]);

    useEffect(() => {
        if (props.id != null) {
            instance.get("/weather/" + props.id + "/" + props.date)
                .then((response) => {
                        let responseObject = response.data;
                        let detailsList = [];
                        responseObject.forecastDetails.forEach((detail) => {
                            let forecastDetail = {
                                "id": detail.id,
                                "airPressure": detail.airPressure,
                                "airTemperature": detail.airTemperature,
                                "cloudiness": detail.cloudiness,
                                "humidity": detail.humidity,
                                "weatherSource": detail.weatherSource.id,
                                "windDirection": detail.windDirection,
                                "windSpeed": detail.windSpeed,
                            };

                            detailsList.push(forecastDetail);
                        })
                        setForecastDetails(detailsList);
                    }
                ).catch((error) => {
                console.log("Error " + error);
            });
        }
    }, [props.id]);

    function dateRow() {
        if (props.id != null) {
            return <row className={'date-row-style'}>
                <td>{props.day} {props.date}</td>
            </row>;
        }
    }


    return (
        <>
            <div>
                {dateRow()}
            </div>
            <div>
                {
                    forecastDetails.sort((a, b) => a.id - b.id).map(forecastDetail =>
                        <ResultDetail key={forecastDetail.id} forecast={forecastDetail}/>
                    )
                }
            </div>
            <div>
                <row className={'date-row-style'}>
                    <td/>
                </row>
            </div>
        </>
    )
}


export default ResultByDate;