<template>
<div>
    <h1 v-html="sampleData"></h1> 
</div>
</template>

<script>
export default { 
    name : 'DataBindingHtmlView',
    components : {},
    data(){
        return {
            sampleData : '<h2 style="color:red;">Hello, World</h2>',
           
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