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
    <v-app-bar app :color="color" dark min-height="80" hide-on-scroll="true">
      <v-toolbar-title>
        <img src="https://via.placeholder.com/165x70?text=JibJib" width="165" alt />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu right bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
          icon: "mdi-calculator",
          title: "Calculator",
          link: "/"
        },
        {
          icon: "mdi-information-outline",
          title: "About",
          link: "/about"
        }
      ]
    };
  }
};
</script>