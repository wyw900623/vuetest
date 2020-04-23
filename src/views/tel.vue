<template>
  <div>
    tel：
    <span>{{message}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    this.$bus.$on("to-value", mes => {
      this.message = mes;
    });
  }
};
</script>
