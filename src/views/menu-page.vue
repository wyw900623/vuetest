<template>
  <div class="menu_m">
    <!-- <menu-box>
      <menu-item>1</menu-item>
      <sub-menu>
        <div slot="title">2</div>
        <menu-item>2-1</menu-item>
        <menu-item>2-2</menu-item>
      </sub-menu>
    </menu-box>-->
    <menu-box>
      <template v-for="(item,index) in list">
        <menu-item v-if="!item.children" :key="index">{{item.title}}}</menu-item>
        <re-submenu v-else :key="index" :parent="item"></re-submenu>
      </template>
    </menu-box>
  </div>
</template>
<script>
import MenuComponents from "_c/menu";
import ReSubmenu from "./re-submenu.vue";
const { MenuBox, MenuItem, SubMenu } = MenuComponents;
export default {
  components: {
    MenuBox,
    MenuItem,
    SubMenu,
    ReSubmenu
  },
  data() {
    return {
      list: [
        {
          title: "1111"
        },
        {
          title: "2222"
        },
        {
          title: "3333",
          children: [
            {
              title: "3333-1"
            },
            {
              title: "3333-2",
              children: [
                {
                  title: "3333-2-1"
                },
                {
                  title: "3333-2-2"
                },
                {
                  title: "3333-2-3",
                  children: [
                    {
                      title: "3333-2-3-1"
                    },
                    {
                      title: "3333-2-3-2"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>
<style>
.menu_m {
  width: 400px;
  height: 400px;
}
</style>
