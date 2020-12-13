<template>
    <div>
        <input class="form-control" v-model="newTitle" placeholder="Title">
        <textarea rows="3" class="form-control" v-model="newMessage" placeholder="Message"></textarea>
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