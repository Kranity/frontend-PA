<template>
    <Navbar />
    <div class="flex justify-center">
        <div class="flex flex-col border-4 rounded w-1/2 h-3/5">
            <h1 class="text-3xl text-center font-semibold bg-gray-300 p-5">Cadastro de Ponto</h1>
            <div class="flex justify-center items-center">
                <div class="space-y-5 my-5 w-1/2">
                    <div class="flex flex-col">
                        <label class="text-xl text-gray-500" for="name">Nome</label>
                        <input class="border border-black rounded py-1" v-model="name" type="text" id="name">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xl text-gray-500" for="latitude">Latitude</label>
                        <input class="border border-black rounded py-1" v-model="latitude" type="text" id="latitude">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xl text-gray-500" for="longitude">Longitude</label>
                        <input class="border border-black rounded py-1" v-model="longitude" type="text" id="longitude">
                    </div>
                    <button @click="cadastrarPonto" class="text-lg text-white bg-gray-500 rounded w-full py-2">Cadastrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Navbar from '../components/Navbar'
export default {
    name: 'PointsRegistration',
    components: {
        Navbar
    },
    data() {
        return {
            name: '',
            latitude: '',
            longitude: ''
        }
    },
    methods: {
        cadastrarPonto() {
            axios({
            method: 'post',
            url: 'http://localhost:3000/stop',
            data: {
                name: this.name,
                latitude: parseFloat(this.latitude),
                longitude: parseFloat(this.longitude)
            }
            }).then((res) => {console.log(res)})
        }
    }
}
</script>

<style>

</style>