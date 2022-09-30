<template>
  <v-footer v-bind="localAttrs" :padless="padless">
    <v-card
      flat
      tile
      width="100%"
      class="brown brown darken-2 text-center white--text"
    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px" color="white">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-linkedin", "mdi-github"],
  }),
};
</script>
