<template>
    <Navbar/>

    <ListLive/> <ListScheduled/>
    
    <Footer></Footer>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import ListLive from "../components/ListLive.vue"
import ListScheduled from "../components/ListScheduled.vue"
import Footer from "../components/Footer.vue"


export default {
    components: {
        Navbar: Navbar,
        ListLive: ListLive,
        ListScheduled: ListScheduled,
        Footer: Footer
    }
}
</script>


<style>

</style>