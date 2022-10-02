<template>
  <v-layout v-resize="onResize" class="rounded-lg" column>
    <v-data-table
      :headers="headersForStaff"
      :items="staffs"
      :search="search"
      :sort-by="['name']"
      class="rounde-lg"
    >
      <template slot="items" slot-scope="props">
        <tr>
          <td>{{ item.img }}</td>
          <td class="text-xs-right">{{ item.name }}</td>
          <td class="text-xs-right">{{ item.jobTitle }}</td>
          <td class="text-xs-right">{{ item.email }}</td>
          <td class="text-xs-right">{{ item.phoneNumber }}</td>
          <td class="text-xs-right"></td>
        </tr>
      </template>
      <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "StaffsList",
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
      selected: [],
      search: "",
      isMobile: false,
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
