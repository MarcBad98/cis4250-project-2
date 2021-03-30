<template>
  <div>
    <p class="subtitle">Signature</p>
    <hr />
    <b-notification
      type="is-warning"
      has-icon
      icon="exclamation-triangle"
      :closable="false"
    >
      <strong>Warning</strong>
      <br />
      Please note that any attempt to mislead may result in prosecution.
    </b-notification>
    <div class="box has-background-light">
      <p>
        I confirm that I have read and understood the terms of this subject
        access form and certify that the information given in this application
        to ______________ is true. I understand that it is necessary for
        ______________ to confirm my/the data subject’s identity and it may be
        necessary to obtain more detailed information in order to locate the
        correct personal data.
      </p>
      <p><strong>Date</strong>: {{ currentDate }}</p>
      <div class="buttons">
        <b-button
          label="Sign (Digital Signature)"
          type="is-info"
          @click="sign()"
        ></b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GPDRForm5",
  computed: {
    currentDate() {
      return new Date().toLocaleDateString();
    },
  },
  methods: {
    sign() {
      this.$buefy.snackbar.open(
        "You have successfully signed this request form!"
      );
      this.$store.state.hasSigned = true;
    },
  },
};
</script>
