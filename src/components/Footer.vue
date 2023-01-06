<template>

<footer id="footer">
    <p>Leilões Start, Inc &copy; 2023</p>
    <br>
    <ul class='social_list '>
    <li>
        <a class="icons" target="_blank" href="https://www.facebook.com/DIXXDIGITAL"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
    </li>
        <a class="icons" target="_blank" href="https://www.instagram.com/_dixdigital/"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
    <li>
    <a class="icons" target="_blank" href="https://www.linkedin.com/company/dixdigital/"><font-awesome-icon :icon="['fab', 'linkedin']"/></a>
    </li>
    </ul>
</footer>
</template>

<script>

</script>

<style scoped>
.container{
    background-color: #0c6cfc;
    position: absolute;
bottom: 0;

}

#footer{
    position: absolute;
    height: 100px;
    background-color: #0c6cfc;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    width: 100%;
}

a:-webkit-any-link {
    text-decoration: none;
    color: white;
    cursor: pointer;
  }
.icons:hover{
    cursor:"pointer"
}
a:-webkit-any-link:hover{
    color: black;
}

.social_list {
    display: flex;
    justify-content: center;
    list-style-type: none;
    text-decoration: none 

}

.social_list li{
    margin: 0 1em;
    text-decoration: none 

}


</style>