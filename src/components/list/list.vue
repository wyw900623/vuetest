<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="`item_${index}`">
        <slot :number="item.number"></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "list",
  props: {
    list: {
      type: Array,
      default: () => []
    },
    render: {
      type: Function,
      default: () => {}
    }
  }
};
</script>
<style>
ul,
li {
  text-align: left;
}
</style>
