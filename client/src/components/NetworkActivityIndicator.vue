<template>
    <div :style="style" class="border-0 border-b border-white bg-blue-900 text-white flex items-center justify-self-center transition-all ease-in-out overflow-hidden">
        <div class="mx-auto flex items-center">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        {{this.message}}
        </div>
    </div>
</template>

<script>
export default {
    props : [],
    data(){
        return {
            message : ''
        }
    },
    computed : {
        style() {
            return {
                height: this.message ? '80px' : '0px'
            }
        }
    },
    mounted(){
        window.Events.$on('displayMessage', (message) => {
            this.message = message;
        })

        window.Events.$on('dismissMessage', () => {
            this.message = '';
        })
    },
    methods : {

    }
}
</script>