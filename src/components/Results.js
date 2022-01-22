import {useEffect, useState} from "react";
import ResultByDate from "./ResultByDate";
import './Results.css'

const Results = (props) => {

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let loopDate = new Date(props.startDate);
    let loopEndDate = new Date(props.endDate);
    loopEndDate.setDate(loopEndDate.getDate() + 1);
    const [dates, setDates] = useState([]);
    const [resultList, setResultList] = useState([]);

    useEffect(() => {
        setDates([]);
        setResultList([]);
        let newResults = [];
        while (loopDate < loopEndDate) {
            console.log("Data z petli: " + dateFormatter(loopDate));
            let formattedDate = dateFormatter(loopDate);
            console.log("Formatted date  " + formattedDate);
            dates.push(formattedDate);
            let weekdayName = weekday[loopDate.getDay()];
            console.log("Weekday name " + weekdayName);
            let resultByDate = <ResultByDate id={props.location.id} date={formattedDate} day={weekdayName}/>;
            newResults.push(resultByDate);
            let newDate = loopDate.setDate(loopDate.getDate() + 1);
            loopDate = new Date(newDate);
        }
        setResultList(newResults);

        console.log("Dlugosc listy " + resultList.length);
    }, [props])

    function dateFormatter(date) {
        let returnDate = date.getFullYear() + '-' + dateSegmentFormatter(date.getMonth() + 1) + '-' + dateSegmentFormatter(date.getDate());
        return returnDate;
    }

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
                {resultList}
                </tbody>
            </table>
        </div>
    )

}

export default Results;