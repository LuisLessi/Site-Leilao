<template>
    <Navbar/>
    <div class="container">
  <div class="row">
    <div class="col-12">
		<table class="table table-image">
		  <thead>
		    <tr>
		      <th scope="col">ID</th>
		      <th scope="col">Imagem</th>
		      <th scope="col">Titulo</th>
		      <th scope="col">Telefone de contato</th>
		      <th scope="col">Data/Hora</th>
		      <th scope="col">Localização</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr v-for="(city, key) in cities" :key="key">
		      <th scope="row">1</th>
		      <td class="w-25 zoom">
			      <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg" class="img-fluid img-thumbnail" alt="Sheep">
		      </td>
		      <td>Bootstrap 4 CDN and Starter Template</td>
		      <td>Cristina</td>
		      <td>913</td>
		      <td>cuss</td>
		    </tr>
		    <tr>
		      <th scope="row">2</th>
		      <td class="w-25 zoom">
			      <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-5.jpg" class="img-fluid img-thumbnail" alt="Sheep">
		      </td>
		      <td>Bootstrap Grid 4 Tutorial and Examples</td>
		      <td>Cristina</td>
		      <td>1.434</td>
		      <td>3.417</td>
		    </tr>
        <tr>
		      <th scope="row">2</th>
		      <td class="w-25 zoom">
			      <img src="https://s2.glbimg.com/gWNjnRFrF2rZmJ896Ri-ZHRoFxA=/780x440/e.glbimg.com/og/ed/f/original/2018/08/09/plantel_adir.jpg" alt="Sheep">
		      </td>
		      <td>Bootstrap Grid 4 Tutorial and Examples</td>
		      <td>Cristina</td>
		      <td>1.434</td>
		      <td>3.417</td>
		    </tr>
		  </tbody>
		</table>   
    </div>
  </div>
</div>



 
    <Footer/>

</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import api from '@/services/api.js'
import {onMounted, reactive, toRefs} from 'vue'

export default {
    components: {
        Navbar: Navbar,
        
        Footer: Footer
    },
    //Expose the API data
    setup(){
      const  data = reactive ({
        cities: { },
      });
        onMounted(async() => {
          const response = await api.allCities();
          data.cities = response.data

        })

        return {...toRefs(data)}
    },

}

</script>

<style scoped>
.container {
  padding: 2rem 0rem;
}

h4 {
  margin: 2rem 0rem 1rem;
}

.table-image td{
  vertical-align: middle;

}
.table-image th{
  vertical-align: middle;

}
.zoom {
    overflow: hidden;
}

.zoom img {
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

.zoom:hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
#footer{
    position: relative;
    height: 100px;
    background-color: #0c6cfc;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    width: 100%;
}
</style>