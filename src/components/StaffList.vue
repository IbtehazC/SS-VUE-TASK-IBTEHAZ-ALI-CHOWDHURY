<template>
  <v-container>
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
          <v-avatar size="32" color="grey">
            <v-icon dark>mdi-account-circle</v-icon>
          </v-avatar>
        </template>
      </v-data-table>
    </v-card>

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
          <v-avatar size="32" color="grey">
            <v-icon dark>mdi-account-circle</v-icon>
          </v-avatar>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
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
      ],
    };
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
