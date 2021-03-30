<template>
  <div>
    <b-table :data="[requestForms]" v-if="$store.state.hasSigned">
      <b-table-column field="fullName" label="Full Name" v-slot="props">
        {{ props.row.fullName }}
      </b-table-column>
      <b-table-column field="email" label="Email" v-slot="props">
        {{ props.row.email }}
      </b-table-column>
      <b-table-column
        field="isDataSubject"
        label="Is Data Subject?"
        v-slot="props"
      >
        <b-tag type="is-success" v-if="props.row.isDataSubject">
          <strong>Yes</strong>
        </b-tag>
        <b-tag type="is-warning" v-else>
          <strong>No</strong>
        </b-tag>
      </b-table-column>
      <b-table-column field="dataSubject" label="Data Subject" v-slot="props">
        {{ props.row.dataSubject }}
      </b-table-column>
      <b-table-column label="Actions">
        <div class="buttons">
          <b-button
            type="is-info"
            size="is-small"
            label="View"
            icon-left="eye"
            @click="$buefy.snackbar.open('[WIP: view workflow]')"
          ></b-button>
          <b-button
            type="is-success"
            size="is-small"
            label="Approve"
            icon-left="check-circle"
            @click="
              $buefy.snackbar.open('Approved request! [WIP: approve workflow]')
            "
          ></b-button>
          <b-button
            type="is-danger"
            size="is-small"
            label="Reject"
            icon-left="times-circle"
            @click="
              $buefy.snackbar.open('Rejected request! [WIP: reject workflow]')
            "
          ></b-button>
          <b-button
            type="is-warning"
            size="is-small"
            label="Request More Information"
            icon-left="envelope"
            @click="
              $buefy.snackbar.open(
                'Requested more information! [WIP: request more workflow]'
              )
            "
          ></b-button>
        </div>
      </b-table-column>
    </b-table>
    <p v-else>No data erasure requests filed at the moment.</p>
  </div>
</template>

<script>
export default {
  name: "RequestList",
  computed: {
    requestForms() {
      return {
        fullName: this.$store.state.user.fullName,
        email: this.$store.state.user.email,
        isDataSubject: this.$store.state.dataSubject.isDataSubject,
        dataSubject: this.$store.state.dataSubject.fullName,
      };
    },
  },
};
</script>
