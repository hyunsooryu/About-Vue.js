<template>
<div>
    <h1>Count : {{count}}</h1> 
    <button type="button" @click="getNumberFromDB()">디비에서 숫자가져오기</button>
    <ul>
        <li :key="i" v-for="(product, i) in productList">{{product.product_name}}</li>
    </ul>
    <button type="button" @click="getProductListFromDB()">상품 리스트 가져오기</button>
</div>
</template>

<script>
export default {
    name : 'StoreAccess',
    components : {},
    data(){
        return {
            title : 'Hello, world, man',
            productList : [],
        };
    },
    setup(){

    },
    //인스턴스가 생성되고 나서, 가장 처음으로 실행되는 라이프 사이클 단게입니다. 
    //이때는 Vue Instance의 data와 methods 속성이 정의되어 있지않고,
    //화면 요소(ex.dom) 에도 접근 할 수 없습니다.
    beforeCreate(){

    },

    /*
    이 단계에서는 data 속성과, methods 속성이 정의 되어있기 때문에,
    두 속성값에 접근 하는 로직을 구현하셔도 됩니다. 하지만, 아직 화면 요소에 인스턴스가 부착되기 전이기 때문에
    template 속성에 정의된 돔 요소에 접근하는 코드를 구현할 수는 없습니다.
    */
    created(){ //Vue 컴포넌트 생성하자마자, 이 코드가 바로 실행
        console.log("CREATED")
        this.getProductListFromDB();
    },
    /*
        render() 함수가 호출되기 직전의 단계입니다.
        created 이후에 template 속성에 지정한 마크업 속성을 render() 함수로 변환한 후,
        el 속성에 지정한 화면 요소에 인스턴스를 부착하기 직전 호출 되기 때문에 화면에
        붙이기 전 실행해야 할 코드들을 구현하면 됩니다.
    */
    beforeMount(){

    },
    /*
        render() 함수가 호출된 후, el 속성에서 지정한 화면 요소에 인스턴스가 부탁되고 난 후 호출 단계입니다.
        template 속성에 정의한 화면 요소에 접근할 수 있기때문에, 화면 요소를 제어하는 코드를 구현하면 됩니다.
        주의할 것은 돔에 인스턴스가 부탁되자마자 호출 되기 때문에 외부라이브러링에 의해 추가되는 화면 요소들이
        최종 HTML 코드로 변환되는 시점은 다를 수 있습니다.
    */
    mounted(){ //실제 Html Dom에 올라가는 순간, 이 코드가 바로 실행

    },

    /*
        el 속성에서 지정한 화면 요소에 인스턴스가 부탁되고 난 후에 인스턴스 속성들이 화면에 치환됩니다.
        이 치환된 값들을 watch 속성으로 감시하는데, 이 데이터 관찰을 하는데
        관찰하고 있는 데이터들이 변경 되면 가상 돔을 이용해 화면을 다시 그려햐 합니다.
        이때 그리기 직전 호출되는 단계입니다.
        따라서 변경 예정인 데이터 값을 이용해 작업을 할 때 작업을 여기서 하면됩니다.
    */
    beforeUpdate(){

    },

    /*
        beforeUpdate가 끝나고 화면에 다시 그리고 나면 실행되는 단계입니다.
        데이터가 변경되고 화면 요소를 제어하는 것을 구현하고 싶을 때 이 단계에서 작업하시면 됩니다.
        하지만 이 단계에서 그 값을 또 변경하면, 무한 루프에 빠질 수 있기 때문에,
        데이터 값을 갱신하는 로직은 beforeUpdate에서 처리해야 합니다.
    */
    updated(){

    },

    unmounted() {//컴포넌트에서 다른 컴포넌트로 이동할 때, 이 코드가 바로 실행
        
    },

    computed: {
        count(){
            return this.$store.state.count;
        },
    },
    methods :{
        getNumberFromDB : async function(){
            let num = await this.$api('http://localhost:10010/num', 'GET', {});
            console.log(num);
            return this.$store.commit('setNum', num);        
        },
        getProductListFromDB : async function(){
            let tmpProductList = this.$store.state.productList;
            if(this.$UTIL_ObjectEmpty(tmpProductList)){
                tmpProductList =  await this.$api('http://localhost:10010/productlist','GET',{});
            }
            this.productList = tmpProductList;
            return this.$store.commit('setProductList', this.productList);
        }
    }
}
</script>

<style scoped>

</style>