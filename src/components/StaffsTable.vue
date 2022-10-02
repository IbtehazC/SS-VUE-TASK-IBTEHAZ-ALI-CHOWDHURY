<template>
  <v-data-table
    :headers="headersForStaff"
    :items="staffs"
    :items-per-page="5"
    class="rounded"
    hide-default-header
  >
    <template v-slot:header="{ props: { headers } }">
      <thead class="my-8">
        <tr>
          <th v-for="h in headersForStaff">
            <p class="text-subtitle-2 font-weight-bold my-4">
              {{ h.text }}
            </p>
          </th>
        </tr>
      </thead>
    </template>
    <template v-slot:item.img="{ item }">
      <v-avatar size="32" color="grey" class="my-4">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
    </template>
    <template v-slot:item.name="{ item }">
      <div class="text-body-2 font-weight-medium">
        {{ item.name }}
      </div>
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
      <v-icon size="20" @click="goToEmployeePage(item)"> mdi-pencil </v-icon>
      <v-icon size="20" @click="deleteStaff(item.id)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "StaffsTable",
  data() {
    return {
      headersForStaff: [
        {
          text: "",
          align: "start",
          value: "img",
        },
        {
          text: "Name",
          value: "name",
        },
        { text: "Job", value: "jobTitle", sortable: false },
        { text: "Email", value: "email" },
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
  },
};
</script>
