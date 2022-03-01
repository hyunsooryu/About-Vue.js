<template>
<div>
  <h2>I am child child</h2>
  <h3>From GrandParent Number : {{itemLength}}</h3>
  <h4>personName : {{personName}}</h4>
  <ul>
    <li :key="i" v-for="(item, i) in items">{{item}}</li>
  </ul>
</div>
</template>
<script>

export default {
    name : 'ProvideInjectViewChildChild',
    components : {
    
    },

    props : {
        itemLength : {
            type : Number,
            default : 0
        }
    },

    inject: ['personName', 'items'],

    data(){
        return {
          
        };
    },

    computed:{
    
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