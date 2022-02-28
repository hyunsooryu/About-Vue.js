<template>
<div>
    <div>
        <select v-model="selectedCity">
            <option :value="city.code" :key="i" v-for="(city, i) in cities">{{city.name}}</option>
        </select>
        <input type="text" @keyup.enter="searchUserList()"/>
        <button type="button" @click="searchUserList()">조회</button>
    </div>
    <div>
        <table>
            <tr>
            <th :key="i" v-for="(head, i) in headList">{{head}}</th>
            </tr>
            <tr :key="i" v-for="(user, i) in userList">
                <td>{{user.name}}</td>
                <td>{{user.age}}</td>
                <td>{{user.job}}</td>
            </tr>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name : 'MiniProjectView',
    components : {},
    data(){
        return {
            headList :['이름','나이','직업'],
            userList : [],
            selectedCity : '02',
            userName : '',

            cities : [
                {name : '서울', code : '02'},
                {name : '경기', code : '031'},
                {name : '인천', code : '032'}
            ]
        };
    },
    setup(){

    },
    create(){ //Vue 컴포넌트 생성하자마자, 이 코드가 바로 실행

    },
    mounted(){ //실제 Html Dom에 올라가는 순간, 이 코드가 바로 실행
        this.$swal('hello, world');
    },
    unmounted() {//컴포넌트에서 다른 컴포넌트로 이동할 때, 이 코드가 바로 실행
        
    },
    methods :{


        searchUserList(){
            const selectedCity = this.selectedCity;
            const userName = this.userName;

            const param = {
                'selectedCity' : selectedCity,
                'userName' : userName
            };

            this.userList = this.getUserList(param);
        },

        getUserList(params){
            console.log(params);
            let list = [
                {name : '유재석', age : 50, job : '연예인'},
                {name : '하하', age : 40, job : '연예인'},
                {name : '김종국', age : 34, job : '연예인'},
                {name : '양세찬', age : 52, job : '연예인'},
            ];
            return list;
        }
    }
}
</script>

<style scoped>

</style>