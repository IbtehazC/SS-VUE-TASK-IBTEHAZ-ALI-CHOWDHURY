<template>
  <v-app>
    <!-- <NavigationDrawer /> -->
    <Navbar />
    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: { Navbar, Footer },
};
</script>
