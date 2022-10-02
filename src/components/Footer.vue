<template>
  <v-footer class="pa-0">
    <v-card
      flat
      tile
      width="100%"
      color="deep-purple lighten-3"
      class="text-center pt-16 pb-4"
    >
      <v-card-title class="justify-center hidden-xs-only text-h2">
        <p>Create a streamlined Work Force</p>
      </v-card-title>
      <v-card-title
        class="justify-center font-weight-bold hidden-sm-and-up text-h4"
      >
        Create a streamlined Work Force
      </v-card-title>
      <v-card-text class="text-h5 hidden-xs-only">
        Give our app a free spin it only takes a few minutes to get used to
      </v-card-text>
      <v-card-text class="hidden-sm-and-up text-subtitle-1">
        Give our app a free spin it only takes a few minutes to get used to
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn class="black mt-4 mb-8" dark x-large to="/staff">Demo App</v-btn>
      </v-card-actions>
      <v-card-text class="text-subtitle-1">
        {{ new Date().getFullYear() }} — <strong>SAYBURGH Solutions</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
