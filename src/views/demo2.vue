<template>
  <div>
    <h1>demo2</h1>
    <div>---------</div>
    <div class="p-demo2">
      <span>ref: {{number}}</span>
      <span>reactive: {{personA}}</span>
      <span>非动态： {{testNumber}}</span>
      <button @click="changeNumber">改变非动态的number</button>
      <button @click="changeNumber">改变动态的number</button>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, reactive} from 'vue'

interface Person{
  name: string,
  age: number
}

export default {
  name: "demo2",
  components: {},
  props: {},
  /**由于在执行 setup 时尚未创建组件实例，因此在 setup 选项中没有 this
   *  beforeCreate 之后、created 之前执
  */
  setup (props: any, context: any) {
    /**********************响应式 ref(基本类型), reactive(引用类型)***********************/
    //ref 若要改变number的值，需要number.value
    const number = ref<number>(100)
    //reactive
    let personA:Person = reactive({
      name: 'aaa',
      age: 25
    })
    let personB = reactive<Person>({
      name: 'bbb',
      age: '11'
    })
    console.log(26, personA)
    console.log(27, personB)
    console.log(28, number.value)
    const testNumber:number = 11
    /**********************原数据的data***********************/
    return {
      number,
      personA,
      testNumber
    }
  },
  computed: {
    getComputedVal(){
      return 'aaaa'
    }
  },
  methods: {
    changeNumber() {
      console.log('xxx')
      //console.log(61, testNumber)
    }
  }
}
</script>

<style lang="scss" scoped>
  .p-demo2{
    display: flex;
    flex-direction: column;
    span{
      display: flex;
      justify-content: center;
    }
  }
</style>