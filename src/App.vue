<template>
  <div id="app">
  <!-- miniNAVIGATOR -->
   <nav>
     <router-link to="/">Start</router-link>
     <router-link to="./about">O projekcie</router-link>
   </nav>
   <!-- ZAMIENNIK CIAŁA... -->
     <router-view />
  </div>
</template>

<style>
/* BO NAJLEPSZA PORA TO */
@import url("https://fonts.googleapis.com/css?family=Lato:400,700");
/* NADCHODZI */
@import src="background.css"; 

body {
  background-color: #323333;
  font-family: "Lato", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 50px;
}
body,
html {
  margin: 0;
  height: 100%;
}
#app {
  width: 50%;
}

nav {
  padding: 20px 20px 20px 0;
}

nav a {
  padding: 10px;
  text-decoration: none;
  border: 1px solid #fafafa;
  color: #fafafa;
  font-weight: bold;
  margin-right: 15px;
}

/* PRZYCISKNIJ POCIESZACZA */

button {
  background: none;
  padding: 15px 20px;
  font-size: 1.7em;
  outline: 0;
  border: 1px solid #00cdcd;
  color: #00cdcd;
  text-transform: uppercase;
  font-family: "Lato";
  cursor: pointer;
}
</style>

<script>
import Solace from "./components/Solace.vue";

export default {
  name: "app",
  components: {
    Solace
  }
};

/* TO DO ROBOTY

- share


*/
</script>
