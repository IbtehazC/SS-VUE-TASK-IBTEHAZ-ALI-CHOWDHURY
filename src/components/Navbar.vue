<template>
  <v-app-bar dark color="deep-purple lighten-3" elevate-on-scroll>
    <v-toolbar-title class="text-h6">STAFF Management</v-toolbar-title>
    <v-spacer />

    <v-toolbar-items class="hidden-sm-and-up">
      <v-btn
        depressed
        color="deep-purple lighten-3"
        @click.stop="drawer = !drawer"
        >Menu</v-btn
      >
    </v-toolbar-items>

    <v-toolbar-items class="hidden-xs-only">
      <v-btn depressed color="deep-purple lighten-3" to="/">Home</v-btn>
      <v-btn
        depressed
        class="py-2"
        dark
        color="deep-purple lighten-3"
        to="/staff"
        >Demo</v-btn
      >
    </v-toolbar-items>
  </v-app-bar>
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
