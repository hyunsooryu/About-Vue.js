<template>
<div>
   <h2 v-show="bRender">bRender이 true이면 보여집니다.</h2>
   <h2 v-show="!bRender">bRender이 false이면 보여집니다.</h2>
   <section>
       <select v-model="selectedCity" @change="changeSelect()">
           <option :value="city.prefix" :key="i" v-for="(city, i) in cities">{{city.name}}</option>
       </select>
       <select v-model="selectedCandidate">
           <option :value="candidate.prefix" :key="i" v-for="(candidate, i) in candidates">{{candidate.name}} / {{candidate.party}}</option>
       </select>
       <h2>author-computed : {{personFullName}}</h2>
       <h2>author-method : {{getFullName()}}</h2>
       <h3>count is : {{count}}</h3>
       <button type="button" @click="increaseCounter(), consoleLogOne(), consoleLogTwo()">Add 1</button>
       <input type="text" v-model="textValue" @keyup.enter="showValue()"/>
   </section>
</div>
</template>

<script>
export default {
    name : 'RenderingGrammerView',
    components : {},
    data(){
        return {
            
            vote : {},

            textValue : '',
            bRender : false,
            count : 0,

            selectedCity : '02',
            selectedCandidate : 1,
            
            cities : [
                {'prefix' : '02', 'name' : '서울'},
                {'prefix' : '032', 'name' : '인천'},
                {'prefix' : '031', 'name' : '경기'}                
            ],
            
            candidates : [
                {'prefix' : 1, 'name' : '이재명', 'party' : '더불어민주당'},
                {'prefix' : 2, 'name' : '윤석열', 'party' : '국민의힘'},
            ],

            person : {'firstname' : 'hi', 'lastname' : 'ryu'}
        }
    },

    watch: {

        selectedCity(){
            this.vote.city=this.selectedCity;
            console.log(this.vote);
        },

        selectedCandidate(){
            this.vote.candidate=this.selectedCandidate
            console.log(this.vote);
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
    computed : {
        personFullName : function(){
            return this.person.lastname + this.person.firstname
        }
    },

    methods :{
        increaseCounter(){
            this.count += 1;
        },

        consoleLogOne(){
            console.log("one");
        },

        consoleLogTwo(){
            console.log("two");
        },

        changeSelect(){
            console.log(this.selectedCity);
        },

        showValue(){
            alert(this.textValue);
        },

        getFullName(){
            return this.person.lastname + this.person.firstname;
        },

        updated() {
            console.log(this.vote);
        },
    }
}
</script>

<style scoped>

</style>