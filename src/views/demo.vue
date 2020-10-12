<template>
  <h1>
   composition API
  </h1>
  <div>
    msg:{{msg}}
    <div>-------</div>
    person: {{person}}

    <button @click="updateMsg('update after click...')">更新msg</button>
    <button @click="updatePerson({ name: 'ZhangSan', age: 88 })">更新Person</button>
    <div>------计算属性-------</div>
    <span>{{computedList}}</span>
    <span>{{getComputedVal}}</span>
    <div>------watch-------</div>
    <span>{{count}}</span>
  </div>
</template>

<script lang="ts">
import {ref,reactive,onMounted,readonly, isReadonly, computed, ComputedRef,watch} from 'vue'
import {useRef, useReactive} from "@/assets/js/useMod"

export default {
  name: "demo",
  components: {},
  props: {},
  //由于在执行 setup 时尚未创建组件实例，因此在 setup 选项中没有 this
  setup (props: any, context: any) {
    console.log(15,'我是setUp')
    console.log(16, props)
    console.log(17, context)
    console.log('-------------')
    // mounted
    /*onMounted(() => {
      console.log(29)
      console.log('Component is mounted!')
    })*/
    //获取msg
    const {msg, updateMsg} = useRef()
    //获取person
    const {person, updatePerson} = useReactive()
    const readOnlyMsg = readonly(msg)
    /**********************计算属性***********************/
    const computedList = computed((): string => {
      return `我是计算属性`
    })
    /**********************watch***********************/
    let count = ref<number>(0)
    let sum = ref<number>(10)
    setTimeout(()=>{
      count.value++
    },1000)
    setTimeout(()=>{
      sum.value = 1000
    }, 2000)
    console.log(55, sum)
    watch([count, sum], (newVal, oldVal)=>{
      console.log('变化后的值', newVal)
      //console.log('变化前的值', oldVal)
    })
    return {
      msg,
      person,
      updateMsg,
      updatePerson,
      computedList,
      count
    }
  },
  computed: {
    getComputedVal(){
      return 'aaaa'
    }
  }
}
</script>

<style scoped>

</style>