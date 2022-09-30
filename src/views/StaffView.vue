<template>
  <StaffDetails />
</template>

<script>
import StaffDetails from "@/components/StaffDetails.vue";

export default {
  name: "StaffView",
  components: {
    StaffDetails,
  },
  props: ["id"],
};
</script>
