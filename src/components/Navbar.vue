<template>
  <v-app-bar dark color="deep-purple lighten-3" app elevate-on-scroll>
    <v-toolbar-title>
      <router-link style="text-decoration: none; color: white" to="/">
        StaffM
      </router-link>
    </v-toolbar-title>
    <v-spacer />

    <v-toolbar-items class="hidden-sm-and-up">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            depressed
            color="deep-purple lighten-3"
            dark
            v-bind="attrs"
            v-on="on"
          >
            Menu
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            router
            :to="item.link"
          >
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item> </v-list
      ></v-menu>
    </v-toolbar-items>

    <v-toolbar-items class="hidden-xs-only">
      <v-btn depressed color="deep-purple lighten-3" to="/">Home</v-btn>
      <v-btn
        depressed
        class="py-2"
        dark
        color="deep-purple lighten-3"
        to="/staff"
        >Demo App</v-btn
      >
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Home", link: "/" },
        { title: "Try Out", link: "/staff" },
      ],
    };
  },
};
</script>
