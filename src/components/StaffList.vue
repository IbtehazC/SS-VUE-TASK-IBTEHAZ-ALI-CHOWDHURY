<template>
  <div style="display: flex; justify: center">
    <div v-for="employee in employees">
      <div>{{ employee.name }}</div>
      <div>{{ employee.email }}</div>
      <div>{{ employee.phone }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StaffList",
  computed: {
    employees() {
      return this.$store.state.employees;
    },
  },
};
</script>
