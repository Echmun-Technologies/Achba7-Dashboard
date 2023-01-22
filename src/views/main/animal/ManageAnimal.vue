<template>
  <div>
    <v-toolbar light>
      <v-toolbar-title> Manage Users </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" to="/main/admin/users/create">Create Animal</v-btn>
    </v-toolbar>
    <v-data-table :headers="headers" :items="animals">
      <!-- eslint-disable-next-line vue/valid-v-slot -->
      <template #item.actions="{ item }">
        <v-btn
          slot="activator"
          icon
          :to="{ name: 'main-animal-animals-edit', params: { id: item.id } }"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { readAdminAnimals } from "@/store/admin/getters";
import { dispatchGetAnimals } from "@/store/admin/actions";

@Component
export default class AdminUsers extends Vue {
  public headers = [
    {
      text: "Name",
      sortable: true,
      value: "name",
      align: "left",
    },
    {
      text: "Type",
      sortable: true,
      value: "type",
      align: "left",
    },
    {
      text: "Photo",
      sortable: true,
      value: "photo",
      align: "left",
    },
    {
      text: "Actions",
      value: "actions",
      sortable: false,
    },
  ];
  animal: any;
  get animals() {
    return readAdminAnimals(this.$store);
  }

  public async mounted() {
    await dispatchGetAnimals(this.$store);
  }
}
</script>
