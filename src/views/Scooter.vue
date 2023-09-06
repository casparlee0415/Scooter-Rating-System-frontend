<template>
    <div id="app">
        <header class="bg-dark py-5">
            <div class="px-5">
                <div class="text-left mx-5">
                    <router-link to="/brand" class="text-white text-decoration-none">Back to Brand Page</router-link>
                </div>
            </div>
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h3 class="display-4 fw-bolder">All Vehicles</h3>
                    <h2 class="display-4 fw-bolder">Menu</h2>
                    <p class="lead fw-normal text-white-50 mb-0">
                        All newest vehicles' info here.
                    </p>
                </div>
            </div>
        </header>
        <div class="container mt-3">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                
                <ScooterList :scooterList=scooterList />
                
            </div>
        </div>
    </div>
</template>
<script>
import ScooterList from '@/components/ScooterList.vue';
import ScooterService from '@/services/ScooterService';

export default {
    name:'ScooterPage',
    data(){
        return {
            scooterList: []
        }
    },
    components:{
        ScooterList
    },
    methods:{
        retrieveScooters(){
            ScooterService.getAll()
                .then(response=>{
                    this.scooterList=response.data;
                    console.log(response.data);
                }).catch(e=>{
                    console.log(e);
                });
        }
    },
    mounted(){
        this.retrieveScooters();
    }
}
</script>
