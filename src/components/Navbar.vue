<template>
    <div class="flex justify-around items-center bg-gray-300 p-5 mb-10">
        <router-link class="text-lg p-3" to="Home"><img class="w-12 h-12" src="../assets/logo.png" alt="Logo"></router-link>
        <div class="space-x-10">
            <router-link class="text-lg p-3 hover:border-b-4" to="VehiclesVisualization">Veículos</router-link>
            <router-link class="text-lg p-3 hover:border-b-4" to="RoutesVisualization">Rotas</router-link>
            <router-link class="text-lg p-3 hover:border-b-4" to="PointsVisualization">Pontos</router-link>
        </div>
    </div>
</template>
