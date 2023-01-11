<template>
    <Navbar/>
    <ListLive/> <ListScheduled/>
    <IconWhats/>

    <Footer></Footer>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import ListLive from "../components/ListLive.vue"
import ListScheduled from "../components/ListScheduled.vue"
import Footer from "../components/Footer.vue"
import IconWhats from "../components/iconWhats.vue"


export default {
    components: {
        Navbar: Navbar,
        ListLive: ListLive,
        ListScheduled: ListScheduled,
        Footer: Footer,
        IconWhats:IconWhats
    },
    created() {
  document.body.style.backgroundColor = '#cfcfcf'
},
}
</script>


<style>

</style>