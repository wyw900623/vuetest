<template>
  <div>
    <!-- 获得子组件AInput中this.$emit("input", value)的值
        添加handleInput方法
    -->
    <a-input @input="handleInput" />

    <!-- handleInput方法把值传给inputValue
        通过:content传给AShow子组件
    -->
    <a-show :content="inputValue" />

    <p>myName: {{myName}}</p>
    <p>myNameNew:{{myNameNew}}</p>
    <p>userName: {{userName}}</p>
    <p>Ver:{{verison}}</p>
    <button @click="ChangeNewName">更改Name</button>
  </div>
</template>
<script>
import AInput from "_c/AInputs.vue";
import AShow from "_c/AShow.vue";
import { mapState, mapGetters } from "vuex"; //vuex配套方法二引入
export default {
  name: "store",
  data() {
    return {
      inputValue: ""
    };
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    //方法一
    // myName() {
    //   return this.$store.state.myName;
    // },
    userName() {
      return this.$store.state.user.userName;
    },
    //方法二
    // ...mapState({
    //   myName: state => state.myName,
    //   userName: state => state.user.userName
    // }),
    ...mapState(["myName", "verison"]),
    // myNameNew() {
    //   return this.$store.getters.myNameNew;
    // },
    ...mapGetters(["myNameNew"])

    //store getters方法的值
  },
  methods: {
    handleInput(val) {
      this.inputValue = val;
    },
    ChangeNewName() {
      this.$store.commit({
        type: "SET_NEW_NAME",
        myName: "newName"
      });
    }
  }
};
</script>
