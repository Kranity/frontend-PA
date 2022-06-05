<template>
    <Navbar />
    <div class="flex justify-center">
        <div class="flex flex-col border-4 rounded w-1/2 h-3/5">
            <h1 class="text-3xl text-center font-semibold bg-gray-300 p-5">Relatório</h1>
            <div class="flex">
                <div class="w-1/2 p-5">
                    <p>rgegergreg</p>
                </div>
                <div class="flex flex-col text-center space-y-5 w-1/2 p-5">
                    <p>gerger</p>
                    <p>Status da rota</p>
                    <button class="text-lg bg-gray-300 text-center p-3">Gerar PDF</button>
                    <button class="text-lg bg-gray-300 text-center p-3">Voltar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
    name: 'Report',
    components: {
        Navbar
    }
}
</script>

<style>

</style>