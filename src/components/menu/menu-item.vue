<template>
  <li class="menu-item">
    <slot></slot>
  </li>
</template>
<script>
export default {
  name: "menuItem"
};
</script>
<style>
.menu-item {
  background: rgb(156, 156, 158);
  color: #fff;
}
</style>
