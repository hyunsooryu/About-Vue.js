<template>
<div>
  <provide-inject-view-child-child :itemLength="itemLength">
  </provide-inject-view-child-child>
</div>
</template>
<script>

import ProvideInjectViewChildChild from './ProvideInjectViewChildChild'

export default {
    name : 'ProvideInjectViewChild',
    components : {
            'provide-inject-view-child-child' : ProvideInjectViewChildChild
        },
    props : {
        itemLength : {
            type : Number,
            default : 0
        }
    },
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