export const SET_CITY_DATA = (state, Data) => {
    state.AllCities = Data;
}

export const SAVE_SELECTED_CITY_DATA = (state, Data) => {
    state.CurrentCity = Data.City,
    state.CurrentState = Data.State,
    state.CurrentDistrict = Data.District
}

export const SET_WEATHER_DATA = (state, Payload) => {
    var Data = Payload.WeatherData;
    var Errors = Payload.ErrorReport;

    state.CityNotFoundError = Errors.CityError;
    state.DistrictNotFoundError = Errors.DistrictError;
    state.QueryData = Data;
    state.PlaceName = Data.name;
    state.Temperature = Data.main.temp;
    state.MinimumTemperature = Data.main.temp_min;
    state.MaximumTemperature = Data.main.temp_max;
    state.Pressure = Data.main.pressure;
    state.HumidityLevel = Data.main.humidity;
    state.Latitude = Data.coord.lat;
    state.Longitude = Data.coord.lon; 
    state.MainWeather = Data.weather[0].main;
    state.WeatherDescription = Data.weather[0].description; 

    // Wind
    if(Data.wind != null) {
        if("speed" in Data.wind) {
            state.WindSpeed = Data.wind.speed;
        }

        if('deg' in Data.wind) {
            state.WindDirection = Data.wind.deg;
        }

        if('gust' in Data.wind) {
            state.WindGust = Data.wind.gust;
        }
    } else {
        state.WindStatus = false;
    }

    if(Data.clouds != null) {
        if('all' in Data.clouds) {
            state.CloudsPercentage = Data.clouds.all;
        }
    } else {
        Data.CloudsStatus = false;
    }
}