<template>
<div>
    <page-title :title="title"/>
    <button type="button" @click="showDataFromChild2">자식 메시지 2버튼</button>
    <h2>자식이 부모에게 전하는 메시지 2 : {{msgFromChild2}}</h2>
    <h2>자식이 부모님에게 전하는 메시지 : {{msgFromChild}}</h2>
    <button type="button" @click="callChildFunc()">부모에 있는 클릭</button>
    <child-component @send-message="sendMessage"
                     ref="child_component" 
                    :likes="likes"
                     :isOk="isOk"
                     :commentsIds="commentsIds"
                     :author="author"
                     />
    <tbody>
        <tr :key="i" v-for="(product, i) in productList">
            <td>{{product.product_name}}</td>
            <td>{{product.price}}</td>
            <td>{{product.delivery_price}}</td>
            <td>{{product.category}}</td>
        </tr>
    </tbody>
    <button type="button" @click="getProductList()">조회</button>
</div>
</template>
<script>

import PageTitle from '../components/PageTitle'
import axios from 'axios';
import ChildComponentView from './ChildComponentView';

export default {
    name : 'ServerDataView',
    components : {
        'page-title' : PageTitle,
        'child-component' : ChildComponentView
        },
    data(){
        return {
            msgFromChild : '',
            msgFromChild2 : '',
            productList : [],
            title : '부모 컴포넌트에서 전송할 페이지 타이틀',
            likes : 14,
            isOk: true,
            commentsIds : ["blessdutch","localhost"],
            author : {name : '류현수', company : 'gsshop'}
        };
    },
    //computed 속성을 통해, 차일드 컴포넌트의 msg의 변화를 감시한다.
    computed:{
        msg(){
            return this.$refs.child_component.msg;
        }
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
        showDataFromChild2(){
            alert(this.msg);
        },
        sendMessage(data){
            //alert(data);
            this.msgFromChild = data;
        },

        callChildFunc(){
            //this.$refs.child_component.$refs.child_btn.click();
            //직접 자식 컴포넌트에 데이터를 변경할 수 도 있다.
            this.$refs.child_component.msg = '부모 컴포넌트에서 변경한 메시지';
            this.$refs.child_component.childFunc();
        },

        async getProductList(){
            this.productList = await this.api("http://localhost:10010/productlist", "get", {});
            console.log(this.productList);
        },

        async api(url, method, data){
                return (await axios({
                    method : method,
                    url : url,
                    data : data
                    }).catch(e=>{
                        console.log(e);
                      })
                ).data;
        }
    }
}
</script>

<style scoped>

</style>