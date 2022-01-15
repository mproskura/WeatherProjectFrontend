import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const App = () => {

    const [myOptions, setMyOptions] = useState([])
    const [locations, setLocations] = useState([])
    const addLocation = (id, displayString, longitude, latitude) => {
        const location = {
            'id': id,
            'displayString': displayString,
            'longitude': longitude,
            'latitude': latitude
        }
        let locationsCopy = [...locations];
        locationsCopy.push(location);
        setLocations(locationsCopy);
        console.log("Pushed location" + id + " " + displayString);
        console.log("Locations size after push " + locations.length);
    }

    const getDataFromAPI = () => {
        let searchString = document.getElementById('search-box').value
        if (searchString.length > 2) {
            setMyOptions([])
            fetch('http://localhost:8080/location/' + searchString).then((response) => {
                return response.json()
            }).then((responseJson) => {
                responseJson.forEach((item) => {
                    let displayString = '';
                    let id = null;
                    let longitude = null;
                    let latitude = null;
                    let location = new Object();
                    Object.entries(item).forEach(([key, value]) => {
                        // console.log(`${key}: ${value}`);
                        if (key === 'name' || key === 'administrative_area' || key === 'country') {
                            if (value != null) {
                                if (displayString == null) {
                                    displayString = value;
                                    location.displayString = displayString;
                                } else {
                                    displayString = displayString + " " + value;
                                    location.displayString = displayString;
                                }
                            }
                        }
                        if (key === 'id') {
                            id = value;
                            location.id = value;
                        }
                        if (key === 'longitude') {
                            longitude = value;
                            location.longitude = value;
                        }
                        if (key === 'latitude') {
                            latitude = value;
                            location.latitude = value;
                        }
                    });
                    myOptions.push(displayString)
                    locations.push(location);
                    console.log("Pushing " + location.displayString);
                    console.log("Size after push " + locations.length);
                    // addLocation(id, displayString, longitude, latitude);
                })
                setMyOptions(myOptions)
            })
        } else {
            setMyOptions([]);
        }
    }

    const findDetails = (locationString) => {
        console.log("Location string " + locationString);
        console.log("Locations size: " + locations.length);
        locations.forEach((item) => {
            console.log("Comparing " + item.displayString + " " + item.id);
            if (item.displayString == locationString) {
                console.log(item.id);
                console.log(item.displayString);
            }
        })
    }

    const handleLocationChoice = () => {
        findDetails(document.getElementById('search-box').value);
    }

    return (
        <div style={{marginLeft: '40%', marginTop: '60px'}}>
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
                        //     onClick={handleLocationChoice}
                        //      onSelect={handleLocationChoice}
                               onKeyPress={handleLocationChoice}
                               variant="outlined"
                               label="Search Box"
                    />
                )}
            />
        </div>
    );
}

export default App