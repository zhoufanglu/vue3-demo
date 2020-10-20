<template>
<div>
  <div>a:{{a}}</div>
  <div>b:{{b}}</div>
  <div>a+b={{addVal}}</div>
</div>
</template>

<script lang="ts">
import {ref, computed} from 'vue'
export default {
  name: "computed",
  setup(){
    const a = ref<number>(1)
    const b = ref<number>(1)
    const addVal:any = computed(():number=> a.value+b.value)
    return {
      addVal,
      a,
      b
    }
  }
}
</script>

<style scoped>

</style>