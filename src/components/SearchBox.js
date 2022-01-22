import React, {useEffect, useState} from 'react'
import DatePicker from "react-date-picker";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Results from "./Results";
import './SearchBox.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import MyMap from "./Map";

const App = () => {
    const [myOptions, setMyOptions] = useState([])
    const [selectedLocation2, setSelectedLocation2] = useState({})
    const [locations] = useState([])
    const [selectedLocation, setSelectedLocation] = useState({});
    const today = new Date();
    const [startDate, setStartDate] = useState(today);
    const defaultEndDate = new Date();
    defaultEndDate.setDate(defaultEndDate.getDate() + 2);
    const [endDate, setEndDate] = useState(defaultEndDate);
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 9);

    const getDataFromAPI = () => {
        let searchString = document.getElementById('search-box').value
        if (searchString.length > 2) {
            setMyOptions([])
            fetch('http://localhost:8080/location/' + searchString).then((response) => {
                return response.json()
            }).then((responseJson) => {
                responseJson.forEach((item) => {
                    let location = new Object();
                    Object.entries(item).forEach(([key, value]) => {
                        if (key === 'name' || key === 'administrative_area' || key === 'country') {
                            if (value != null) {
                                if (location.displayString == null) {
                                    location.displayString = value;
                                } else {
                                    location.displayString += " " + value;
                                }
                            }
                        }
                        if (key === 'id') {
                            location.id = value;
                        }
                        if (key === 'longitude') {
                            location.longitude = value;
                        }
                        if (key === 'latitude') {
                            location.latitude = value;
                        }
                    });
                    myOptions.push(location.displayString)
                    locations.push(location);
                })
                setMyOptions(myOptions)
            })
        } else {
            setMyOptions([]);
        }
    }

    const findDetails = (locationString) => {
        locations.forEach((item) => {
            if (item.displayString == locationString) {
                setSelectedLocation(
                    {
                        "id": item.id,
                        "longitude": item.longitude,
                        "latitude": item.latitude,
                        "displayString": item.displayString,
                    }
                )
                console.log(item.id);
                console.log(item.displayString);
            }
        })
    }

    const handleLocationChoice = (e) => {
        if (e.key === 'Enter') {
            findDetails(document.getElementById('search-box').value);

            console.log('Setting selected location')
        }
    }

    useEffect(() => {
        console.log('Setting selected location2:')
        setSelectedLocation2(selectedLocation);
    }, [selectedLocation])

    return (
        <div>
            <MyMap location={selectedLocation2}/>
            <h1 className={'header'}><WbSunnyIcon/> Weather comparator <NightsStayIcon/></h1>
            <div className={'search-components'}>
                <div className={'search-box-style'}>
                    <Autocomplete
                        id='search-box'
                        autoComplete
                        autoHighlight
                        options={myOptions}
                        renderInput={(params) => (
                            <TextField  {...params}
                                        onChange={getDataFromAPI}
                                        onKeyPress={handleLocationChoice}
                                        variant="outlined"
                                        label="Search weather"
                            />
                        )}
                    />
                </div>
                <div className={'date-pickers'}>
                  Start date:  <DatePicker value={startDate} minDate={today} maxDate={maxDate} required={true}
                                onChange={(date) => setStartDate(date)}/>
                  End date:  <DatePicker value={endDate} minDate={startDate} maxDate={maxDate} required={true}
                                onChange={(date) => setEndDate(date)}/>
                </div>
            </div>
            <Results location={selectedLocation2} startDate={startDate} endDate={endDate}/>
        </div>
    );
}

export default App