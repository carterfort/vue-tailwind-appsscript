import Vue from 'vue';
import App from './App'
import AppScript from './services/BackEndPlugin'
import NetworkActivityIndicator from './components/NetworkActivityIndicator'

Vue.use(AppScript)


import './css/app.css'
window.Events = new Vue({});

Vue.component('network-activity-indicator', NetworkActivityIndicator);

new Vue({
    el: '#app',
    components: { App }
})
