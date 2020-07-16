export const GetAllCities = (state) => {
    return state.AllCities;
}

export const GetCurrentDistrict = (state) => {
    return state.CurrentDistrict;
}

export const GetCurrentState = (state) => {
    return state.CurrentState;
}

export const GetCurrentCity = (state) => {
    return state.CurrentCity;
}

export const GetQueryData = (state) => {
    return state.QueryData;
}

export const GetPlaceName = (state) => {
    return state.PlaceName;
}

export const GetTemperatureData = (state) => {
    var TemperatureData = {
        'Temperature': state.Temperature, 
        'MinimumTemperature': state.MinimumTemperature, 
        'MaximumTemperature': state.MaximumTemperature
    }

    return TemperatureData;
}

export const GetPressureData = (state) => {
    return state.Pressure;
}

export const GetHumidityData = (state) => {
    return state.HumidityLevel;
}

export const GetGeoLocationData = (state) => {
    var GeoLocationData = {
        'Latitude': state.Latitude, 
        'Longitude': state.Longitude
    }

    return GeoLocationData;
}

export const GetWeatherData = (state) => {
    var WeatherData = { 
        'MainWeather': state.MainWeather, 
        'WeatherDescription': state.WeatherDescription
    }

    return WeatherData; 
}

export const GetWindData = (state) => {
    var WindData = {
        'WindSpeed': state.WindSpeed,
        'WindDirection': state.WindDirection,
        'WindGust': state.WindGust,
        'WindStatus': state.WindStatus,
    }

    return WindData;
}

export const GetCloudsData = (state) => {
    var CloudsData = {
        'CloudsStatus': state.CloudsStatus,
        'CloudsPercentage': state.CloudsPercentage
    }

    return CloudsData;
}

export const GetCityError = (state) => {
    return state.CityNotFoundError;
}

export const GetDistrictError = (state) => {
    return state.DistrictNotFoundError;
}