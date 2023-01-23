<template>
  <v-container fluid>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="onSubmit" @reset.prevent="onReset">
        <v-card class="ma-3 pa-3">
          <v-card-title primary-title>
            <div class="headline primary--text">Create Observation</div>
          </v-card-title>
          <v-card-text>
            <validation-provider
              v-slot="{ errors }"
              name="Description"
              rules="required"
            >
              <v-text-field
                v-model="description"
                label="Description"
                required
                :error-messages="errors"
              ></v-text-field>
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              rules="required"
              name="Observation Type"
            >
              <v-text-field
                v-model="observation_type"
                label="Observation Type"
                :error-messages="errors"
                required
              ></v-text-field>
            </validation-provider>
            <validation-provider v-slot="{ errors }" rules="required" name="Date">
              <v-text-field
                v-model="date"
                label="Date"
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
import { IObservationProfileCreate } from "@/interfaces";
import {
  dispatchCreateObservation,
  dispatchGetObservations,
} from "@/store/admin/actions";
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
export default class CreateObservation extends Vue {
  $refs!: {
    observer: InstanceType<typeof ValidationObserver>;
  };

  public valid = false;
  public description = "";
  public observation_type = "";
  public date = "";

  public async mounted() {
    await dispatchGetObservations(this.$store);
    this.onReset();
  }

  public onReset() {
    this.description = "";
    this.observation_type = "";
    this.date = "";
  }

  public cancel() {
    this.$router.back();
  }

  public async onSubmit() {
    const success = await this.$refs.observer.validate();
    if (!success) {
      return;
    }

    const updatedProfile: IObservationProfileCreate = {
      description: this.description,
    };
    if (this.observation_type) {
      updatedProfile.observation_type = this.observation_type;
    }
    if (this.date) {
      updatedProfile.date = this.date;
    }
    await dispatchCreateObservation(this.$store, updatedProfile);
    this.$router.push("/main/observation/observations");
  }
}
</script>
