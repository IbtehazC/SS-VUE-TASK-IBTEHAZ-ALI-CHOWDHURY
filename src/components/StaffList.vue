<template>
  <v-card>
    <v-tabs v-model="tab" align-with-title>
      <v-tabs-slider color="grey" right></v-tabs-slider>
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card elevation="2">
          <v-card-title>
            <span>Admin</span>
            <v-spacer></v-spacer>
            <router-link to="/create/admin" tag="button">
              <v-btn outlined color="indigo">
                <v-icon left>mdi-plus</v-icon>Add
              </v-btn>
            </router-link>
          </v-card-title>
          <v-data-table
            :headers="headersForAdmin"
            :items="admins"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.img="{ img }">
              <v-avatar size="32" color="grey" class="my-4">
                <v-icon dark>mdi-account-circle</v-icon>
              </v-avatar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon size="20" class="mr-2" @click="goToEmployeePage(item)">
                mdi-pencil
              </v-icon>
              <v-icon size="20" @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card elevation="2">
          <v-card-title>
            <span>Employee</span>
            <v-spacer></v-spacer>
            <router-link to="/create/employee" tag="button">
              <v-btn outlined color="indigo">
                <v-icon left>mdi-plus</v-icon>Add
              </v-btn>
            </router-link>
          </v-card-title>
          <v-data-table
            :headers="headersForEmployee"
            :items="employees"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.img="{ img }">
              <v-avatar size="32" color="grey" class="my-4">
                <v-icon dark>mdi-account-circle</v-icon>
              </v-avatar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon size="20" class="mr-2" @click="goToEmployeePage(item)">
                mdi-pencil
              </v-icon>
              <v-icon size="20" @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  name: "StaffList",
  data() {
    return {
      headersForAdmin: [
        {
          text: "",
          align: "start",
          value: "img",
        },
        {
          text: "Name",
          value: "name",
        },
        { text: "Email", value: "email" },
        { text: "Phone Number", value: "phoneNumber" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      headersForEmployee: [
        {
          text: "",
          align: "start",
          value: "img",
        },
        {
          text: "Name",
          value: "name",
        },
        { text: "Email", value: "email" },
        { text: "Phone Number", value: "phoneNumber" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      tab: null,
      items: ["admin", "employee"],
    };
  },
  methods: {
    goToEmployeePage(staff) {
      this.$router.push({
        name: "staffDetails",
        params: { id: staff.id, staff: staff },
      });
    },
  },
  computed: {
    employees() {
      return this.$store.state.employees;
    },
    admins() {
      return this.$store.state.admins;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  gap: 16px;
}
</style>
