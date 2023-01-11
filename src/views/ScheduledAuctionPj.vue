<template>
    <NavbarPj/>
	<IconWhats/>
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
		    <tr>
		      <td class="w-25 zoom">
			      <img src="../assets/imgs_auction/gado_de_corte.jpg" alt="Sheep">
		      </td>
		      <td>LEILÃO ABERTURA DE TEMPORADA 2023 - PROGRAMA E SOMA LEILÕES</td>
		      <td>(66) 2252-1498</td>
		      <td>22/01/2023 | 14:00</td>
		      <td>Cuiabá/MT</td>
		    </tr>
            <tr>
		      <td class="w-25 zoom">
			      <img src="../assets/imgs_auction/leilao_senepol.jpg" alt="Sheep">
		      </td>
		      <td>1° LEILÃO PARANÁ SENEPOL CD</td>
		      <td>(42) 2683-4938</td>
		      <td>24/01/2023 | 20:30</td>
		      <td>Cascavel/PR</td>
		    </tr>
		    <tr>
		      <td class="w-25 zoom">
			      <img src="../assets/imgs_auction/leilao_nelore.jpg" alt="Sheep">
		      </td>
		      <td>LEILÃO NELORE EXCELÊNCIA GENÉTICA</td>
		      <td>(66) 3368-7965</td>
		      <td>26/01/2023 | 20:00</td>
		      <td>Rondonópolis/MT</td>
		    </tr>
            <tr>
		      <td class="w-25 zoom">
			      <img src="../assets/imgs_auction/leilao_nelore_lion.jpg" alt="Sheep">
		      </td>
		      <td>LEILÃO DE REPRODUTORES NELORE LION</td>
		      <td>(67) 2324-1387</td>
		      <td>31/01/2023 | 20:30</td>
		      <td>Ponta Porã/MS</td>
		    </tr>
            <tr>
		      <td class="w-25 zoom">
			      <img src="../assets/imgs_auction/leilao_nelore_elite.jpg" alt="Sheep">
		      </td>
		      <td>LEILÃO ELITE NELORE CLASSIC</td>
		      <td>(38) 3959-8308</td>
		      <td>03/02/2023 | 20:30</td>
		      <td>Uberaba/MG</td>
		    </tr>
            <tr>
		      <td class="w-25 zoom">
			      <img src="../assets/imgs_auction/leilao_carmo.jpg" alt="Sheep">
		      </td>
		      <td>LEILÃO COMITIVA PONTAL - SELEÇÃO DO CARMO</td>
		      <td>(24) 3212-6335</td>
		      <td>04/02/2023 | 14:00</td>
		      <td>Mangaratiba/RJ</td>
		    </tr>
		  </tbody>
		</table>   
    </div>
  </div>
</div>



 
    <Footer/>

</template>

<script>
import NavbarPj from "../components/NavbarPj.vue"
import Footer from "../components/Footer.vue"
import api from '@/services/Auction.js'
import {onMounted, reactive, toRefs} from 'vue'
import IconWhats from "../components/iconWhats.vue"


export default {
    components: {
        NavbarPj: NavbarPj,
        IconWhats: IconWhats,
        Footer: Footer
    },
    
    created() {
  document.body.style.backgroundColor = '#cfcfcf'
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