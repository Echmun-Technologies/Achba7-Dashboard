<template>
  <v-container fluid>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="onSubmit" @reset.prevent="onReset">
        <v-card class="ma-3 pa-3">
          <v-card-title primary-title>
            <div class="headline primary--text">Create Animal</div>
          </v-card-title>
          <v-card-text>
            <validation-provider v-slot="{ errors }" name=" Name" rules="required">
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
              <validation-provider v-slot="{ errors }" name=" Photo" rules="required">
                <v-text-field
                  v-model="photo"
                  label="Photo"
                  required
                  :error-messages="errors"
                ></v-text-field>
              </validation-provider>
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
import { IAnimalProfileCreate } from "@/interfaces";
import { dispatchGetUsers, dispatchCreateUser } from "@/store/admin/actions";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

// register validation rules
extend("required", { ...required, message: "{_field_} can not be empty" });

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class CreateAnimal extends Vue {
  $refs!: {
    observer: InstanceType<typeof ValidationObserver>;
  };

  public valid = false;
  public name = "";
  public type = "";
  public photo = "";

  public async mounted() {
    await dispatchGetUsers(this.$store);
    this.onReset();
  }

  public onReset() {
    this.name = "";
    this.type = "";
    this.photo = "";
    this.$refs.observer.reset();
  }

  public cancel() {
    this.$router.back();
  }

  public async onSubmit() {
    const success = await this.$refs.observer.validate();
    if (!success) {
      return;
    }

    const updatedProfile: IAnimalProfileCreate = {
      name: this.name,
    };
    if (this.name) {
      updatedProfile.name = this.name;
    }
    if (this.type) {
      updatedProfile.type = this.type;
    }
    //await dispatchCreateUser(this.$store, updatedProfile);
    this.$router.push("/main/animal/animals");
  }
}
</script>
