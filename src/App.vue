<template>
  <MenuVue/>
  <router-view/>
</template>


<script>
import MenuVue from '@/components/Menu.vue';

export default {
  name: 'App',
  components:{
    MenuVue
  }
}

</script>
