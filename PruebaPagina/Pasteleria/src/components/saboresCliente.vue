<template>
    <div class="sabores">
        <br>
        <h3>Sabores de pasteles con su respectivo precio:</h3> 
        <ul>
            <li v-for="s in $store.state.sabores" v-bind:key="s.sabor" v-bind:value="s.sabor">
                {{s.sabor}}:
               ${{s.precio}}.00
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'sabores',
}
</script>
<style scoped>
ul,li {
    list-style-type: none;
}
</style>