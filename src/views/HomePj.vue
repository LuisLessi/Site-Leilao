<template>
 <NavbarPj/>

 <ListLive/> <ListScheduled/>
 <IconWhats/>

<Footer></Footer>
</template>

<script>
import NavbarPj from "../components/NavbarPj.vue"
import ListLive from "../components/ListLive.vue"
import ListScheduled from "../components/ListScheduled.vue"
import Footer from "../components/Footer.vue"
import IconWhats from "../components/iconWhats.vue"


export default {
    components: {
        NavbarPj: NavbarPj,
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