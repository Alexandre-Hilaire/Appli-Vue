<script lang="ts">
import Vue from 'vue'
import { RouterLink, RouterView } from 'vue-router';
import map from './components/map.vue';
import suppliersListVue from './views/suppliersList.vue';

export default {
  // <!-- * Les composants à qui ont veut passer des props -->
  components: {
    map,
    suppliersListVue,
  },
  data(){
    return {
    suppliers: [],
    loading: false,
    error : null,
    };
  },
  methods: {
    onSupliersListClick() {
      alert('vous avez cliqué sur la liste des fournisseurs');
    },
    onMapClick() {
      alert('Vous avez cliqué sur la carte');
    },
  },
  // <!-- * La requète axios, on transmettra le résultat aux autres composants -->
  mounted(){
    this.$axios.get()
    .then(response => {
      this.loading = true;
      console.log(response.data);
      return this.suppliers = response.data.data;
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données');
      this.error = true;
    })
    .finally ( () => 
      {this.loading = false;}
    );
  },
}
</script>

<template>
  <header>

    <div class="wrapper">

      <!-- * Utilisation du routeur de vue -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/suppliersList" @click="onSupliersListClick">Fournisseurs</RouterLink>
        <RouterLink to="/map" @click="onMapClick">Cartes des fournisseurs</RouterLink>
      </nav>
    </div>
  </header>

<!-- * Pour transmetre les props -->
  <RouterView :suppliers="suppliers" />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
