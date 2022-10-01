<template>
  <div>
    <v-app-bar color="white" elevate-on-scroll>
      <v-toolbar-title>Staff Management</v-toolbar-title>
      <v-spacer />

      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer">Menu</v-btn>
      </span>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/">Home</v-btn>
        <v-btn to="/about">About</v-btn>
        <v-btn to="/staff">Staff</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title">
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
        { title: "Try Out", link: "/staff" },
      ],
    };
  },
};
</script>
