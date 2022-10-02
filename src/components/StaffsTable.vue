<template>
  <v-data-table
    :search="search"
    :headers="headersForStaff"
    :items="staffs"
    :items-per-page="5"
    :custom-filter="filterOnlyText"
  >
    <template v-slot:top>
      <v-text-field v-model="search" label="Search" class="mx-4"></v-text-field>
    </template>
    <template v-slot:item.img="{ item }">
      <v-avatar v-if="item.img != null" size="48" color="grey" class="my-4">
        <v-img class="elevation-6" alt="" :src="item.img"></v-img>
      </v-avatar>
      <v-avatar v-else size="48" color="grey" class="my-4">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
    </template>
    <template v-slot:item.name="{ item }">
      <router-link style="text-decoration: none; color: black" :to="`/staff/${item.id}`">
        <div class="text-body-1 font-weight-medium links_table">
          {{ item.name }}
        </div>
      </router-link>
    </template>
    <template v-slot:item.jobTitle="{ item }">
      <div class="text-body-2">{{ item.jobTitle }}</div>
    </template>
    <template v-slot:item.email="{ item }">
      <div class="text-body-2">{{ item.email }}</div>
    </template>
    <template v-slot:item.phoneNumber="{ item }">
      <div class="text-body-2">{{ item.phoneNumber }}</div>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="20" @click="goToEmployeePage(item)" class="mx-2">
        mdi-pencil
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "StaffsTable",
  data() {
    return {
      search: "",
      headersForStaff: [
        {
          text: "Profile Picture",
          align: "center",
          value: "img",
          sortable: false,
        },
        {
          text: "Name",
          value: "name",
        },
        { text: "Job", value: "jobTitle" },
        { text: "Email", value: "email", sortable: false },
        { text: "Phone Number", value: "phoneNumber", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
    };
  },
  props: ["staffs"],
  methods: {
    goToEmployeePage(staff) {
      this.$router.push({
        name: "staffDetails",
        params: { id: staff.id, staff: staff },
      });
    },
    ...mapActions(["deleteStaff"]),
    check(item) {
      console.log(item);
    },
    filterOnlyText(value, search, item) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value.toString().indexOf(search) !== -1
      );
    },
  },
};
</script>
