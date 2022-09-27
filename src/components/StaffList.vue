<template>
  <div class="container">
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

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  gap: 16px;
}
</style>
