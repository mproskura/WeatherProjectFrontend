const ResultByDate = (props) => {

    if (props.id != null) {
        fetch('http://localhost:8080/weather/' + props.id + '/' + props.date).then((response) => {
            return response.json()
        }).then((responseJson) => {
            console.log(responseJson);
        })

    }

    return (
        <div>
            Otrzymano id {props.id} i date {props.date}
        </div>
    )
}

export default ResultByDate;