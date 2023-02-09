const app = Vue.createApp({
    data() {
      return {
        name :'',
        confirmedName:''
      };
    },
    methods:{
        confirmed(){
            this.confirmedName =this.name;
        },
        showalert(){
            alert("hello");
        },
        setName(event){
            this.name =event.target.value;
        }
    }
  });
  
  
  app.mount('#assignment');
  