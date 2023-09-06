<template>
    <div id="app">
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">後悔高中花錢裝很吵的排氣管</h1>
                    <p class="lead fw-normal text-white-50 mb-0">
                            讓你在有限預算內買到最好機車
                    </p>
                </div>
            </div>
        </header>
        <div class="container mt-3">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <BrandList :brandList=brandList />
            </div>
        </div>
    </div>
</template>
<script>
import BrandService from '@/services/BrandService'
import BrandList from '@/components/BrandList.vue'

export default {
    name: "BrandPage",
    data(){
        return {
            brandList: []
        }
    },
    components:{
        BrandList,
    },
    methods:{
        retrieveBrands(){
            BrandService.getAll()
                .then(response=>{
                    this.brandList=response.data;
                    console.log(response.data);
                }).catch(e=>{
                    console.log(e);
                });
        }
    },
    mounted(){
        this.retrieveBrands();
    }
};
</script>
