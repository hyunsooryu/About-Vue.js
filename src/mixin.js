import axios from 'axios';

export default {

    /*
    공통 기능 mixin으로 
    mounted() {
        alert("HI~");
    },

    Vue3 으로 업그레이드 된 큰 이유는 Composition API 입니다.

    */

    methods : {
        async $api(url, method, data){
            return (await axios({
                method : method,
                url : url,
                data : data
                }).catch(e=>{
                    console.log(e);
                  })
            ).data;
        },

        $UTIL_ObjectEmpty(target){
            if(typeof target == 'undefined') return true;
            if(target == null) return true;
            return false;
        }
    }
}