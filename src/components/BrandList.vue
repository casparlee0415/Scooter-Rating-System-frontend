<template>
    <div class="col mb-5" v-for="(brand, index) in brandList" :key="index">
        <div class="card h-100">
            
            <img class="card-img-top" :src="'/img/brand/'+brand.name+'.jpeg'" alt="..."/>
            
            <div class="card-body d-flex flex-column">
                <div class="text-center mt-auto">
                    <h5 class="fw-bolder">{{brand.name}}</h5>
                </div> 
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                
                <router-link :to="'/brand/'+brand.id" class="btn btn-outline-dark mt-auto">進入品牌</router-link>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    name: "BrandList",
    props: {
        brandList:Array
    }
};
</script>
