<template>
    <div>
        <input class="w-full mt-1 px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" v-model="newTitle" placeholder="Title">
        <textarea rows="3" class="w-full px-2 py-1 resize-none shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" v-model="newMessage" placeholder="Message"></textarea>
        <button 
            @click="postNewMessage"
            class="mt-3 ml-auto btn btn-primary"
        >Post
        </button>
    </div>
</template>

<script>
export default {
    props : [],
    data(){
        return {
            newTitle : '',
            newMessage : ''
        }
    },
    mounted(){

    },
    methods : {
        postNewMessage(){
            if (! this.newTitle){
                return;
            }

            window.Events.$emit('displayMessage', "Posting message...");

            let msg = {title : this.newTitle, message: this.newMessage}
            this.newTitle = '';
            this.newMessage = '';
            this.$emit('new-message', msg);
            this.$appScript.saveMessage(msg).then( () => {
                window.Events.$emit('dismissMessage');
            });
        }
    }
}
</script>

<style>
</style>