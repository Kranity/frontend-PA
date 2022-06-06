<template>
    <div class="flex justify-center items-center h-screen">
        <div class="flex border-4 rounded w-1/2 h-3/5">
            <div class="w-1/2">
                <img class="h-full object-cover object-right" alt="Onibus" src="../assets/onibus.png" />
            </div>
            <div class="flex flex-col justify-center items-center space-y-8 w-1/2">
                <h1 class="text-4xl text-gray-500 font-bold">Login</h1>
                <div class="flex flex-col w-3/5">
                    <label class="text-xl text-gray-500" for="email">Email</label>
                    <input class="border border-black rounded" v-model="email" type="text" id="email">
                    <label class="text-xl text-gray-500 mt-3" for="password">Senha</label>
                    <input class="border border-black rounded" v-model="password" type="password" id="password">
                    <button class="flex justify-end text-xs mt-1">Esqueceu a senha?</button>
                </div>
                <div class="flex flex-col text-center space-y-3 w-3/5">
                    <router-link @click="logar" class="text-lg text-white bg-gray-500 rounded py-1" to="/VehicleRegistration">Entrar</router-link>
                    <router-link class="text-lg text-white bg-gray-500 rounded py-1" to="/VehicleRegistration">Cadastre-se</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        logar() {
            axios({
            method: 'post',
            url: 'http://localhost:3000/user',
            data: {
                email: this.email,
                password: this.password,
            }
            }).then((res) => {console.log(res)})
        }
    }
}
</script>
