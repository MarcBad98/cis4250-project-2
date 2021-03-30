<template>
  <div>
    <p class="subtitle">The Data Subject's Information</p>
    <hr />
    <p>
      Please tick the appropriate box and read the instructions which follow it.
    </p>
    <b-field>
      <b-radio
        v-model="$store.state.dataSubject.isUser"
        :native-value="true"
        :disabled="hasSigned"
      >
        <strong>YES</strong>: I am the data subject. I enclose proof of my
        identity (see below).
      </b-radio>
    </b-field>
    <b-field>
      <b-radio
        v-model="$store.state.dataSubject.isUser"
        :native-value="false"
        :disabled="hasSigned"
      >
        <strong>NO</strong>: I am acting on behalf of the data subject. I have
        enclosed the data subject’s written authority and proof of the data
        subject’s identity and my own identity (see below).
      </b-radio>
    </b-field>
    <b-collapse :open="!$store.state.dataSubject.isUser" animation="slide">
      <div class="box has-background-light">
        <p>Please enter the data subject's information below.</p>
        <b-field label="Full Name">
          <b-input
            v-model="$store.state.dataSubject.fullName"
            :disabled="hasSigned"
          ></b-input>
        </b-field>
        <b-field label="Address">
          <b-input
            v-model="$store.state.dataSubject.address"
            :disabled="hasSigned"
          ></b-input>
        </b-field>
        <b-field label="Contact Telephone Number">
          <b-input
            v-model="$store.state.dataSubject.telephone"
            :disabled="hasSigned"
          ></b-input>
        </b-field>
        <b-field label="Email Address">
          <b-input
            v-model="$store.state.dataSubject.email"
            :disabled="hasSigned"
          ></b-input>
        </b-field>
      </div>
      <br />
    </b-collapse>
    <p>
      To ensure we are erasing data of the right person we require you to
      provide us with proof of your identity and of your address. Please supply
      us with a photocopy or scanned image (do not send the originals) of one or
      both of the following:
    </p>
    <ol>
      <li>
        Proof of Identity
        <br />
        Passport, photo driver’s license, national identity card, birth
        certificate.
      </li>
      <li>
        Proof of Address
        <br />
        Utility bill, bank statement, credit card statement (no more than 3
        months old); current driver’s license.
      </li>
    </ol>
    <b-field class="file is-primary">
      <b-upload class="file-label" :disabled="hasSigned">
        <span class="file-cta">
          <b-icon class="file-icon" icon="upload"></b-icon>
          <span class="file-label">Click to upload</span>
        </span>
      </b-upload>
    </b-field>
    <b-notification
      type="is-warning"
      has-icon
      icon="exclamation-triangle"
      :closable="false"
    >
      <strong>Warning</strong>
      <br />
      If we are not satisfied you are who you claim to be, we reserve the right
      to refuse to grant your request.
    </b-notification>
  </div>
</template>

<script>
export default {
  name: "GPDRForm2",
  computed: {
    hasSigned() {
      return this.$store.state.hasSigned;
    },
  },
};
</script>
