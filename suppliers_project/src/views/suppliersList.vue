<script lang="ts">
import supplier from "../components/supplier.vue";
// <!-- * import de la libraisi timeago pour les dates-->
import * as timeago from 'timeago.js';
import map from "../components/map.vue";
export default {
  components : {
    supplier,
  },
  // <!-- * Les suppliers passés en props depuis app.vue -->
  props: {
    suppliers: Array,
  },
  data() {
    return {
      loading: false,
      error: null,
    }
  },
}
</script>

<template>

  <h1>Liste des fournisseurs</h1>
  <div v-if="loading">Chargement en cours</div>  
  <div v-else-if="error" class="error">Erreur données introuvables</div>
  <!-- * Appel du composant enfant en lui passant des props -->
  <div v-else>  <supplier v-for="supplier in suppliers" :key="supplier.id"
    :name="supplier.name" :status="supplier.status" :date="supplier.checkedAt" /> 
  </div>

  

</template>

<style>
@media (min-width: 1024px) {
  .about {

    display: flex;
    align-items: center;
  }
  .error {
    color: red;
  }
}
</style>
