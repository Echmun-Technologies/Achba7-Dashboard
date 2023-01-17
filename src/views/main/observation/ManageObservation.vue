<template>
      <v-toolbar light>
        <v-toolbar-title> Manage Users </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" to="#">Create Observation</v-btn>
      </v-toolbar>
</template>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="app.js"></script>
<script>
@Component
export default class ManageObservation extends Vue {
  public headers = [
    {
      text: "Description",
      sortable: true,
      value: "description",
      align: "left",
    },
    {
      text: "Observation Type",
      sortable: true,
      value: "observation_type",
      align: "left",
    },
    {
      text: "Date",
      sortable: true,
      value: "date",
      align: "left",
    },
  ];
  get observations() {
    return readManageObservation(this.$store);
  }

  public async mounted() {
    await dispatchGetObservations(this.$store);
  }
}
</script>
