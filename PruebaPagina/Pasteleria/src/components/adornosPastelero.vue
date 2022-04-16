<template>
    <div class="adornosPastelero">
        <br>
        <h3>Menu de sabores con cantidad disponible:</h3> 
        <ul>
            <li>
                Nombre  ||
                Stock
            </li>
            <li v-for="a in $store.state.adornos" v-bind:key="a.name">
                {{a.name}} -> 
                <button @click="$store.commit('subirStockAdorno',{name:a.name})">+1</button>
               {{a.stock}}
               <button @click="$store.commit('bajarStockAdorno',{name:a.name})">-1</button>
            </li>
        </ul>
        Añadir adorno: <br>
        Nombre:<input type="text" id="name" v-model="$store.state.adornos.name" ><br>
        Precio:<input type="number" id="precioa" v-model="$store.state.adornos.precio"><br>
        Stock:<input type="number" id="stocka" v-model="$store.state.adornos.stock"><br>

        <button @click="$store.commit('addAdorno',{name:$store.state.adornos.name,precio:$store.state.adornos.precio,stock:$store.state.adornos.stock})">Añadir adorno</button>
    
     </div>
</template>

<script>
export default {
    name:'adornosPastelero',
}
</script>
<style scoped>
ul,li {
    list-style-type: none;
}
</style>