<template>
  <div class="home">
    <button @click="handClick('back')">上一页</button>
    <button @click="handClick('push')">跳转parent</button>
    <button @click="handClick('replace')">跳转parent</button>
    <button @click="getInfo">请求数据</button>
    <p>{{food}}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getUserInfo } from "@/api/user";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  props: {
    //router.js----home---props
    food: {
      type: String,
      default: "apple"
    }
  },
  methods: {
    handClick(type) {
      if (type == "back") {
        //this.$router.go(-1);
        this.$router.back();
      } else if (type == "push") {
        this.$router.push({
          name: "argu",
          params: {
            name: "sylvia"
          }
        });
      } else if (type == "replace") {
        this.$router.replace("/parent");
      }
    },
    getInfo() {
      getUserInfo({ userId: 21 }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
