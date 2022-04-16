<template>
    <div class="data">
        Direccion: {{$store.state.direccion}} <br>
        Telefono: {{$store.state.telefono}} <br>
        Horarios:{{$store.state.horario}} <br>
    </div>
</template>

<script>
export default {
    name:'dataComponent',
}
</script>