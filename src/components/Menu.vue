<template>
    <div id="app">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <router-link to="/index" class="navbar-brand">Scooter Rating System</router-link>
            <div class="navbar-nav mr-auto">
                <li class="nav-item" id="homelink">
                    <router-link to="/index" class="nav-link text-white">Home</router-link>
                </li>
                <li class="nav-item" id="brandlink">
                    <router-link to="/brand" class="nav-link text-white">Brand</router-link>
                </li>
                <li class="nav-item" id="scooterlink">
                    <router-link to="/scooter" class="nav-link text-white">Scooter</router-link>
                </li>
            </div>
            <div class="mx-right text-white">
                
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name: "MenuNav",
}
</script>
