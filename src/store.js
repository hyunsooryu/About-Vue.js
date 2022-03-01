import {createStore} from 'vuex'

const store = createStore({
    //state에서 정의 된 변수가 키값으로 사용될 수 있음. 상태 추적할 수 있음
    //모든 컴포넌트에서는 state 에서 정의 된 키값에 접근할 수 있음
    state(){
        return {
            count : 2,
            prouctList : []
        }
    },
    //외부 컴포넌트에선는 mutations 에 정의 된 함수를 통해서만, state에 변수 값을 바꿀 수 있다.
    mutations : {
        setNum(state, num){
            state.count = num;
        },
        setProductList(state, productList){
            state.productList = productList;
        }
    }
});

export default store;