<template>
  <div id="view-form">
    <h1 class="title">Form</h1>
    <hr />
    <b-steps v-model="activeStep">
      <b-step-item
        v-for="(step, index) in steps"
        v-bind:key="index"
        :label="step.label"
        :icon="step.icon"
        clickable
      >
        <gdpr-template-form
          :step="index"
          @goto="activeStep = $event"
        ></gdpr-template-form>
      </b-step-item>
    </b-steps>
  </div>
</template>

<script>
import GDPRTemplateForm from "@/components/GDPRTemplateForm.vue";

export default {
  name: "Form",
  components: {
    "gdpr-template-form": GDPRTemplateForm,
  },
  data() {
    return {
      activeStep: 0,
      steps: [
        {
          label: "General",
          icon: "info",
        },
        {
          label: "You",
          icon: "user",
        },
        {
          label: "The Data Subject",
          icon: "people-arrows",
        },
        {
          label: "Reason",
          icon: "exclamation",
        },
        {
          label: "Data to Erase",
          icon: "unlink",
        },
        {
          label: "Sign",
          icon: "file-signature",
        },
      ],
    };
  },
};
</script>
