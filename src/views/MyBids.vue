<template>
    <NavbarPj/>
    <form @submit.prevent="createPost">

    <div class="container">
  <div class="row">
    <div class="col-12">
		<table class="table table-image">
		  <thead>
		    <tr>
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
			      <img ref="imgPhoto" id="imgPhoto" @click="imgPhotoLoad" src="../assets/selected_img.jpg" class="img-fluid img-thumbnail" alt="Sheep">
            <input type="file"  ref="flImage" id="flImage" name="flImage" class="flImage" @change="filePhotoLoad" accept="image/*">
 
          </td>
		      <td><input v-model="auction.title" placeholder="Digite o titulo do lance" type="text"></td>
		      <td><input v-model="auction.phone" maxlength="11" v-mask="['(##) ####-####']" placeholder="Número de contato" type="phone"></td>
		      <td><input v-model="auction.date " placeholder="Data e hora " type="date" maxlength="13"></td>
		      <td><input v-model="auction.loc" placeholder="Cidade/Estado" type="text"></td>
		    </tr>
   
		  </tbody>
      <button type="submit" class="btn btn-outline-success mt-5">Publicar</button>

		</table>   
    </div>
  </div>
</div>



</form>
    <Footer/>

</template>

<script>
import NavbarPj from "../components/NavbarPj.vue"
import Footer from "../components/Footer.vue"
import Auction from '@/services/Auction.js'
import {onMounted, reactive, toRefs} from 'vue'

export default {
  data() {
    return {
      tipoForm: "PF",
      auction:{
        title: "",
        image: "",
        phone: "",
        date: "",
        loc: "",
      },
    }
  },
    components: {
        NavbarPj: NavbarPj,
        
        Footer: Footer
    },
    
    methods: {

      createPost(){
        Auction.createPost(this.auction).then(resposta =>{
        console.log(resposta.data)
        alert('Post criado com sucesso')
      })
    },

      imgPhotoLoad(){
      this.$refs.flImage.click()
    },
    filePhotoLoad(){
      if (this.$refs.flImage.files.length <= 0) {
        return;
    }
    let reader = new FileReader();
    reader.onload = () => {
      this.$refs.imgPhoto.src = reader.result;
    }
    reader.readAsDataURL(this.$refs.flImage.files[0])
    }
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

    cursor: pointer;
}

.zoom:hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
#flImage{
  display: none;
}
#imgPhoto{
  max-width: 60%;
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
</style>