import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({updateinfo}){

    let [city,setCity]=useState("");

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="ddc065e9d1fe3547c464e62c82a08c49";
    let weatherInfo=async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            weather:jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
    }
    

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async (event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo=await weatherInfo();
        updateinfo(newinfo);
    }   

    
    return (
        <div className='searchBox'>
            
            <form onSubmit={handleSubmit}>
                <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br /><br />
                      <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    )
}