<template>
  <div>
    <p class="subtitle">Your Information</p>
    <hr />
    <b-field label="Full Name">
      <b-input v-model="$store.state.user.fullName"></b-input>
    </b-field>
    <b-field label="Address">
      <b-input v-model="$store.state.user.address"></b-input>
    </b-field>
    <b-field label="Contact Telephone Number">
      <b-input v-model="$store.state.user.telephone"></b-input>
    </b-field>
    <b-field label="Email Address">
      <b-input v-model="$store.state.user.email"></b-input>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "GPDRForm1",
};
</script>
