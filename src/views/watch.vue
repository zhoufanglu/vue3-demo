<template>
<div>watch</div>
  <div>refCount的值为：{{refCount}}</div>
  <button @click="add">增加refCount</button>
  <input type="text" v-model="data_1">
  <input type="text" v-model="data_2">
</template>

<script lang="ts">
import {ref, watch, reactive, watchEffect} from 'vue'

interface Person{
  name: string,
  age: number
}

export default {
  name: "watch",
  setup(){
    const refCount = ref<number>(1)
    const refCountTwo = ref<number>(100)
    const personA = reactive<Person>({
      name: 'lfz',
      age: 10
    })
    //watch 单个
    /**
     * refCount:监听的值， refCount 新的值， prevRefCount 旧的值
     */
/*    watch(() => personA.age, (newVal: number, oldVal: number): void => {
      console.log('new值', newVal)
      console.log('old值', oldVal)
      console.log('-------------')
    })*/

    //watch 多个
    let data_1 = ref<number>(1)
    let data_2 = ref<number>(2)
/*    watch([data_1, data_2], (newVal: any, oldVal: any): void => {
      data_1.value = data_2.value++
      data_2.value = data_1.value++
      console.log('new值', newVal)
      console.log('old值', oldVal)
      console.log('-----------')
    })*/
/*    watch([data_1, data_2], ([new_data_1, old_data_1],[new_data_2, old_data_2],: void => {
/!*      console.log('new值', newVal)
      console.log('old值', oldVal)*!/
    })*/
    
    /**********************watchEffect***********************/
/*    watchEffect(()=>{
      console.log(36, personA.age)
    })*/
    
    setTimeout(()=>{
      personA.age++
    },1000)

    const add = ():void=>{
      refCount.value++
      refCountTwo.value++
      personA.age++
      data_1.value++
      data_2.value++
    }

    
    return{
      refCount,
      add,
      data_1,
      data_2
    }
  }
}
</script>

<style scoped>

</style>