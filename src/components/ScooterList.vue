<template>
    
        <div class="col mb-5" v-for="(scooter, index) in scooterList" :key="index">
        <div class="card h-100">
            
            <img class="card-img-top" :src="'/img/scooter/'+scooter.name+'.jpeg'" alt="..."/>
            
            <div class="card-body d-flex flex-column">
                <div class="text-center mt-auto">
                    <h5 class="fw-bolder">{{scooter.name}}</h5>
                </div> 
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                
                <router-link :to="'/scooter/'+scooter.id" class="btn btn-outline-dark mt-auto">Enter</router-link>
            </div>
        </div>
    
    </div>
</template>
<script>


export default {
    name: "ScooterList",
    props: {
        scooterList: []
    }
};
</script>
