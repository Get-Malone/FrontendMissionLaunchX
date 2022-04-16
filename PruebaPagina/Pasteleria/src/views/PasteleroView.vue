<template>
  <div class="about">
    <h1>Pagina de PASTELERO</h1>
    <sabores-pastelero/>
    <adornos-pastelero/>
    <pedidosPastelero/>
  </div>
</template>


<script>
// @ is an alias to /src
import saboresPastelero from "../components/saboresPastelero.vue"
import adornosPastelero from "../components/adornosPastelero.vue"
import pedidosPastelero from "../components/pedidosPastelero.vue"
export default {
  name: 'PasteleroView',
  components:{
    saboresPastelero,
    adornosPastelero,
    pedidosPastelero
  }
}
</script>