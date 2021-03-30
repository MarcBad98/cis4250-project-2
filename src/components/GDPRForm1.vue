<template>
  <div>
    <p class="subtitle">Your Information</p>
    <hr />
    <b-field label="Full Name">
      <b-input
        v-model="$store.state.user.fullName"
        :disabled="hasSigned"
      ></b-input>
    </b-field>
    <b-field label="Address">
      <b-input
        v-model="$store.state.user.address"
        :disabled="hasSigned"
      ></b-input>
    </b-field>
    <b-field label="Contact Telephone Number">
      <b-input
        v-model="$store.state.user.telephone"
        :disabled="hasSigned"
      ></b-input>
    </b-field>
    <b-field label="Email Address">
      <b-input
        v-model="$store.state.user.email"
        :disabled="hasSigned"
      ></b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "GPDRForm1",
  computed: {
    hasSigned() {
      return this.$store.state.hasSigned;
    },
  },
};
</script>
