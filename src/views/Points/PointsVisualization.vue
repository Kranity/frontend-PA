<template>
    <Navbar />
    <div class="flex justify-center">
        <div class="border-4 rounded w-3/5">
            <div class="grid grid-cols-12 bg-gray-300">
                <div class="flex justify-center items-center col-span-6 col-start-4">
                    <h1 class="text-3xl font-semibold p-5">Visualização de Pontos</h1>
                </div>
                <div class="flex justify-end items-center col-span-3">
                    <router-link to="PointRegistration" class="bg-green-600 rounded p-2 mr-10 text-white">+ Adicionar</router-link>
                </div>
            </div>
            <div class="max-h-124 overflow-y-scroll">
                <div v-for="point in points" :key="point.id" class="flex justify-between items-center border m-3 p-3">
                    <p>{{point.name}}</p>
                    <div class="space-x-5 font-bold text-white">
                        <button class="bg-blue-400 rounded p-2">Visualizar</button>
                        <button class="bg-orange-400 rounded p-2">Editar</button>
                        <button class="bg-red-400 rounded p-2">Excluir</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import Navbar from '../../components/Navbar'
export default {
    components: {
        Navbar
    },
    data() {
        return {
            points: [
                {
                    name: 'gregerge'
                },
                {
                    name: 'gregerge'
                }
            ]
        }
    },
    methods: {
        getPoints() {
            axios({
            method: 'get',
            url: 'http://localhost:3000/stops',
            }).then((res) => {this.points = res.data})
        },
    },
    created() {
        this.getPoints()
    }
}
</script>
