<template>
  <div id="app">
    <hello></hello>
    <error v-if="error"></error>
    <validation v-if="invalid"></validation>
    <input placeholder="origin" type="text" v-model="origin" />
    <input placeholder="destination" type="text" v-model="destination" />
    <button v-on:click="checkDistance($event)">Calculate distance</button>
    <br>
    <distance class="distance-item" v-if="distance" v-bind:distance="distance">
    </distance>
  </div>
</template>
<script>
import Axios from 'axios'
import Hello from './components/Hello.vue'
import Distance from './components/Distance.vue'
import Error from './components/Error.vue'
import Validation from './components/Validation.vue'
export default {
  name: 'app',
  data: function () {
    return {
      origin: '',
      destination: '',
      distance: 0,
      error: false,
      invalid: false,
    }
  },
  components: {
    Hello,
    Error,
    Distance,
    Validation
  },
  methods: {
     updateNew (value) {
       this.origin = value
     },
     checkDistance: function (e) {
     e.preventDefault()

     this.invalid = false
     this.error = false
     console.log(this.origin)
     console.log(this.destination)
     if (
        this.origin == ""|| this.origin == null
        || this.destination == "" || this.destination == null)
     {
       this.invalid = true
       return
     }

     Axios.get(
       '/distance?'+ 'origin=' + this.origin
       + '&destination=' + this.destination
     )
     .then(response => {
        this.distance = {
          distance: response.data.rows[0].elements[0].distance.text,
          duration: response.data.rows[0].elements[0].duration.text
        }
      })
      .catch(error => {
          this.error = true
      })
    },
},
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
