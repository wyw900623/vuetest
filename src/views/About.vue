<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log(from.name);
    next(vm => {
      console.log(vm); //vm为此vue实例
    });
  },
  beforeRouteLeave(to, from, next) {
    const leave = confirm("Are you sure leave?");
    //点击确认跳转页面
    if (leave) next();
    else next(false); //点击否 不跳转
  }
};
</script>
