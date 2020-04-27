<template>
  <div class="a-menu">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "menuBox"
};
</script>
<style lang="less">
.a-menu {
  & * {
    list-style: none;
    text-align: left;
  }
  ul {
    padding: 0;
    margin: 0;
  }
}
</style>
