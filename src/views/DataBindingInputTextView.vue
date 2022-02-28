<template>
<div>
   <input type="text" v-model="valueModel"/>
   <input type="number" v-model="valueModel2"/>
   <textarea v-model="valueModel3"/>
   <br/>
   <select v-model="city">
       <option value="02">서울</option>
       <option value="21">부산</option>
        <option value="064">제주</option>
   </select>
   <br/>
   <label><input type="checkbox" value="서울" v-model="checked">서울</label> 
    <label><input type="checkbox" value="부산" v-model="checked">부산</label> 
     <label><input type="checkbox" value="대구" v-model="checked">대구</label> 
    <br>
    <span>체크한 지역 : {{checked}}</span>
    <br>
    <br>
    <h2>속성 바인딩 연습</h2>
    <div>
        <img :src="imgUrl"/>
        <input type="text" v-model="textValue"/>
        <button type="button" v-bind:disabled="textValue==''">click</button>
    </div>
</div>
</template>
<script>
export default { 
    name : 'DataBindingInputTextView',
    components : {},
    data(){
        return {
            valueModel : 'South Korea',
            valueModel2 : 15232,
            valueModel3 : 'Hello,World',

            city : "02",
            //checked : true
            checked : [],

            imgUrl : "https://kr.vuejs.org/images/logo.png",
            
            textValue : ""
        };
    },
    setup(){

    },
    create(){ //Vue 컴포넌트 생성하자마자, 이 코드가 바로 실행

    },
    mounted(){ //실제 Html Dom에 올라가는 순간, 이 코드가 바로 실행
        console.log(this.valueModel2);
    },
    unmounted() {//컴포넌트에서 다른 컴포넌트로 이동할 때, 이 코드가 바로 실행
    
    },
    updated(){
      console.log(this.valueModel);
    },
    methods :{

    }
}
</script>

<style scoped>

</style>