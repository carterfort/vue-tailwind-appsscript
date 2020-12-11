<template>
    <div class="container pt-3 mx-auto">
        <notification 
                title="ChitChat" 
                message="Tailwind has started working!"
                class=""
            />
    </div>
</template>

<script>

import Notification from './components/Notification'

export default {
    props : [],
    components : {
        Notification
    },
    data(){
        return {

        }
    },
    mounted(){

    },
    methods : {

    }
}
</script>

<style>
</style>