<template>
  <h2>{{ customTitle }}</h2>
  <p>{{counter}} <sup>2</sup> = {{ squareValueComputed }} </p>
  <p data-test-id="counter">{{counter}}</p>
  <div class="buttons">
      <button @click="increse">+1</button>
      <button @click="decreese">-1</button>
  </div>


</template>

<script>

export default {
    props: {
        title: String,
        start: {
            type: Number,
            // required: true,
            default:10,
            validator(valor){
                return valor >= 10;
            }
        }
    },
    data(){
        return{
            counter: this.start
        }
    },
    methods:{
        squreValue(){
            console.log('squeareValue');
            return this.counter * this.counter;
        },
        increse(){
            this.counter = this.counter +1;
        },
        decreese(){
            this.counter = this.counter -1;
        }
    },
    computed: {
        squareValueComputed(){
            
            return this.counter * this.counter;
        },
        customTitle(){
            return this.title || 'Contador';
        }
    }
}
</script>

<style>

button{
    background-color: #64BB87;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0px 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
 }

 button:hover{
     background-color: #5aa67b;
     transition: 0.3s ease-in-out;
 }

</style>