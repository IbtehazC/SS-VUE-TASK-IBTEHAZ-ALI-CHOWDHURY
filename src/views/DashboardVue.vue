<template>
  <v-container fluid>
    <v-row class="ma-4">
      <v-card elevation="2" class="my-2 rounded-lg">
        <v-tabs v-model="tab" class="ml-0 rounded-lg" fixed-tabs color="brown">
          <v-tabs-slider color="brown" right></v-tabs-slider>
          <v-tab v-for="item in items" :key="item">
            <span class="text-subtitle-2 font-weight-bold">{{ item }}</span>
          </v-tab>
        </v-tabs>
      </v-card>
    </v-row>
    <v-divider></v-divider>
    <v-row class="ma-4 justify-space-between">
      <v-col>
        <v-text class="my-0">No. of Staffs: 100</v-text>
      </v-col>
      <v-col>
        <router-link to="/create/employee" tag="button">
          <v-btn outlined color="brown" large right>
            <v-icon left>mdi-plus</v-icon>Add
          </v-btn>
        </router-link>
        <v-menu key="text" rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <v-btn
              large
              color="brown"
              class="white--text ml-4"
              v-bind="attrs"
              v-on="on"
            >
              Table View
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="item in menuItems" :key="item" link>
              <v-list-item-title v-text="item"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <v-row class="ma-4">
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <StaffsList :staffs="admins" />
        </v-tab-item>
        <v-tab-item>
          <StaffsList :staffs="employees" />
        </v-tab-item>
      </v-tabs-items>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import StaffsList from "@/components/StaffsList.vue";
import StaffsGrid from "@/components/StaffsGrid.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      tab: null,
      items: ["admin", "employee"],
      menuItems: ["Table View", "Grid View"],
    };
  },
  computed: {
    ...mapGetters({
      employees: "getEmployees",
      admins: "getAdmins",
    }),
  },
  components: { StaffsList, StaffsGrid, StaffsList, StaffsList },
};
</script>
