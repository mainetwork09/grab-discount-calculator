<template>
  <v-app id="inspire">
    <Drawer :color="color" />

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer :color="color">
      <span class="white--text">&copy; {{ copyright_year }} by Craftsmancoder.com</span>
    </v-footer>
  </v-app>
</template>

<script>
import Drawer from "./components/Drawer";

export default {
  components: {
    Drawer
  },
  data: () => ({
    color: "klaharn",
    copyright_year: new Date().getFullYear()
  })
};
</script>