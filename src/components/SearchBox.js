import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const App = () => {

    const [myOptions, setMyOptions] = useState([])
    const [searchInput, setSearchInput] = useState('')

    const getDataFromAPI = () => {
        let searchString = document.getElementById('search-box').value
        if (searchString.length > 2) {
            setMyOptions([])
            console.log("Searching " + searchString)
            fetch('http://localhost:8080/location/' + searchString).then((response) => {
                return response.json()
            }).then((responseJson) => {
                console.log("Response " + responseJson)
                responseJson.forEach((item) => {
                    let displayString = '';
                    Object.entries(item).forEach(([key, value]) => {
                        // console.log(`${key}: ${value}`);
                        if (key == 'name' || key == 'administrative_area' || key == 'country') {
                            if (value != null) {
                                displayString = displayString + " " + value;
                            }
                        }
                    });
                    myOptions.push(displayString)
                    console.log(displayString)
                })
                setMyOptions(myOptions)
            })
        } else {
            setMyOptions([]);
        }
    }

    const handleLocationChoice = () => {
        console.log("Choice made " + document.getElementById('search-box').value)
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
                               // onClick={handleLocationChoice}
                               onSelect={handleLocationChoice}
                               variant="outlined"
                               label="Search Box"
                    />
                )}
            />
        </div>
    );
}

export default App