<template>
<div>
<h1>{{msg}}</h1>
<button type="button" @click="sendFromChild()">자식 컴포넌트 버튼</button>
<button type="button" @click="changeData()">자식 컴포넌트 버튼2</button>

<div>
   <button ref="child_btn" type="button" @click="childFunc()">자식에 있는 클릭(차일드 펑션)</button> 
</div>
<div>likes : {{likes}}</div>
<div>isOk : {{isOk}}</div>
<div>{{author.name}}</div>
<div>{{author.company}}</div>
</div>
</template>
<script>
export default {
    props : {
       likes : {
         type : Number,
         default : 0
       },
       isOk : {
           type : Boolean,
           default : false
       },
       commentsIds : {
           type : Array
       },
       author : {
           type : Object
       }
    },
    data(){
        return {
            msg : '자식 컴포넌트로 부터 보내는 메시지'
        }
    },

    mounted(){
        console.log(this.commentsIds);
    },
    methods: {
        childFunc(){
            console.log("부모 컴포넌트에서 발생시킨 이벤트");
        },
        sendFromChild(){
            this.$emit('send-message', this.msg);
        },
        changeData(){
            this.msg = '자식 컴포넌트에서 데이터 변경이 일어났습니다.';
        }
    },
}
</script>
