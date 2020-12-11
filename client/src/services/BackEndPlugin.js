'use strict';
import MockBackEnd from './MockBackEnd.js';
import GASBackEnd from './GASBackEnd.js';



export default function install(Vue, options = {}) {


    Object.defineProperty(Vue.prototype, '$appScript', {
        get() { 
            if (typeof google !== 'undefined') {
                return new GASBackEnd();
            }
            else {
                return new MockBackEnd();
            }
        }
    })
}