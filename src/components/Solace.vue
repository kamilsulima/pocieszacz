<template>
  <div> <!-- TO SIĘ MOŻE PRZYDAĆ... -->
   <div class="holder">
<!-- POCIESZ-WPROWADŹ -->
<form @submit.prevent="addSolace">
    <input type="text" placeholder="Wprowadź pocieszenie..." v-model="pocieszenie" v-validate="'min:5'" name="pocieszenie">
</form>
<!-- TO DO TO-DO PODOBNE -->
     <ul>
       <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
       <li v-for="(data, index) in solace" :key='index'> 
         {{ data.pocieszenie }}  <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
       </li>
       </transition-group>
     </ul>
<!-- ALERT MATE
     <transition name="alert-in">
    <p class="alert" v-if="errors.has('pocieszenie')">{{ errors.first('pocieszenie') }}</p>
    </transition> -->
   </div> 
  </div>
</template>

<script>
export default {
  name: "Solace",
  data() {
    return {
      pocieszenie: "",
      solace: [
        { pocieszenie: "Pocieszenie nadchodzi." },
        { pocieszenie: "Pocieszenie jest blisko." }
      ]
    };
  },
  methods: {
    addSolace() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.solace.push({ pocieszenie: this.pocieszenie });
          this.pocieszenie = "";
        } else {
          console.log("Not valid.");
        }
      });
    },
    remove(id) {
      this.solace.splice(id, 1);
    }
  }
};
</script>

<style scoped>
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #00cdcd;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #00cdcd;
  color: black;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}

.alert-in-enter-active {
  animation: bounce-in 1s;
}
.alert-in-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

i {
  float: right;
}
</style>
