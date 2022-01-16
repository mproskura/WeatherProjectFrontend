import React, {useEffect, useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Map from "./Map";
import Results from "./Results";

const App = () => {

    const [myOptions, setMyOptions] = useState([])
    const [selectedLocation2, setSelectedLocation2] = useState({})
    const [locations] = useState([])
    const [selectedLocation, setSelectedLocation] = useState({});

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
                selectedLocation.id = item.id;
                selectedLocation.longitude = item.longitude;
                selectedLocation.latitude = item.latitude;
                selectedLocation.displayString = item.displayString;
                console.log(item.id);
                console.log(item.displayString);
            }
        })
    }

    const handleLocationChoice = (e) => {
        findDetails(document.getElementById('search-box').value);
        if (e.key === 'Enter') {
            setSelectedLocation2(selectedLocation);
        }
    }

    useEffect(() => {
        console.log(selectedLocation)
    }, [selectedLocation])

    return (
        <div style={{margin: '20%', marginTop: '60px'}}>
            <h3>Test</h3>
            <Autocomplete
                style={{width: 500}}
                id='search-box'
                autoComplete
                autoHighlight
                options={myOptions}
                renderInput={(params) => (

                    <TextField {...params}
                               onChange={getDataFromAPI}
                               onKeyPress={handleLocationChoice}
                               variant="outlined"
                               label="Search Box"
                    />
                )}
            />
            Location id w search boxie {selectedLocation.id}
            <Results location={selectedLocation}/>
        </div>
    );
}

export default App