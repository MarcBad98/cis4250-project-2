<template>
  <div id="view-template">
    <h1 class="title">Template</h1>
    <small>
      Source:
      <a href="https://gdpr.eu/right-to-erasure-request-form/" target="_blank">
        GDPR.eu
      </a>
    </small>
    <hr />
    <div class="columns is-multiline has-background-light">
      <div v-for="page in 3" v-bind:key="page" class="column is-half">
        <pdf src="/static/right-to-erasure-request-form.pdf" :page="page"></pdf>
      </div>
    </div>
  </div>
</template>

<script>
import PDF from "vue-pdf";

export default {
  name: "Template",
  components: {
    pdf: PDF,
  },
};
</script>
