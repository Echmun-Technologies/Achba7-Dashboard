<template>
    <v-container fluid>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <form>
          <v-card class="ma-3 pa-3">
            <v-card-title primary-title>
              <div class="headline primary--text">Create Observation</div>
            </v-card-title>
            <v-card-text>
              <input type="text" 
              name="description" 
              placeholder="Description"
              v-model="newObservation.description"
              >
              <input type="text"
              name="observation_type"
              placeholder="Observation Type"
              v-model="newObservation.observation_type"
              >
              <input type="text" 
              name="date" 
              placeholder="Date"
              v-model="newObservation.date"
              >
              <button>Cancel</button>
              <button @click="addObservation()">Submit</button>
              <button>Reset</button>
              </v-card-text>
              </v-card>
              </form>
              </validation-observer>
              </v-container>

</template>
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="app.js"></script>
