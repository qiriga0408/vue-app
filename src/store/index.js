import Vue from 'vue'
import vuex from 'vuex'
    Vue.use(vuex)
     //生成对象
   var state={
      list:[]
   }
   var mutations={
      setData(state,arr){
        state.list=arr
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
