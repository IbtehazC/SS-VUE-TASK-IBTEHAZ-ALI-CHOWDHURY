<template>
  <v-app>
    <!-- <NavigationDrawer /> -->
    <Navbar />
    <v-main class="grey lighten-3">
      <div class="d-flex">
        <NavigationDrawer  />
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { Navbar, Footer, NavigationDrawer, NavigationDrawer },
};
</script>
