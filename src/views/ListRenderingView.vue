<template>
<div>
    <select v-model="city">
        <option :value="city.v" :key="i" v-for="(city, i) in options">{{city.t}}</option>
    </select>
</div>
</template>

<script>
export default {
    name : 'ListRenderingView',
    components : {},
    data(){
        return {
         options : [
             {v : '02', t : '서울'},
             {v : '21', t : '부산'},
             {v : '43', t : '광주'}
         ],
         city : '43'
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