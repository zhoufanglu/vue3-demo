<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    第二个div
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
  props: {},
  setup (props, context) {
    console.log('setUp ... ')
  }
}
</script>
