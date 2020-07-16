<template>
  <div class="Home">
    <div class="Container">
      <div class="Search-Bar">
        <div class='Bar-Conatiner'>
          <div class='Search-Bar-Container'>
            <div class='Icon'><i class='fas fa-search Icon-Config'></i></div>
            <div class='Text-Area'>
              <input type="text" v-model="Search" placeholder="Search City">
            </div>
          </div>
        </div>
      </div>
      <div class="City-Display">
        <div v-for='(CurrentCity, index) in FilteredCities' :key="index">
          <router-link to="/DisplayWeather">
            <div class="All-City-Wrapper" @click="SaveSelectedOption({'City': CurrentCity.City, 'State': CurrentCity.State, 'District': CurrentCity.District})">
              <div class='Side-Bar'></div>
              <div class='Content-wrapper'>
                <div class="Heading">City</div>
                <div class="Content">{{ CurrentCity.City }}</div>
              </div>
              <div class='Content-wrapper'>
                <div class="Heading">State</div>
                <div class="Content">{{ CurrentCity.State }}</div>
              </div>
              <div class='Content-wrapper'>
                <div class="Heading">District</div>
                <div class="Content">{{ CurrentCity.District }}</div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>

a {
  color: inherit;
  text-decoration: none;
}

input:focus {
  outline: none; 
}

.Home {
  width: 100%;
  padding-top: 20vh;
  padding-bottom: 20vh;
  display: flex;
}

.Search-Bar {
  height: 10vh;
  padding-top: 15px;
}

.Bar-Conatiner {
  height: calc(100% - 15px);
}

.Search-Bar-Container {
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  float: left;
  border: 2px solid rgba(144, 164, 174, 0.5);
  border-radius: 5px;
  background-color: white;

}

.Icon {
  width: 5.5%;
  height: 100%;
  float: left;
}

.Icon-Config {
  margin-top: 6px;
  margin-left: 10px;
  font-size:36px; 
  color: grey;
  opacity: 0.3;
}

.Text-Area {
  width: 94.5%;
  padding: 7px 0px 0px 0px;
  height: calc(100% - 7px);
  float: left;
  border: none;
}

input {
  width: 98%;
  height: 80%;
  font-size: 24px;
  font-weight: 600;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  border: none;
  margin-left: 1%;
}

::-webkit-input-placeholder {
  color: grey;
  opacity: 0.3;
}

.Search-Button {
  width: 14%;
  height: 100%;
  float: left;
}

.Container {
  width: 76%;
  height: 100%;
  margin-left: 12%;
}

.City-Display {
  height: 150vh;
  width: 100%;
  overflow: auto;
  background-color: white;
}

.All-City-Wrapper {
  width: 100%;
  height: calc(15vh - 4px);
  border-bottom: 4px solid #F5F5F5;
  display: flex;
}

.All-City-Wrapper:hover {
  cursor: pointer;
}
.Side-Bar {
 width: 0.7%;
 height: 100%;
 float: left;
 background-color: lawngreen;
}

.Content-wrapper {
  width: calc(33.1% - 20px);
  height: calc(100% - 22.5px);
  padding-top: 22.5px;
  padding-left: 20px;
  font-weight: 600;
  float: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.Heading {
  height: 3vh;
  color: #9E9E9E;
  letter-spacing: 1px;
}

.Content {
  height: 5vh;
  font-size: 20px;
  line-height: 35px;
  letter-spacing: 0.3px;
}
</style>
<script>

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  data: function() {
    return {
      AllCities: null,
      Search: '',
    }
  },

  methods: {
    ...mapActions(['SaveSelectedOption', 'GetCityData']),
  },

  computed: {
    FilteredCities() {
      var AllCities = this.GetAllCities;

      if(AllCities) {
        return AllCities.filter((CurrentCity) => {
          return CurrentCity.City.match(this.Search);
        }).slice(0, 20);
      } else {
        return null;
      }
    },
    ...mapGetters(['GetAllCities'])
  },

  mounted() {
    this.GetCityData();
  },
}
</script>
