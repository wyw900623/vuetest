<template>
  <div>
    <p>email</p>
    <button @click="handleClick">点击传给tel.vue</button>
  </div>
</template>
<script>
export default {
  mounted() {},
  methods: {
    handleClick() {
      this.$bus.$emit("to-value", "传给tel.vue的值");
    }
  }
};
</script>
