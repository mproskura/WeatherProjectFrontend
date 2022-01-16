import {useState} from "react";
import ResultByDate from "./ResultByDate";
import './Results.css'

const Results = (props) => {
    const [location, setLocation] = useState(props.location);
    const date = new Date();
    const dateToday = date.getFullYear() + '-' + dateSegmentFormatter(date.getMonth() + 1) + '-' + dateSegmentFormatter(date.getDate());
    date.setDate(date.getDate() + 1)
    const dateTomorrow = date.getFullYear() + '-' + dateSegmentFormatter(date.getMonth() + 1) + '-' + dateSegmentFormatter(date.getDate());
    date.setDate(date.getDate() + 1)
    const dateDayAfterTomorrow = date.getFullYear() + '-' + dateSegmentFormatter(date.getMonth() + 1) + '-' + dateSegmentFormatter(date.getDate());
    console.log("Data pojutrze " + dateDayAfterTomorrow);
    console.log("Id w Results: " + location.id)
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
                <ResultByDate id={location.id} date={dateToday}/>
                <ResultByDate id={location.id} date={dateTomorrow}/>
                <ResultByDate id={location.id} date={dateDayAfterTomorrow}/>
                </tbody>
            </table>
        </div>
    )

}

export default Results
;