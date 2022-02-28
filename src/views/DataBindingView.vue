<template>
<div>
    <h1>{{sampleData}}</h1> 
    <h1>{{sampleData2}}</h1>
</div>
</template>

<script>
export default { 
    name : 'DataBidingView',
    components : {},
    data(){
        return {
            sampleData : 'Data, Binding 1',
            sampleData2 : 'Data, Biding 2'
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