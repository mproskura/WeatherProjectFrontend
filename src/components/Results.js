import {useState} from "react";
import ResultByDate from "./ResultByDate";
import './Results.css'

const Results = (props) => {

    const date = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dateToday = date.getFullYear() + '-' + dateSegmentFormatter(date.getMonth() + 1) + '-' + dateSegmentFormatter(date.getDate());
    const dayToday = weekday[date.getDay()];
    date.setDate(date.getDate() + 1)
    const dateTomorrow = date.getFullYear() + '-' + dateSegmentFormatter(date.getMonth() + 1) + '-' + dateSegmentFormatter(date.getDate());
    const dayTomorrow= weekday[date.getDay()];
    date.setDate(date.getDate() + 1)
    const dateDayAfterTomorrow = date.getFullYear() + '-' + dateSegmentFormatter(date.getMonth() + 1) + '-' + dateSegmentFormatter(date.getDate());
    const dayDayAfterTomorrow= weekday[date.getDay()];
    console.log("Data pojutrze " + dateDayAfterTomorrow);
    console.log("Id w Results: " + props.location.id)
    console.log(props)

    function dateSegmentFormatter(dateSegment) {
        if (dateSegment < 10) {
            return '0' + dateSegment;
        } else {
            return dateSegment;
        }
    }


    return (
        <div>
            <table className={'table-style'}>
                <tbody>
                <ResultByDate id={props.location.id} date={dateToday} day={dayToday}/>
                <ResultByDate id={props.location.id} date={dateTomorrow} day={dayTomorrow}/>
                <ResultByDate id={props.location.id} date={dateDayAfterTomorrow} day={dayDayAfterTomorrow}/>
                </tbody>
            </table>
        </div>
    )

}

export default Results
;