<template>
    <div class="container pt-3 mx-auto">
        <create-new-message 
            class="text-right w-1/2 mx-auto mb-9"
            @new-message="messages.push($event)"
        ></create-new-message>
        <notification 
                :key="index"
                v-for="(msg, index) in messages"
                :message="msg.message"
                :title="msg.title"
                class="mb-2"
            />
    </div>
</template>

<script>
import CreateNewMessage from './components/CreateNewMessage'
import Notification from './components/Notification'

export default {
    props : [],
    components : {
        Notification,
        CreateNewMessage
    },
    data(){
        return {
            messages : []
        }
    },
    mounted(){
        this.$appScript.readMessages().then( messages => {
            this.messages = messages
        })
    },
    methods : {
        
    }
}
</script>

<style>
</style>