<template>
  <div>
    <h1 class="title">Company View</h1>
    <hr />
    <request-list></request-list>
  </div>
</template>

<script>
import RequestList from "@/components/RequestList.vue";

export default {
  name: "Company",
  components: {
    RequestList,
  },
};
</script>
