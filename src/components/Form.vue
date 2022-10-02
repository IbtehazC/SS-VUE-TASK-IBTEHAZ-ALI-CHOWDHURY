<template>
  <v-row class="justify-center align-center">
    <v-card class="mx-5 my-12" width="380">
      <v-card-title> CREATE {{ type.toUpperCase() }} </v-card-title>
      <v-form
        class="mx-8"
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="handleSubmit"
      >
        <v-text-field
          v-model="staffData.name"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="staffData.email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-select
          v-model="staffData.gender"
          :items="genders"
          :rules="[(v) => !!v || 'Item is required']"
          label="Gender"
          required
        ></v-select>

        <v-text-field
          v-model="staffData.phoneNumber"
          :rules="phoneNumberRules"
          :counter="11"
          label="Phone Number"
          required
        ></v-text-field>

        <v-text-field
          v-model="staffData.jobTitle"
          :rules="jobTitleRules"
          label="Job Title"
          required
        ></v-text-field>

        <v-btn class="my-8" :disabled="!valid" x-large dark color="deep-purple lighten-3" type="submit">
          Submit
        </v-btn>
      </v-form>
    </v-card>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      valid: true,
      staffData: {
        name: "",
        email: "",
        gender: null,
        phoneNumber: "",
        jobTitle: "",
      },
      genders: ["Male", "Female", "I don't want to disclose"],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 30) || "Name must be less than 30 characters",
      ],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phoneNumberRules: [
        (v) => !!v || "Phone Number is required",
        (v) => /^\d+$/.test(v) || "Phone Number must only contain digits",
        (v) =>
          (v && v.length <= 11) ||
          "Phone Number must be less than or equals to 11 digits",
      ],
      jobTitleRules: [(v) => !!v || "Job title is required"],
    };
  },
  props: ["type"],
  methods: {
    ...mapActions(["addStaff"]),
    handleSubmit() {
      this.type[0].toUpperCase;
      const newStaff = { ...this.staffData, type: this.type };
      this.addStaff(newStaff);
    },
  },
};
</script>

<style scoped>
.date {
  width: 100%;
  padding: 8px;
}
</style>
