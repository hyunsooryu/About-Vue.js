<template>
<div>
    <h1>{{title}}</h1> 
    <input type="text" v-model="title"/>
</div>
</template>

<script>
export default {
    name : 'BasicView',
    components : {},
    data(){
        return {
            title : 'Hello, world, man'
        };
    },
    setup(){

    },
    create(){ //Vue 컴포넌트 생성하자마자, 이 코드가 바로 실행

    },
    mounted(){ //실제 Html Dom에 올라가는 순간, 이 코드가 바로 실행

    },
    unmounted() {//컴포넌트에서 다른 컴포넌트로 이동할 때, 이 코드가 바로 실행
        
    },
    methods :{

    }
}
</script>

<style scoped>

</style>