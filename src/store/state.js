export default {
    AllCities: [],
    
    CurrentCity: null, // Will Be Present in Data..
    CurrentState: null, // Will Be Present in Data..
    CurrentDistrict: null, // Will Be Present in Data..

    QueryData: null, // Will Be Present in Data..
    PlaceName: null, // Will Be Present in Data..

    CityNotFoundError: false, // To Indicate Errors in fetching data of City.
    DistrictNotFoundError: false, // To Indicate Errors in fetching data of State.

    Temperature: null, // Will Be Present in Data..
    MinimumTemperature: null, // Will Be Present in Data..
    MaximumTemperature: null, // Will Be Present in Data..
    
    Pressure: null, // Will Be Present in Data..

    HumidityLevel: null, // Will Be Present in Data..

    Latitude: null, // Will Be Present in Data..
    Longitude: null, // Will Be Present in Data..
    
    MainWeather: null, // Will Be Present in Data..
    WeatherDescription: null, // Will Be Present in Data..

    WindSpeed: null, // May or May Not be Present.. 
    WindDirection: null, // May or May Not be Present..
    WindGust: null, // May or May Not be Present..
    WindStatus: true, // May or May Not be Present..

    CloudsStatus: true, // May or May Not be Present..
    CloudsPercentage: null // May or May Not be Present..
}