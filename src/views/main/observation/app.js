var observations = [ {
    description:'',
    observation_type:'',
    date:'',
  }];
  const application = {
    data() {
      return {
        observations:window.observations,
        newObservation:{

        },
        errors:[],
      }
    },
    methods: {
      addObservation:function() {
        this.errors = [];
      

        if(!this.newObservation.description){
          this.errors.push('description requis.');
        }

        if(!this.newObservation.observation_type){
          this.errors.push('observation_type requis.');
        }

        if(!this.newObservation.date){
          this.errors.push('date requis.');
        }

        if(this.errors.length){
          return false;
        }
        this.observations.push(this.newObservation);
        this.newObservation = {};
        this.errors = [];
      }
    }
  }
Vue.createApp(application).mount('#app') 