<template>
  <div class="home">
    <h1>Pagina de CLIENTE</h1>
    <dataComponent/>
    <sabores/>
    <adornosCliente/>
    <pedidosCliente/>
  </div>
</template>

<script>
// @ is an alias to /src
import dataComponent from "../components/dataComponent.vue"
import sabores from "../components/saboresCliente.vue"
import adornosCliente from "../components/adornosCliente.vue"
import pedidosCliente from "../components/pedidosCliente.vue"
export default {
  name: 'ClienteView',
  components:{
    dataComponent,
    sabores,
    adornosCliente,
    pedidosCliente,
  }
}
</script>