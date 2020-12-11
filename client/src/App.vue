<template>
    <div class="container pt-3 mx-auto">
        <div class="text-right w-1/2 mx-auto mb-9">
            <input class="w-full mt-1 px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" v-model="newTitle" placeholder="Title">
            <textarea rows="3" class="w-full px-2 py-1 resize-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" v-model="newMessage" placeholder="Message"></textarea>
            <button 
                @click="postNewMessage"
                class="mt-3 ml-auto bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >Post
            </button>
        </div>
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

import Notification from './components/Notification'

export default {
    props : [],
    components : {
        Notification
    },
    data(){
        return {
            messages : [
                {
                    "title" : "ChitChat",
                    "message" : "Tailwind has started working!"
                }
            ],
            newTitle : '',
            newMessage : ''
        }
    },
    mounted(){

    },
    methods : {
        postNewMessage(){
            let msg = {title : this.newTitle, message: this.newMessage}
            this.newTitle = '';
            this.newMessage = '';
            this.messages.push(msg);
        }
    }
}
</script>

<style>
</style>