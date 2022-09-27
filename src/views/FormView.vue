<template>
  <Form :type="type" />
</template>

<script>
import Form from "@/components/Form.vue";

export default {
  props: ["type"],
  components: {
    Form,
  },
};
</script>
