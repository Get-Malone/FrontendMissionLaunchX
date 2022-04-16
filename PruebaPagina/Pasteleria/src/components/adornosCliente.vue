<template>
    <div class="adornosCliente">
        <br>
        <h3>Adornos de pasteles con su respectivo precio:</h3> 
        <ul>
            <li v-for="a in $store.state.adornos" v-bind:key="a.name" v-bind:value="a.name">
                {{a.name}}:
               ${{a.precio}}.00
            </li>
        </ul>
     </div>
</template>

<script>
export default {
    name:'adornosCliente',
}
</script>
<style scoped>
ul,li {
    list-style-type: none;
}
</style>