<script lang="ts">

import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";

export default {
// <!-- * Les suppliers passés en props depuis app.vue -->
  props : {
    suppliers : Array,
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
  },
  data() {
    return {
      zoom: 10, //    // <!-- * Zoom de base -->
      center: [44.8940,4.9257], //     // <!-- * Centre de la carte  -->
      osmUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", // <!-- * Source des tuiles d'openstreetmap -->
      osmAttrib: "&copy; OpenStreetMap contributors", // <!-- * source des données d'openstreetmap -->
      loading: false,
      error: null,
    };
  },
}
</script>
<template>

<h1>Carte des fournisseurs</h1>
<div style="height:600px; width:800px">
    <p>vue-leaflet SSR Demo</p>
    <l-map :zoom="zoom" :center="center" :useGlobalLeaflet="false"> <!-- * instancie la classe l-map créer et configure la carte -->
        <l-tile-layer :url="osmUrl" :attribution="osmAttrib"></l-tile-layer> <!-- * classe des tuiles -->
        <l-marker v-for="supplier in suppliers" :key="supplier.id" :lat-lng="[supplier.latitude, supplier.longitude]"> 
            <l-tooltip>{{ supplier.name }}</l-tooltip> 
        </l-marker>
    </l-map>
  </div>
</template>