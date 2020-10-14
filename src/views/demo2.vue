<template>
  <div>
    <h1>demo2</h1>
    <div>---------</div>
    <div class="p-demo2">
      <span>ref: {{number}}</span>
      <span>reactive: {{personA}}</span>
      <span>非动态： {{testNumber}}---{{name}}</span>
      <button @click="changeNumber">改变非动态的number</button>
      <button @click="changeNumber">改变动态的number</button>
      <h3>计算属性-computed</h3>
      <span>{{computedVal_1}}</span>
      <h3>watch</h3>
      <span>watchCount</span>
      <button @click="watchAdd">增加</button>
      <div>---------------------------</div>
      <div v-for="(i, index) in girls"
        :key="i"
      >
        <span @click="selectGirlFun(index, i)">{{i}}</span>
      </div>
      <div>选中的女士：{{selectGirl}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, toRefs, reactive, computed, watchEffect, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onRenderTracked, onRenderTriggered} from 'vue'

interface Person {
  name: string,
  age: number
}

interface DataProps {
  girls: string[]
  selectGirl: string
  selectGirlFun: (index:number, name:string) => void
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
    console.log('1----我是setup', 'beforeCreate 之后、created 之前执')
    //ref 若要改变number的值，需要number.value
    const number = ref<number>(100)
    //reactive
    let personA:Person = reactive({
      name: 'aaa',
      age: 25
    })
    let personB = reactive<Person>({
      name: 'bbb',
      age: 11
    })
    console.log(26, personA)
    console.log(27, personB)
    console.log(28, number.value)
    const testNumber:number = 11
    /**********************dataProps***********************/
    const data = reactive<DataProps>({
      girls: ['女士A', '女士B', '女士C'],
      selectGirl: '11',
      selectGirlFun: (index:number, name:string)=>{
        data.selectGirl = data.girls[index]
        console.log(73, data.selectGirl)
      }
    })

    console.log(67, data)
    const toRefsData = toRefs(data)
    /**********************computed***********************/
    //使用 getter 函数，并为从 getter 返回的值返回一个不变的响应式 ref 对象。
    const comCount_1 = ref<number>(1)
    const comCount_2 = ref<number>(2)
    //只读的
    const computedVal_1 = computed(_=> comCount_1.value + 100)
    const computedVal_2 = computed(_=> comCount_2.value + 200)
    //console.log(50, computedVal_1.value, computedVal_2.value)
    /**********************watchEffect***********************/
    //在响应式地跟踪其依赖项时立即运行一个函数，并在更改依赖项时重新运行它。
    const watchCount = ref<number>(0)
    watchEffect(()=>{console.log('watchEffect',watchCount.value)})
    /*setTimeout(()=>{
      watchCount.value ++
    }, 2000)*/
    /**********************状态跟踪***********************/
    //跟踪所有响应式对象的钩子函数
    /*onRenderTracked((event)=>{
      console.log('状态跟踪钩子函数----------------->')
      console.log(96, event)
    })*/
    //跟踪单个
    /*onRenderTriggered((event)=>{
      console.log('状态跟踪钩子函数单个----------------->')
      console.log(96, event)
    })*/
    /**********************原数据的data***********************/
    return {
      number,
      personA,
      testNumber,
      name: '非动态的name啊',
      computedVal_1: computed(_=> comCount_1.value + 100),
      watchCount,
      ...toRefsData
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