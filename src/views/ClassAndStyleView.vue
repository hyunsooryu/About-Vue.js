<template>
<div>
<div :class="{'active' : isActive, 'text-red' : isRed}">
   <h2>hello, world</h2>
</div>
<div :class="[activeClass, textRedClass]">
   <h2>hello, world</h2>
</div>
<div :style="styleObj">
   <h2>hello, world</h2>
</div>
</div>
</template>

<script>
export default {
    name : 'ClassAndStyleView',
    components : {},
    data(){
        return {
            isActive : true,
            isRed : true,
            textRedClass : 'text-red',
            activeClass : 'active',
            
            styleObj : {
                backgroundColor : 'yellow',
                color : 'red',
                fontWeight : 'bold'
            }

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

    .active{
        background-color: yellow;
        font-weight: bold;
    }

    .text-red{
        color : red;
    }
</style>