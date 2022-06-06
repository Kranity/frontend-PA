<template>
    <Navbar />
    <div class="flex justify-center">
        <div class="flex flex-col border-4 rounded w-1/2 h-3/5">
            <h1 class="text-3xl text-center font-semibold bg-gray-300 p-5">Cadastro de Veículo</h1>
            <div class="flex justify-center items-center">
                <div class="space-y-5 my-5 w-3/5">
                    <div class="flex flex-col">
                        <label class="text-xl text-gray-500" for="model">Modelo</label>
                        <input class="border border-black rounded py-1" v-model="model" type="text" id="model">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xl text-gray-500" for="capacity">Capacidade</label>
                        <input class="border border-black rounded py-1" v-model="capacity" type="number" id="capacity">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xl text-gray-500" for="height">Altura</label>
                        <input class="border border-black rounded py-1" v-model="height" type="text" id="height">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xl text-gray-500" for="width">Largura</label>
                        <input class="border border-black rounded py-1" v-model="width" type="text" id="width">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xl text-gray-500" for="length">Comprimento</label>
                        <input class="border border-black rounded py-1" v-model="length" type="text" id="length">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xl text-gray-500" for="weight">Peso</label>
                        <input class="border border-black rounded py-1" v-model="weight" type="text" id="weight">
                    </div>
                    <button @click="cadastrarVeiculo" class="text-lg text-white bg-gray-500 rounded w-full py-2">Cadastrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Navbar from '../../components/Navbar'
export default {
    name: 'VehicleRegistration',
    components: {
        Navbar
    },
    data() {
        return {
            model: '',
            capacity: '',
            height: '',
            width: '',
            length: '',
            weight: ''
        }
    },
    methods: {
        cadastrarVeiculo() {
            axios({
            method: 'post',
            url: 'http://localhost:3000/bus',
            data: {
                model: this.model,
                capacity: parseFloat(this.capacity),
                height: parseFloat(this.height),
                width: parseFloat(this.width),
                length: parseFloat(this.length),
                weight: parseFloat(this.weight)
            }
            }).then((res) => {console.log(res)})
        }
    }
}
</script>
