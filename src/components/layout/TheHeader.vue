<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Board Games</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/games">All Games</router-link>
        </li>
        <li>
          <router-link to="/new">Add New Game</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import BaseCard from "@/components/UI/BaseCard";
export default {
  components: {BaseCard}
}
</script>

<style scoped>
header {
  margin: 2rem auto;
  max-width: 45rem;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  height: 4rem;
  background-color: navy;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}

header a {
  text-decoration: none;
  color: whitesmoke;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  border-radius: 5px;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid whitesmoke;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>











<!--
<template>
  <header>
    <h1>{{ name }}</h1>
  </header>
</template>

<script>
export default {
  props: ['name'],
}
</script>

<style scoped>
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: navy;
  color: white;
  text-align: center;
  width: 100%;
  max-width: 45rem;
}

p {
  text-align: center;
  color: navy;
}
</style>-->
