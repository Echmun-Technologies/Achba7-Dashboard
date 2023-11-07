<template>
  <v-container fluid>
    <validation-observer ref="observer" v-slot="{ invalid }">
      <form @submit.prevent="onSubmit" @reset.prevent="onReset">
        <v-card class="ma-3 pa-3">
          <v-card-title primary-title>
            <div class="headline primary--text">Edit Observation</div>
          </v-card-title>
          <v-card-text>
            <div class="my-3">
              <div class="subheading secondary--text text--lighten-2">Description</div>
              <div v-if="observation" class="title primary--text text--darken-2">
                {{ observation.description }}
              </div>
              <div v-else class="title primary--text text--darken-2">-----</div>
            </div>
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
            <validation-provider v-slot="{ errors }" rules="required" name="Photo">
              <v-text-field
                v-model="photo"
                label="Photo"
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
            <validation-provider v-slot="{ errors }" rules="required" name="Coordinates"
              >Coordinates
              <v-text-field
                v-model="lat"
                label="Lng"
                :error-messages="errors"
                required
              ></v-text-field>
              <v-text-field
                v-model="lng"
                label="Lat"
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
import { IObservationUpdate } from "@/interfaces";
import {
  dispatchGetObservations,
  dispatchUpdateObservation,
} from "@/store/admin/actions";
import { readAdminOneObservation } from "@/store/admin/getters";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";

extend("required", { ...required, message: "{_field_} can not be empty" });

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
})
export default class EditObservation extends Vue {
  $refs!: {
    observer: InstanceType<typeof ValidationObserver>;
  };

  public description = "";
  public observation_type = "";
  public date = "";
  public photo = "";
  public lat = 0;
  public lng = 0;

  public async mounted() {
    await dispatchGetObservations(this.$store);
    this.onReset();
  }

  public onReset() {
    if (this.observation) {
      this.description = this.observation.description;
      this.observation_type = this.observation.observation_type;
      this.date = this.observation.date;
      this.photo = this.observation.photo;
      this.lat = this.observation.coordinates.lat;
      this.lng = this.observation.coordinates.lng;
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

    const updatedProfile: IObservationUpdate = {};
    if (this.description) {
      updatedProfile.description = this.description;
    }
    if (this.observation_type) {
      updatedProfile.observation_type = this.observation_type;
    }
    if (this.photo) {
      updatedProfile.photo = this.photo;
    }
    if (this.date) {
      updatedProfile.date = this.date;
    }
    if (this.observation) {
      await dispatchUpdateObservation(this.$store, {
        id: this.observation.id,
        observation: updatedProfile,
      });
    }
    this.$router.push("/main/observation/observations");
  }

  get observation() {
    return readAdminOneObservation(this.$store)(+this.$router.currentRoute.params.id);
  }
}
</script>
