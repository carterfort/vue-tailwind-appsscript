import Vue from 'vue';
import App from './App'
import AppScript from './services/BackEndPlugin'

Vue.use(AppScript)


import './css/app.css'

new Vue({
    el: '#app',
    components: { App }
})
