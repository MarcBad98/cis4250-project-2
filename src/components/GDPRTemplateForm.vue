<template>
  <div class="content">
    <template v-if="step === 0">
      <gdpr-form-0></gdpr-form-0>
    </template>
    <template v-if="step === 1">
      <gdpr-form-1></gdpr-form-1>
    </template>
    <template v-if="step === 2">
      <gdpr-form-2></gdpr-form-2>
    </template>
    <template v-if="step === 3">
      <gdpr-form-3></gdpr-form-3>
    </template>
    <template v-if="step === 4">
      <gdpr-form-4></gdpr-form-4>
    </template>
    <template v-if="step === 5">
      <gdpr-form-5></gdpr-form-5>
    </template>
  </div>
</template>

<script>
import GPDRForm0 from "@/components/GDPRForm0.vue";
import GPDRForm1 from "@/components/GDPRForm1.vue";
import GPDRForm2 from "@/components/GDPRForm2.vue";
import GPDRForm3 from "@/components/GDPRForm3.vue";
import GPDRForm4 from "@/components/GDPRForm4.vue";
import GPDRForm5 from "@/components/GDPRForm5.vue";

export default {
  name: "GDPRTemplateForm",
  components: {
    "gdpr-form-0": GPDRForm0,
    "gdpr-form-1": GPDRForm1,
    "gdpr-form-2": GPDRForm2,
    "gdpr-form-3": GPDRForm3,
    "gdpr-form-4": GPDRForm4,
    "gdpr-form-5": GPDRForm5,
  },
  props: {
    step: {
      type: Number,
      default: 0,
    },
  },
};
</script>
