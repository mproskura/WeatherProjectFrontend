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
    }, [props.id])


    // forecastDetails.map(forecastDetails => {
    //         return (
    //             <div>
    //                 {forecastDetails.map(forecastDetail => (
    //                     //  console.log("Test z petli " + forecastDetail.weatherSource)
    //                     <ResultDetail forecast={forecastDetail}/>
    //                 ))}
    //             </div>
    //         )
    //     }
    // )

    return (
        // forecastDetails.map(forecastDetail =>
        //     <div key={forecastDetail.id}><ResultDetail forecast={forecastDetail}/></div>
        // )


        forecastDetails.map(forecastDetail =>
            <ResultDetail forecast={forecastDetail}/>
        )
    
    )
}


export default ResultByDate;