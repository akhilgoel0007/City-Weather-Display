import axios from 'axios';

export const GetCityData = ({ commit }) => {
    axios.get('https://indian-cities-api-nocbegfhqg.now.sh/cities')
    .then(Response => {
        commit('SET_CITY_DATA', Response.data);
    })
    .catch(Error => {
        console.log('Caught Error: ', Error)
    })
}

export const GetCity = ({dispatch, commit, getters }, Errors) => {
    var Query = `${getters.GetCurrentCity},${getters.GetCurrentDistrict},${getters.GetCurrentState},India`;

    if(Errors.CityError && !Errors.DistrictError) {
        Query = `${getters.GetCurrentDistrict},${getters.GetCurrentState},India`;

    } else if(Errors.CityError && Errors.DistrictError){
        Query = `${getters.GetCurrentState},India`; 
    }

    axios.get(`https://api.openweathermap.org/data/2.5/find?q=${Query}&units=imperial&appid=f92c1f4990b0574d4a4e4d3dd556f388`)
    .then(Response => {
        if(Response.data.count != 0) { // Response has some data..
            commit('SET_WEATHER_DATA', {'WeatherData':Response.data.list[0], 'ErrorReport': Errors});
        } else { // Response has no data.. Call Again with one parameter less..
            if(!Errors.CityError && !Errors.DistrictError) {
                Errors.CityError = true;
            } else if (Errors.CityError && !Errors.DistrictError) {
                Errors.DistrictError = true;
            }
    
            dispatch('GetCity', Errors);
        }
    })
    .catch(Error => {
        console.log('Caught Error: ', Error)
    })
}

export const SaveSelectedOption = ({ commit }, Payload) => {
    commit('SAVE_SELECTED_CITY_DATA', Payload)
}