<template>
  <div id="nav">
    <router-link
                 v-for="(i,index) in routerList"
                 :key="i.name"
                 :to="i.path"
    >{{i.name}}&nbsp;&nbsp;&nbsp;&nbsp;</router-link>
  </div>
  <router-view/>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import router from '@/router/index'
  export default defineComponent({
    setup(){
      const routerList:any[] = router.options.routes
      return {
        routerList
      }
    }
  })
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
