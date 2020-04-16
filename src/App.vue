<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>

    <!-- 方法一 -->
    <!-- <transition-group name="routerEffect">
      <router-view key="default" />
      <router-view name="email" key="email" />
      <router-view name="tel" key="tel" />
    </transition-group>-->

    <!-- 方法二一 -->
    <transition-group :name="routerEffect">
      <router-view key="default" />
      <router-view name="email" key="email" />
      <router-view name="tel" key="tel" />
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routerEffect: ""
    };
  },
  watch: {
    /**
     * 如果需要为某个页面单独设置动效
     * 根据url参数添加页面进入动效  ?transitionName=routerEffect
     */
    $route(to) {
      if (to.query && to.query.transitionName) {
        this.routerEffect = to.query.transitionName;
      }
    }
  }
};
</script>
<style lang="less">
//路由动画  进入  对应routerEffect
.routerEffect-enter {
  opacity: 0;
}
.routerEffect-active {
  transition: opacity 1s ease;
}
.routerEffect-to {
  opacity: 1;
}

//路由动画  离开  对应routerEffect
.routerEffect-leave {
  opacity: 1;
}
.routerEffect-leave-active {
  transition: opacity 1s ease;
}
.routerEffect-leave-to {
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
