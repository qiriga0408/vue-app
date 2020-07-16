import Vue from 'vue'
import vuex from 'vuex'
    Vue.use(vuex)
     //生成对象
   var state={
      LOADING: false,
      lj:false
   }
   var mutations={
      setData(state,arr){
        state.list=arr
      },
      showLoading(state){
         state.LOADING = true    
     },
     hideLoading (state) {
         state.LOADING = false
     }

   }
   var actions={

   }
   var getters={
     
   }
   var store=new vuex.Store({
       state,
       mutations,
       actions,
       getters
   })
   //抛出对象
  export default  store;
