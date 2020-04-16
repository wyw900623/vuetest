<template>
  <div>{{name}}</div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Sylvia"
    }
  },
  beforeRouteUpdate(to, from, next) {
    //在当前路由改变，但是该组件被复用时调用
  }
};
</script>
