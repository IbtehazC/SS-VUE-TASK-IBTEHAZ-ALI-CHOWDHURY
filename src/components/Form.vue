<template>
  <v-row class="justify-center align-center">
    <v-card class="mx-5 my-12" width="380">
      <v-card-title> CREATE {{ type.toUpperCase() }} </v-card-title>
      <v-form class="mx-8" ref="form" v-model="valid" lazy-validation>
        <v-row class="justify-center">
          <v-avatar size="80" color="grey" class="my-4">
            <v-img class="elevation-6" alt="" :src="imgUrl"></v-img>
          </v-avatar>
        </v-row>
        <v-file-input
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon="mdi-camera"
          label="Profile Picture"
          @change="saveImg"
        ></v-file-input>
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

        <v-btn
          class="mr-4 mt-4 mb-8"
          color="deep-purple lighten-3"
          :disabled="!valid"
          :loading="loading"
          x-large
          @click="handleSubmit"
        >
          Submit
        </v-btn>
        <v-snackbar color="red" v-model="showSnackbar">
          User with email {{ staffData.email }} already exists
          <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="showSnackbar = false">
              <v-icon fab>mdi-close-circle</v-icon>
            </v-btn>
          </template>
        </v-snackbar>
      </v-form>
    </v-card>
  </v-row>
</template>

<script>
import { uuid } from "vue-uuid";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      valid: true,
      showSnackbar: false,
      isSuccess: false,
      loading: false,
      staffData: {
        name: "",
        email: "",
        gender: null,
        phoneNumber: "",
        jobTitle: "",
      },
      imgUrl: "",
      genders: ["Male", "Female"],
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
    validate() {
      return this.$refs.form.validate();
    },
    ...mapActions(["addStaff"]),
    saveImg(img) {
      if (img) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          this.imgUrl = reader.result;
        });
        reader.readAsDataURL(img);
      }
      this.imgUrl = "";
    },
    handleSubmit() {
      const valid = this.validate();
      if (valid) {
        const staff = this.$store.getters.getStaffByEmail(this.staffData.email);
        if (!staff) {
          this.isSuccess = true;
        }
        if (this.isSuccess) {
          const newStaff = {
            ...this.staffData,
            type: this.type,
            img: this.imgUrl,
            id: uuid.v4(),
          };
          this.addStaff(newStaff);
          this.showSnackbar = true;
          this.navigateToStaffPage();
        }
        this.showSnackbar = true;
      }
    },
    navigateToStaffPage() {
      this.$router.push("/staff");
      this.showSnackbar = false;
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
