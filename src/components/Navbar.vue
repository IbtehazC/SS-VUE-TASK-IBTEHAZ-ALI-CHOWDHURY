<template>
  <nav>
    <v-app-bar color="white" elevate-on-scroll>
      <router-link to="/" tag="button">
        <v-toolbar-title class="text-uppercase">
          <span class="font-weight-light">Staff </span>
          <span>Manager</span>
        </v-toolbar-title></router-link
      >
      <v-spacer></v-spacer>
      <router-link to="/" tag="button">
        <v-btn depressed color="white">Home</v-btn>
      </router-link>
      <router-link to="/about" tag="button">
        <v-btn depressed color="white">About</v-btn>
      </router-link>
      <router-link to="/staff" tag="button">
        <v-btn depressed color="white">Staffs</v-btn>
      </router-link>
    </v-app-bar>
  </nav>
</template>
