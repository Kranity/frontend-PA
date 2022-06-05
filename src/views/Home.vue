<template>
    <Navbar />
    <div class="flex justify-center">
        <div class="flex border-4 rounded w-1/2 h-3/5">
            <div class="flex flex-col justify-around text-center space-y-5 w-1/2 p-10">
                <div class="text-lg bg-gray-300 p-10">
                    <p>Onibus Cadastrados</p>
                </div>
                <div class="text-lg bg-gray-300 p-10">
                    <p>Rotas Cadastradas</p>
                </div>
            </div>
            <div class="flex flex-col space-y-5 w-1/2 p-10">
                <input class="border-2" type="date">
                <button class="text-lg bg-gray-300 text-center p-5">Entre com dados de ocupação</button>
                <router-link class="text-lg bg-gray-300 text-center p-5" to="/Report">Gerar Relátorio</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
    name: 'Home',
    components: {
        Navbar
    }
}
</script>

<style>

</style>