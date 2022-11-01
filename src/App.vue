<template>
  <the-header></the-header>
  <router-view></router-view>
</template>


<script>
import TheHeader from '@/components/layout/TheHeader.vue';
import GamesList from '@/pages/games/GamesList.vue';
import AddNewGame from "@/pages/new/AddNewGame";

export default {
  components: {AddNewGame, GamesList, TheHeader},
}

</script>
<!--

<style>
/*@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");*/

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 70rem;
  padding: 1rem;
  border-radius: 12px;
}

#app ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#app li {
  border-radius: 1px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 20rem;
  /*margin: 0.4 1rem;*/
}

#app h1 {
  font-size: 3rem;
  color: whitesmoke;
  margin: 1rem 0 1rem 1rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 2px solid #ccc;
  color: navy;
  margin: 0 0 1rem 0;
}

a {
  color: navy;
  font-weight: 600;
}

nav {
  padding: 7px;
  background-color: navy;
}

nav a {
  font-weight: bold;
  color: whitesmoke;
  font-size: 15px;
}

</style>
-->
