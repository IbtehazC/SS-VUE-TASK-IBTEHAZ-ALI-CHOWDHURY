<template>
  <div>
    <v-app-bar color="deep-purple lighten-3" elevate-on-scroll>
      <v-toolbar-title class="text-h6">STAFF Management</v-toolbar-title>
      <v-spacer />

      <span class="hidden-sm-and-up">
        <v-btn
          depressed
          color="deep-purple lighten-3"
          @click.stop="drawer = !drawer"
          >Menu</v-btn
        >
      </span>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn depressed color="deep-purple lighten-3" to="/">Home</v-btn>
        <v-btn
          x-large
          class="py-2"
          dark
          color="black"
          to="/staff"
          >TRY OUR APP</v-btn
        >
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
        { title: "Try Out", link: "/staff" },
      ],
      name: "staff",
      isApp: this.name === this.$route.name ? truth : false,
    };
  },
};
</script>
