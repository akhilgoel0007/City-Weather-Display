<template>
    <div>
        <div v-if="GetCityError" class='Layout Error'>Data of {{ GetCurrentCity }}(City) was not found.</div>
        <div v-if="GetDistrictError" class='Layout Error'>Data of {{ GetCurrentDistrict }}(District) was not found.</div>
        <div v-if="!GetCityError && !GetDistrictError" class='Layout Success'>
            Displaying Data of {{ GetCurrentCity }}(City).
        </div>
        <div v-if="GetCityError && !GetDistrictError" class='Layout Success'>
            Displaying Data of {{ GetCurrentDistrict }}(District).
        </div>
        <div v-if="GetCityError && GetDistrictError" class='Layout Success'>
            Displaying Data of {{ GetCurrentState }}((State)).
        </div> 
        <div class='Weather-Card'>
            <div class='Header-Place'>
                <div class='Side-Bar' style='background-color: #9575CD'></div>
                <div class='Header-Data' style='color: #9575CD'>{{ GetPlaceName }}</div>
            </div>
            <div class='Body-Data'>
                <div class=' Common-Specs'>
                    <div class='Side-Bar' style='background-color: #D50000'></div>
                    <div> 
                        <div class='Data-Header' style='color: #D50000'>Temperature</div>
                        <div class="Multiline-Info">
                            Temperature: {{GetTemperatureData.Temperature }}<br>
                            Minimum Teperature: {{GetTemperatureData.MinimumTemperature }}<br>
                            Maximum Temperature: {{GetTemperatureData.MaximumTemperature }}
                        </div> 
                    </div>
                </div>
                <div class=' Common-Specs'>
                    <div class='Side-Bar' style='background-color: #00E676'></div>
                    <div>
                        <div class='Data-Header' style='color: #00E676'>Atmospheric Pressure</div>
                        <div class="Info">Current Pressure: {{ GetPressureData }} hPa</div>
                    </div>
                </div>            
                <div class=' Common-Specs'>
                    <div class='Side-Bar' style='background-color: #4DD0E1'></div>
                    <div>
                        <div class='Data-Header' style='color: #4DD0E1'>Humidity</div>
                        <div class="Info">Humidity Level: {{ GetHumidityData }}%</div>
                    </div>
                </div>            
                <div class=' Common-Specs'>
                    <div class='Side-Bar' style='background-color: #4DB6AC'></div>
                    <div> 
                        <div class='Data-Header' style='color: #4DB6AC'>Geo Location</div>
                        <div class="Multiline-Info">
                            Latitude: {{ GetGeoLocationData.Latitude }}<br>
                            Longitude: {{ GetGeoLocationData.Longitude }}
                        </div> 
                    </div>
                </div>
                <div class=' Common-Specs'>
                    <div class='Side-Bar' style='background-color: #81C784'></div>
                    <div> 
                        <div class='Data-Header' style='color: #81C784'>Weather</div>
                        <div class="Multiline-Info">
                            Weather: {{ GetWeatherData.MainWeather }}<br>
                            Description: {{ GetWeatherData.WeatherDescription }}
                        </div> 
                    </div>
                </div>
                <div class='Common-Specs' v-if="GetWindData.WindStatus">
                    <div class='Side-Bar' style='background-color: #FFB74D'></div>
                    <div> 
                        <div class='Data-Header' style='color: #FFB74D'>Wind</div>
                        <div v-if="GetWindData.WindGust != null" class="Multiline-Info">
                            WindSpeed: {{ GetWindData.WindSpeed }} m/s<br>
                            WindDirection: {{ GetWindData.WindDirection }} degrees<br>
                            WindGust: {{ GetWindData.WindGust }} m/s
                        </div>
                        <div v-else class="Multiline-Info" >
                            WindSpeed: {{ GetWindData.WindSpeed }} m/s<br>
                            WindDirection: {{ GetWindData.WindDirection }} degrees<br>
                        </div> 
                    </div>
                </div>
                <div class='Common-Specs'>
                    <div class='Side-Bar' style='background-color: #FF8A65' v-if="GetCloudsData.CloudsStatus"></div>
                    <div> 
                        <div class='Data-Header' style='color: #FF8A65'>Clouds</div>
                        <div class="Info">Clouds: {{ GetCloudsData.CloudsPercentage }}%</div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .Error {  
        background-color: #EF9A9A;
        border: 1px solid #E57373;
        color: #F44336;
    }

    .Success {
        background-color: #C8E6C9;
        border: 1px solid #A5D6A7;
        color: #66BB6A;
    }

    .Layout {
        height: 3vh;
        padding: 10px;
        width: 68.7%;
        margin-left: 15%;
        margin-top: 10px;
        border-radius: 4px;
        font-size: 20px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .Side-Bar {
        width: 1%;
        height: 100%;
        float: left;
    }

    .Header-Data {
        width: 98%;
        margin-left: 1%;
        height: 100%;
        font-size: 50px;
        font-weight: 700;
        line-height: 70px;
        letter-spacing: 1.5px;
        float: left;        
    }
    
    .Data-Header {
        padding-left: 15px;
        font-size: 28px;
        font-weight: 600;
        line-height: 40px;
        letter-spacing: 0.5px;
    }

    .Info {
        padding-left: 25px;
        font-size: 20px;
        line-height: 25px;
        color: #616161;
    }

    .Multiline-Info {
        padding-left: 25px;
        font-size: 17px;
        line-height: 19px;
        letter-spacing: 0.5px;
        color: #616161;
    }

    .Weather-Card {
        margin-top: 10px;
        height: 70vh;
        width: 70%;
        margin-left: 15%;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .Header-Place {
        height: 15%;
        margin-bottom: 10px;
        background-color: white;
    }

    .Body-Data {
        height: 85%;
    }

    .Common-Specs {
        width: calc(50% - 5px);
        height: 24%;
        margin-bottom: 5px;
        margin-right: 5px;
        float: left;
        background: white;
    }

</style>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'DisplayWeather',    
    methods: {
        ...mapActions(['GetCity'])
    },

    computed: {
        ...mapGetters([
            'GetCurrentCity',
            'GetCurrentDistrict',
            'GetCurrentState',
            'GetPlaceName',
            'GetTemperatureData',
            'GetPressureData',
            'GetHumidityData',
            'GetGeoLocationData',
            'GetWeatherData',
            'GetWindData',
            'GetCloudsData',
            'GetCityError',
            'GetDistrictError',
        ])
    },

    mounted() {
        this.GetCity({'CityError': false, 'DistrictError': false});
    }
}

</script>
