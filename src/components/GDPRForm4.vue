<template>
  <div>
    <p class="subtitle">Data to Erase</p>
    <hr />
    <p>
      Please describe the information you wish to erase. Please provide any
      relevant details you think will help us to identify the information.
      Providing the URL for each link you wish to be removed would be helpful.
    </p>
    <p>
      Also, please explain, if it is not abundantly clear, why the linked page
      is about you or the person you are representing on this form.
    </p>
    <b-field>
      <b-input
        v-model="$store.state.erasure"
        type="textarea"
        :disabled="hasSigned"
      ></b-input>
    </b-field>
    <b-notification
      type="is-info"
      has-icon
      icon="info-circle"
      :closable="false"
    >
      <strong>Note</strong>
      <br />
      Please note that. In certain circumstances, where erasure would adversely
      affect the freedom of expression, contradict a legal obligation, act
      against the public interest in the area of public health, act against the
      public interest in the area of scientific or historical research, or
      prohibit the establishment of a legal defense or exercise of other legal
      claims, we may not be able to erase the information you requested in
      accordance with article 17(3) of the GDPR. In such cases you will be
      informed promptly and given full reasons for that decision.
    </b-notification>
    <b-notification
      type="is-warning"
      has-icon
      icon="exclamation-triangle"
      :closable="false"
    >
      <strong>Warning</strong>
      <br />
      While in most cases we will be happy to erase the personal data you
      request, we nevertheless reserve the right, in accordance with Article
      12(5) of the GDPR, to charge a fee or refuse the request if it is
      considered to be “manifestly unfounded or excessive.” However we will make
      every effort to provide you with the erasure of your personal data if
      suitable.
    </b-notification>
  </div>
</template>

<script>
export default {
  name: "GPDRForm4",
  computed: {
    hasSigned() {
      return this.$store.state.hasSigned;
    },
  },
};
</script>
