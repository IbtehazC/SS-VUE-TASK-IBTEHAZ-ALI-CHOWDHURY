<template>
  <v-row class="grey lighten-3 justify-center">
    <v-card
      width="270"
      v-for="staff in staffs"
      :key="staff.id"
      class="mx-4 justify-center py-2 my-8 rounded-lg elevation-2"
    >
      <v-card-actions class="justify-end">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list class="pa-0 ma-0">
            <v-list-item class="pa-0 ma-0">
              <v-btn
                block
                depressed
                color="white"
                @click="goToEmployeePage(staff)"
                >Edit</v-btn
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-card-actions>
      <div class="text-center my-2">
        <v-avatar size="80" center>
          <v-img :src="staff.img"></v-img>
        </v-avatar>
      </div>
      <v-card-title class="justify-center">
        <router-link style="text-decoration: none; color: black" :to="`/staff/${staff.id}`">
          <div class="text-body-1 font-weight-medium links_table">
            {{ staff.name }}
          </div>
        </router-link>
      </v-card-title>
      <v-card-text class="grey--text text-center py-2">
        {{ staff.jobTitle }}
      </v-card-text>
      <v-card-text>
        <v-card class="elevation-0 brown lighten-5" outlined>
          <v-card-text class="py-2 px-1 text-center">
            <v-icon size="20" class="mr-2">mdi-email</v-icon>
            {{ staff.email }}
          </v-card-text>
          <v-divider />
          <v-card-text class="py-2 px-1 text-center">
            <v-icon size="20" class="mr-2">mdi-phone</v-icon>
            {{ staff.phoneNumber }}
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "StaffsGrid",
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
      items: [{ title: "Edit" }, { title: "Delete" }],
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
