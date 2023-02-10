const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname:'',
     // fullname:''
    };
  },
  watch:{ //valeur qui besoin une controlle
    counter(value){
      if(value > 50){
        const that =this;
        setTimeout(function(){
          that.counter =0;
        },2000)
      }
    }
  },
  computed:{ //valeur fixe
    fullname(){
      if(this.name == "" || this.lastname ==""){
        return '';
      }
      return this.name +" " +this.lastname ;
    }
  },
  methods: { //changement selon le DOM
   
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name ="";
    }
  }
});

app.mount('#events');
