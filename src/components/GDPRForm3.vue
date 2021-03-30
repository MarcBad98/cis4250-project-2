<template>
  <div>
    <p class="subtitle">Reason</p>
    <hr />
    <p>
      Given the sensitive nature of erasing personal data, GDPR Article 17(1)
      requires certain conditions to be met before a request may be considered.
      Please tick the appropriate box:
    </p>
    <b-field v-for="option in options" v-bind:key="option">
      <b-checkbox v-model="$store.state.reasons" :native-value="option">
        {{ option }}
      </b-checkbox>
    </b-field>
    <p>
      Please supply us with the reason you wish your data to be erased and
      please attach any justifying documents to this one.
    </p>
    <b-field class="file is-primary">
      <b-upload class="file-label">
        <span class="file-cta">
          <b-icon class="file-icon" icon="upload"></b-icon>
          <span class="file-label">Click to upload</span>
        </span>
      </b-upload>
    </b-field>
  </div>
</template>

<script>
export default {
  name: "GPDRForm3",
  data() {
    return {
      options: [
        "You feel your personal data is no longer necessary for the purposes for which we originally collected it.",
        "You no longer consent to our processing of your personal data.",
        "You object to our processing of your personal data as is your right under Article 21 of the GDPR.",
        "You feel your personal data has been unlawfully processed.",
        "You feel we are subject to a legal obligation of the EU or Member State that requires the erasure of your personal data.",
        "You are a child, you represent a child, or you were a child at the time of the data processing and you feel your personal data was used to offer you information society services.",
      ],
    };
  },
};
</script>
