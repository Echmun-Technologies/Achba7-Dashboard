<template>
  <v-container fluid>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="onSubmit" @reset.prevent="onReset">
        <v-card class="ma-3 pa-3">
          <v-card-title primary-title>
            <div class="headline primary--text">Edit Animal</div>
          </v-card-title>
          <v-card-text>
            <div class="my-3">
              <div class="subheading secondary--text text--lighten-2">Name</div>
              <div v-if="name" class="title primary--text text--darken-2">
                {{ animal.name }}
              </div>
              <div v-else class="title primary--text text--darken-2">-----</div>
            </div>
            <validation-provider v-slot="{ errors }" name="Name" rules="required">
              <v-text-field
                v-model="name"
                label="Name"
                required
                :error-messages="errors"
              ></v-text-field>
            </validation-provider>
            <validation-provider v-slot="{ errors }" rules="required" name="Type">
              <v-text-field
                v-model="type"
                label="Type"
                :error-messages="errors"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider v-slot="{ errors }" rules="required" name="Photo">
              <v-text-field
                v-model="photo"
                label="Photo"
                :error-messages="errors"
                required
              ></v-text-field>
            </validation-provider>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="cancel">Cancel</v-btn>
            <v-btn type="reset">Reset</v-btn>
            <v-btn :disabled="invalid" type="submit"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </validation-observer>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IAnimalProfileUpdate } from "@/interfaces";
import { dispatchGetUsers, dispatchUpdateUser } from "@/store/admin/actions";
import { readAdminOneUser } from "@/store/admin/getters";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", { ...required, message: "{_field_} can not be empty" });

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class EditAnimal extends Vue {
  $refs!: {
    observer: InstanceType<typeof ValidationObserver>;
  };

  public valid = true;
  public name = "";
  public type = "";
  public photo = "";
  animal: any;

  public async mounted() {
    await dispatchGetUsers(this.$store);
    this.onReset();
  }

  public onReset() {
    this.$refs.observer.reset();
    if (this.animal) {
      this.name = this.animal.name;
      this.type = this.animal.type;
      this.photo = this.animal.photo;
    }
  }

  public cancel() {
    this.$router.back();
  }

  public async onSubmit() {
    const success = await this.$refs.observer.validate();
    if (!success) {
      return;
    }

    const updatedProfile: IAnimalProfileUpdate = {};
    if (this.name) {
      updatedProfile.name = this.name;
    }
    if (this.type) {
      updatedProfile.type = this.type;
    }
    if (this.photo) {
      updatedProfile.photo = this.photo;
    }
    //if (this.animal) {
    //await dispatchUpdateAnimal(this.$store, {
    //id: this.user.id,
    //animal: updatedProfile,
    //});
  }
  //this.$router.push("/main/animal/animals");

  //get animal() {
  //return readAdminOneUser(this.$store)(+this.$router.currentRoute.params.id);
  //}
}
</script>
