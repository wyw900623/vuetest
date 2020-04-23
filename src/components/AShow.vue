<template>
  <div>AShow: {{content}}</div>
</template>
<script>
export default {
  props: {
    //接收store父组件的content值
    content: {
      type: [String, Number],
      default: ""
    }
  }
};
</script>
