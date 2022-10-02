<template>
  <v-row class="justify-center">
    <v-sheet class="mx-5 mt-9 pa-8 rounded-lg elevation-2">
      <v-row class="mx-0">
        <v-col cols="12" sm="6" align-self="start" class="justify-start px-0">
          <p class="text-subtitle-1 ma-0">PROFILE IMAGE</p>
          <v-row class="justify-start ma-0">
            <v-avatar size="160" tile color="grey" class="my-4">
              <v-img class="elevation-6" alt="" :src="staff.img"></v-img>
            </v-avatar>
          </v-row>
          <v-file-input
            v-if="editMode"
            accept="image/png, image/jpeg, image/bmp"
            prepend-icon="mdi-camera"
            label="Profile Picture"
            @change="saveImg"
            solo
            flat
          ></v-file-input>
        </v-col>
        <v-col sm="6" class="px-0" align-self="start">
          <v-list-item color="#0000" class="pt-0 px-0">
            <v-list-item-content>
              <p class="text-subtitle-1">ROLE</p>
              <v-select
                v-model="staff.type"
                class="text-h6 px-0"
                prepend-icon="mdi-account-badge"
                :items="employeeTypes"
                :solo="!editMode"
                flat
                :readonly="!editMode"
                :filled="editMode"
              ></v-select>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
      <v-row class="ma-0">
        <v-col sm="6" class="px-0" cols="12">
          <p class="my-0 caption">NAME</p>
          <v-text-field
            v-model="staff.name"
            class="text-h6 px-0"
            prepend-icon="mdi-account-edit"
            :rules="nameRules"
            :solo="!editMode"
            flat
            :readonly="!editMode"
            :filled="editMode"
          ></v-text-field>
          <p class="my-0 caption">JOB</p>
          <v-text-field
            v-model="staff.jobTitle"
            class="text-h6"
            :rules="jobTitleRules"
            prepend-icon="mdi-briefcase"
            :solo="!editMode"
            flat
            :readonly="!editMode"
            :filled="editMode"
          ></v-text-field>
          <p class="my-0 caption">EMAIL</p>
          <v-text-field
            v-model="staff.email"
            :rules="emailRules"
            class="text-h6"
            prepend-icon="mdi-email"
            :solo="!editMode"
            flat
            :readonly="!editMode"
            :filled="editMode"
          ></v-text-field>
        </v-col>
        <v-col sm="6" class="px-0" cols="12">
          <p class="my-0 caption">PHONE NUMBER</p>
          <v-text-field
            v-model="staff.phoneNumber"
            class="text-h6 ma-0"
            :rules="phoneNumberRules"
            prepend-icon="mdi-phone"
            :solo="!editMode"
            flat
            :readonly="!editMode"
            :filled="editMode"
          ></v-text-field>
          <p class="my-0 caption">GENDER</p>
          <v-select
            v-model="staff.gender"
            class="text-h6 px-0"
            :rules="[(v) => !!v || 'Item is required']"
            prepend-icon="mdi-gender-transgender"
            :items="genders"
            :solo="!editMode"
            flat
            :readonly="!editMode"
            :filled="editMode"
          ></v-select>
        </v-col>
      </v-row>
      <v-btn x-large @click="save" class="my-4" dark color="black">
        <v-icon size="16" class="mr-2"> mdi-pencil </v-icon>
        {{ editMode ? "SAVE" : "EDIT" }}
      </v-btn>
      <v-btn x-large color="red" class="ml-4" dark @click.stop="dialog = true">
        Delete
      </v-btn>
      <v-dialog v-model="dialog" max-width="290">
        <v-card>
          <v-card-title class="text-h5">
            Are you sure you want to delete {{ staff.name }}'s entry?
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="deleteStaff(staff.id)">
              Agree
            </v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">
              Disagree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-sheet>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      genders: ["Male", "Female"],
      editMode: false,
      employeeTypes: ["admin", "employee"],
      staff: {
        id: "",
        img: "",
        name: "",
        email: "",
        phoneNumber: "",
        jobTitle: "",
        gender: "",
        type: "employee",
      },
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
      dialog: false,
    };
  },
  props: ["id"],
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
    save() {
      this.editMode = !this.editMode;
      if (!this.editMode && this.validate()) {
        alert("Saved successfully");
        this.$store.dispatch("editStaff", this.staff);
      }
    },
    saveImg(img) {
      if (img) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          this.staff.img = reader.result;
        });
        reader.readAsDataURL(img);
      }
    },
    deleteStaff(id) {
      alert("Deleted successfully");
      this.$store.dispatch("deleteStaff", id);
      this.$router.push({
        name: "staff",
      });
    },
  },
  created() {
    this.$store
      .dispatch("getStaffById", this.$route.params.id)
      .then((staff) => (this.staff = staff));
  },
};
</script>

<style>
.upload-btn {
  position: absolute !important;
  z-index: 999;
  top: 0;
  left: 120px;
  color: cadetblue;
  background: blueviolet;
  background: rgb(125, 198, 163);
  background: linear-gradient(
    50deg,
    rgba(125, 198, 163, 1) 0%,
    rgba(35, 216, 227, 1) 72%
  );
}

.avatar-shadow {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}
</style>
