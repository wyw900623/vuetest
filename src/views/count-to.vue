<template>
  <div>
    <count-to :endVal="endNum" ref="aaa">
      <span slot="left">总金额：</span>
      <span slot="right">元</span>
    </count-to>
    <button @click="countUp">更新</button>
    <button @click="countNum">状态按钮</button>
  </div>
</template>
<script>
import CountTo from "@/components/count-to";
export default {
  name: "Count-to",
  components: {
    CountTo
  },
  data() {
    return {
      endNum: 100
    };
  },
  methods: {
    countUp() {
      this.endNum += Math.random() * 10;
    },
    countNum() {
      this.$refs.aaa.getCount();
    }
  }
};
</script>
