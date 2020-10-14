<template>
<div>watch</div>
  <div>refCount的值为：{{refCount}}</div>
  <button @click="add">增加refCount</button>
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
    const personA = reactive<person>({
      name: 'lfz',
      age: 10
    })
    //watch 单个
    /**
     * refCount:监听的值， refCount 新的值， prevRefCount 旧的值
     */
    /*watch(() => personA.age, (newVal: number, oldVal: number): void => {
      console.log('new值', newVal)
      console.log('old值', oldVal)
      console.log('-------------')
    })*/
    
    /**********************watchEffect***********************/
    watchEffect(()=>{
      console.log(36, personA.age)
    })
    
    setTimeout(()=>{
      personA.age++
    },1000)

    const add = ():void=>{
      refCount.value++
      refCountTwo.value++
      personA.age++
    }

    
    return{
      refCount,
      add
    }
  }
}
</script>

<style scoped>

</style>