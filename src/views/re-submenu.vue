<template>
  <sub-menu>
    <div slot="title">{{ parent.title }}</div>
    <template v-for="(item,index) in parent.children">
      <menu-item v-if="!item.children" :key="index">{{item.title}}</menu-item>
      <re-submenu v-else :key="index" :parent="item"></re-submenu>
    </template>
  </sub-menu>
</template>
<script>
import MenuComponents from "_c/menu";
const { MenuItem, SubMenu } = MenuComponents;
export default {
  name: "reSubmenu",
  components: {
    MenuItem,
    SubMenu
  },
  props: {
    parent: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
