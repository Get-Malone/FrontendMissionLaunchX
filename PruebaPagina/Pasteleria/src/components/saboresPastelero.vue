<template>
    <div class="saboresPastelero">
        <br>
        <h3>Menu de sabores con cantidad disponible:</h3> 
        <ul>
            <li>
                Sabor ||
                Stock
            </li>
            <li v-for="s in $store.state.sabores" v-bind:key="s.sabor">
                {{s.sabor}} -> 
                <button @click="$store.commit('subirStock',{sabor:s.sabor})">+1</button>
               {{s.stock}}
               <button @click="$store.commit('bajarStock',{sabor:s.sabor})">-1</button>
            </li>
        </ul>

        Sabor:<input type="text" id="sabor" v-model="$store.state.sabores.sabor" ><br>
        Stock:<input type="number" id="stock" v-model="$store.state.sabores.stock"><br>
        Precio:<input type="number" id="precio" v-model="$store.state.sabores.precio"><br>
        <button @click="$store.commit('addSabor',{sabor:$store.state.sabores.sabor,precio:$store.state.sabores.precio,stock:$store.state.sabores.stock})">Añadir sabor</button>
    </div>
</template>

<script>
export default {
    name:'saboresPastelero',
}
</script>
<style scoped>
ul,li {
    list-style-type: none;
}
</style>