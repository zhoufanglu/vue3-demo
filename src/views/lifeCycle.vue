<template>
  <div class="life-cycle">
    <span v-for="(i,index) in tabTitle.list"
      :key="i"
      @click="tabTitle.titleClick(index)"
      :class="i===tabTitle.currentTitle?'active':''"
    >
      {{i}}
    </span>
    <div>当前选中的标题：{{tabTitle.currentTitle}}</div>
    <div>-----</div>
    <span>{{refCount}}</span>
  </div>
</template>

<script lang="ts">
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
  reactive
} from 'vue'
interface TabTitleProps {
  list: string[],
  currentTitle: string,
  titleClick: (index: number) => void
}
export default {
  name: "生命周期",
  setup() {/*
    console.log('1---setup,组件创建之前')
    onBeforeMount(()=>{
      console.log('2---onBeforeMount,组件挂载到dom前')
    })
    onMounted(()=>{
      console.log('3---onMounted,组件挂载到dom后')
    })
    //组件更新前后--比如数据更新后，会触发组件更新
    onBeforeUpdate(()=>{
      console.log('4---onBeforeUpdate,组件更新前')
    })
    onUpdated(()=>{
      console.log('5---onUpdated,组件更新后')
    })
    //组件销毁前后  节点删除或替换会触发
    onBeforeUnmount(()=>{
      console.log('6---onBeforeUnmount，卸载组件前')
    })
    onUnmounted(()=>{
      console.log('7---onBeforeUnmount，卸载组件后')
    })*/
    const refCount = ref<number>(0)
    refCount.value = 2

    const tabTitle = reactive<TabTitleProps>({
      list: ['标题A', '标题B', '标题C'],
      currentTitle: '',
      titleClick: (index:number)=>{
        tabTitle.currentTitle = tabTitle.list[index]
      }
    })
    //可以理解为vue2中的data(){return{}}
    return {
      tabTitle,
      refCount
    }
  }
}
</script>

<style scoped lang="scss">
  .life-cycle{
    .active{
      color: red;
    }
    span{
      margin-left: 6px;
    }
  }
</style>