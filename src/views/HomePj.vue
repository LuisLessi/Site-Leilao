<template>
 <NavbarPj/>
 <ListLive/> <ListScheduled/>
    
<Footer></Footer>
</template>

<script>
import NavbarPj from "../components/NavbarPj.vue"
import ListLive from "../components/ListLive.vue"
import ListScheduled from "../components/ListScheduled.vue"
import Footer from "../components/Footer.vue"

export default {
    components: {
        NavbarPj: NavbarPj,
        ListLive: ListLive,
        ListScheduled: ListScheduled,
        Footer: Footer
    },
    created() {
  document.body.style.backgroundColor = '#cfcfcf'
},
}
</script>

<style>

</style>