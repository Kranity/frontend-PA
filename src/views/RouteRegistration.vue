<template>
    <Navbar />
    <div class="flex justify-center">
        <div class="flex flex-col border-4 rounded w-1/2 h-3/5">
            <h1 class="text-3xl text-center font-semibold bg-gray-300 p-5">Cadastro de Rota</h1>
            <div class="flex justify-center items-center">
                <div class="space-y-5 my-5 w-1/2">
                    <div class="flex flex-col">
                        <label class="text-xl text-gray-500" for="name">Nome</label>
                        <input class="border border-black rounded py-1" v-model="name" type="text" id="name">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xl text-gray-500" for="description">Descrição (opcional)</label>
                        <input class="border border-black rounded py-1" v-model="description" type="text" id="description">
                    </div>
                    <button @click="cadastrarRota" class="text-lg text-white bg-gray-500 rounded w-full py-2">Cadastrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
    name: 'RouteRegistration',
    components: {
        Navbar
    },
    data() {
        return {
            name: '',
            description: '',
            stops: [
                {
                    order: 0,
                    id_stop: 4
                }
            ]
        }
    },
    methods: {
        cadastrarRota() {
            axios({
            method: 'post',
            url: 'http://localhost:3000/line',
            data: {
                name: this.name,
                description: this.description,
                stops: parseFloat(this.longitude)
            }
            }).then((res) => {console.log(res)})
        }
    }
}
</script>

<style>

</style>