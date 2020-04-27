<template>
  <ul class="sub-menu">
    <div class="sub-menu-title" @click="childState">
      <slot name="title"></slot>
      <span class="shrink-icon" :style="{ transform: `rotateZ(${showChild ? 0 : 180}deg)` }">^</span>
    </div>
    <div v-show="showChild" style="padding-left:20px;">
      <slot></slot>
    </div>
  </ul>
</template>
<script>
export default {
  name: "subMenu",
  data() {
    return {
      showChild: false
    };
  },
  methods: {
    childState() {
      this.showChild = !this.showChild;
    }
  }
};
</script>
<style lang="less">
.sub-menu {
  color: #fff;
  &-title {
    background: rgb(105, 105, 103);
    position: relative;
    .shrink-icon {
      position: absolute;
      top: 0px;
      right: 10px;
    }
  }
}
</style>
