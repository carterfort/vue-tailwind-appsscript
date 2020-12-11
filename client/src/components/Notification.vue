<template>
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div>
    <div class="text-xl font-medium text-black">{{ title }}</div>
    <p class="text-gray-500">{{ message }}</p>
  </div>
</div>

</template>

<script>
export default {
    props : ['title', 'message'],
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