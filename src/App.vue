<template>
  <div id="app">
    <div id="view" class="section" :class="{ collapsed: isCollapsed }">
      <demo-warning></demo-warning>
      <router-view></router-view>
    </div>
    <sidebar-menu
      :menu="menu"
      :collapsed="true"
      @toggle-collapse="onCollapse()"
    ></sidebar-menu>
  </div>
</template>

<style scoped lang="scss">
#view {
  padding-left: 400px;
  transition: 0.3s ease;
}
#view.collapsed {
  padding-left: 100px;
}
</style>

<script>
import { SidebarMenu } from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import DemoWarning from "@/components/DemoWarning.vue";

export default {
  name: "App",
  components: {
    SidebarMenu,
    DemoWarning,
  },
  data() {
    return {
      isCollapsed: true,
      menu: [
        {
          header: true,
          title: "CIS4250 Topic 2 Project",
          hiddenOnCollapse: true,
        },
        {
          href: { name: "Form" },
          title: "Form",
          icon: "fas fa-pen",
        },
        {
          href: { name: "Template" },
          title: "Template",
          icon: "fas fa-file-pdf",
        },
      ],
    };
  },
  methods: {
    onCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>
