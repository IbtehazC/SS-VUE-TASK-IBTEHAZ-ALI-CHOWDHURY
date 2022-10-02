<template>
  <v-sheet max-width="1550px" color="#EFEFEF" class="mx-auto">
    <v-container fluid class="px-0">
      <v-row class="my-4 mx-4 justify-start align center">
        <v-card elevation="2" class="my-4 rounded-lg">
          <v-tabs
            v-model="tab"
            class="ml-0 rounded-lg"
            fixed-tabs
            color="deep-purple lighten-3"
          >
            <v-tabs-slider color="deep-purple lighten-3" right></v-tabs-slider>
            <v-tab v-for="item in items" :key="item">
              <span class="text-subtitle-1 font-weight-bold">{{ item }}</span>
            </v-tab>
          </v-tabs>
        </v-card>
      </v-row>
      <v-divider></v-divider>
      <v-row class="my-4 mx-4 justify-space-between align center">
        <p class="my-0 text-subtitle-1 font-weight-bold">No. of Staffs: 100</p>
        <div class="d-flex">
          <router-link to="/create/employee" tag="button">
            <v-btn outlined color="deep-purple lighten-3" large right>
              <v-icon left>mdi-plus</v-icon>Add
            </v-btn>
          </router-link>
          <div class="ml-4">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="deep-purple lighten-3"
                  dark
                  large
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ menuItems[selectedItem] }}
                </v-btn>
              </template>
              <v-list-item-group active-class="border" color="brown">
                <v-list-item v-for="(item, i) in menuItems" :key="i">
                  <v-list-item-content @click="selectedItem = i">
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-menu>
          </div>
        </div>
      </v-row>
      <v-tabs-items class="rounded-lg mx-4" v-model="tab">
        <v-tab-item>
          <StaffsTable v-if="selectedItem == 0" :staffs="admins" />
          <StaffsGrid v-if="selectedItem == 1" :staffs="admins" />
        </v-tab-item>
        <v-tab-item>
          <StaffsList v-if="selectedItem == 0" :staffs="employees" />
          <StaffsGrid v-if="selectedItem == 1" :staffs="employees" />
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapGetters } from "vuex";
import StaffsList from "@/components/StaffsList.vue";
import StaffsGrid from "@/components/StaffsGrid.vue";
import StaffsTable from "@/components/StaffsTable.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      tab: null,
      selectedItem: 0,
      items: ["admin", "employee"],
      menuItems: ["Table View", "Grid View"],
      isTableView: true,
    };
  },
  computed: {
    ...mapGetters({
      employees: "getEmployees",
      admins: "getAdmins",
    }),
  },
  methods: {
    setTableView(bool) {},
  },
  components: { StaffsList, StaffsGrid, StaffsTable },
};
</script>
