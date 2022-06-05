<template>
    <div class="flex justify-center items-center h-screen">
        <div class="flex border border-black rounded w-1/2 h-3/5">
            <div class="w-1/2">
                <img class="h-full object-cover object-right" alt="Onibus" src="../assets/onibus.png" />
            </div>
            <div class="flex flex-col justify-center items-center space-y-8 w-1/2">
                <h1 class="text-4xl text-gray-500 font-bold">Login</h1>
                <div class="flex flex-col w-3/5">
                    <label class="text-xl text-gray-500" for="usuario">Usuario</label>
                    <input class="border border-black rounded" v-model="usuario" type="text" id="usuario">
                    <label class="text-xl text-gray-500 mt-3" for="senha">Senha</label>
                    <input class="border border-black rounded" v-model="senha" type="password" id="senha">
                    <button class="flex justify-end text-xs mt-1">Esqueceu a senha?</button>
                </div>
                <div class="flex flex-col text-center space-y-3 w-3/5">
                    <router-link class="text-lg text-white bg-gray-500 rounded py-1" to="/VehicleRegistration">Entrar</router-link>
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
            usuario: '',
            senha: ''
        }
    },
}
</script>

<style>

</style>