<template>
    <Navbar />
    <div class="flex justify-center">
        <div class="flex flex-col border-4 rounded w-1/2 h-3/5">
            <h1 class="text-3xl text-center font-semibold bg-gray-300 p-5">Cadastro de Rota</h1>
            <div class="flex justify-center items-center">
                <div class="space-y-5 my-5 w-3/5">
                    <div class="flex flex-col">
                        <label class="text-xl text-gray-500" for="name">Nome</label>
                        <input class="border border-black rounded py-1" v-model="name" type="text" id="name">
                    </div>
                    <div class="flex flex-col">
                        <label class="text-xl text-gray-500" for="description">Descrição (opcional)</label>
                        <input class="border border-black rounded py-1" v-model="description" type="text" id="description">
                    </div>
                    <div class="h-60 overflow-y-scroll border-4 rounded p-3">
                        <div v-for="stop in stops" :key="stop.id" class="flex items-center">
                            <input class="border border-black rounded" v-model="selectedStops" :value="stop.id" type="checkbox">
                            <label class="text-xl text-gray-500 pl-3">{{stop.name}}</label>
                        </div>
                    </div>
                    <button @click="postRoute" class="text-lg text-white bg-gray-500 rounded w-full py-2">Cadastrar</button>
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
            name: '',
            description: '',
            stops: [],
            selectedStops: []
        }
    },
    methods: {
        getPoints() {
            axios({
            method: 'get',
            url: 'http://localhost:3000/stop',
            }).then((res) => {this.stops = res.data})
        },
        postRoute() {
            axios({
            method: 'post',
            url: 'http://localhost:3000/line',
            data: {
                name: this.name,
                description: this.description,
                stops: this.selectedStops.map((id, order) => ({order: order + 1, id_stop: id}))
            }
            }).then((res) => {console.log(res)})
        }
    },
    created() {
        this.getPoints()
    }
}
</script>
