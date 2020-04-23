<template>
  <div>
    <slot name="left"></slot>
    <span :id="eleId" ref="count"></span>
    <slot name="right"></slot>
  </div>
</template>
<script>
// import CountUp from "countup";
import { CountUp } from "countup.js";
export default {
  name: "CountTo",
  computed: {
    eleId() {
      return "count_up_" + this._uid;
    }
  },
  data() {
    return {
      counter: {}
    };
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      default: 2
    }
  },
  watch: {
    endVal(newNum, oldNum) {
      this.counter.update(newNum);
    }
  },
  methods: {
    getCount() {
      console.log(this.$refs.count.innerHTML);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.endVal, {
        startVal: this.startVal,
        duration: this.duration
      });
      setTimeout(() => {
        this.counter.start();
      }, 100);
    });
  }
};
</script>
