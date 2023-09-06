<template>
    <div id="app">
        <header class="bg-dark py-5">
            <div class="px-5">
                <div class="text-left mx-5">
                    <router-link to="/brand" class="text-white text-decoration-none">Back to Brand Page</router-link>
                </div>
            </div>
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white my-5">
                    <img class="fw-bolder" :src="'/img/brand/'+brand.name+'.jpeg'" alt="..."/>
                </div>
                <div class="text-center text-white">
                    
                    <h1 class="display-4 fw-bolder">{{brand.name}}</h1><br>
                    <h2 class="display-4 fw-bolder">Vehicle Menu</h2>
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
import BrandService from '@/services/BrandService'
import ScooterService from '@/services/ScooterService'
import ScooterList from '@/components/ScooterList.vue'

export default {
    name: "BrandDetail",
    data(){
        return {
            brand: {},
            scooterList: []
        }
    },
    components:{
        ScooterList,
    },
    methods:{
        retrieveBrand(id){
            BrandService.getById(id)
                .then(response=>{
                    this.brand=response.data;
                    console.log(response.data)
                }).catch(e=>{
                    console.log(e);
                });
        },
        retrieveScooters(id){
            ScooterService.getByBrandId(id)
                .then(response=>{
                    this.scooterList=response.data.scooterList;
                    
                    console.log(response.data.scooterList);
                }).catch(e=>{
                    console.log(e);
                });
        }
    },
    mounted(){
        this.retrieveBrand(this.$route.params.id);
        this.retrieveScooters(this.$route.params.id);
    }
};
</script>
