<script lang="ts">

export default {
    methods: {
        // <!-- * formattage de date -->
        localDate(date : Date){
            return date.toLocaleString();
        }
    },
    // <!-- * les props qui sont passées par le parent -->
    props: {
        name: String,
        status: Boolean,
        date: Date,
    }
};
</script>

<template>
    <h1>Fournisseur :</h1>

        <h2>{{ name }}</h2>
        <br />
        <h3>
        <span v-if="status" style="color: green">Dispo</span>
        <span v-else style="color:red">Indispo</span>
        </h3>
        <br />
        <h5>{{ localDate(date) }}</h5>
        <hr />
</template>

<style>
.supplier_box {
    justify-content: center;
}
.dispo_stock {
    color: green;
}
.empty_stock {
    color: red;
}
</style>