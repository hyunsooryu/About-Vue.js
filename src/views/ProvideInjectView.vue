<template>
<div>
    <provide-inject-child-view :itemLength="items.length">
    </provide-inject-child-view>
</div>
</template>
<script> 

import ProvideInjectChildView from './ProvideInjectViewChild'

export default {
    name : 'ProvideInjectView',

    components : {
            'provide-inject-child-view' : ProvideInjectChildView
    },

    data(){
        return {
            items : ["A", "B"],
            personName : "김민재",
        };
    },

    provide(){
        //부모 추적이 어려운 단점은 있으나, 자식의 자식이 쓰기에는 거 깔끔하게 좋습니다.
        return {
            personName : this.personName,
            items : this.items
        }
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