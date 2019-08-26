<template>
<div>
  <v-navigation-drawer v-model="toogle_drawer" app>
    <v-list dense nav>
      <v-list-item v-for="menu in menuLists" :key="menu.link" :to="menu.link">
        <v-list-item-action>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar
      app
      :color="color"
      dark
    >
      <v-app-bar-nav-icon @click.stop="toogle_drawer = !toogle_drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>GrabFood Discount Calculator (Beta 2)</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    props: {
      color: String
    },
    data() {
      return {
        toogle_drawer: false,
        menuLists: [
          {
            icon: 'mdi-calculator',
            title: "Calculator",
            link: "/"
          },
          {
            icon: 'mdi-information-outline',
            title: "About",
            link: "/about"
          },
        ]
      }
    }
  }
</script>