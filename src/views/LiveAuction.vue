<template>
    <Navbar/>
    <IconWhats/>
	
	<section class="pt-5 pb-5">
		<div class="container">
        <div class="row">
            <div class="col-3">
                <h3 class="mb-3">Ao vivo 🔴</h3>
            </div>
            <div class="col-6 text-right">
                <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    🢀
                </a>
				&nbsp&nbsp&nbsp&nbsp&nbsp

                <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    🢂
                </a>
            </div>
            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card zoom">
                                        <img class="img-fluid" alt="100%x280" src="../assets/imgs_auction/leilao_live1.png">
                                        <div class="card-body">
                                            <h4 class="card-title">Leilão Mega Shopping de Verão Canal Business.</h4>
                                        </div>
										<div class="card-footer ">(67) 2441-1533</div>
										<div class="card-footer ">Dourados/MS</div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card zoom">
                                        <img class="img-fluid" alt="100%x280" src="../assets/imgs_auction/leilao_live2.jpeg">
                                        <div class="card-body">
                                            <h4 class="card-title">Leilão Quatro Amigos & Deleboca</h4>
                                        </div>
										<div class="card-footer ">(53) 3354-1645</div>
										<div class="card-footer ">Bagé/RS</div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card zoom">
                                        <img class="img-fluid" alt="100%x280" src="../assets/imgs_auction/leilao_live3.png">
                                        <div class="card-body">
											<h4 class="card-title">1º Ramate Pampa Texel  </h4>
                                        </div>
										<div class="card-footer ">(53) 3354-1645</div>
										<div class="card-footer ">Bagé/RS</div>
                                    </div>
                                </div>
								

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card zoom">
                                        <img class="img-fluid" alt="100%x280" src="../assets/imgs_auction/leilao_live4.png">
                                        <div class="card-body">
											<h4 class="card-title">Remate Da Quinta</h4>
                                        </div>
										<div class="card-footer ">(55) 99974-1064</div>
										<div class="card-footer ">Ibirapuitã/RS</div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card zoom">
                                        <img class="img-fluid" alt="100%x280" src="../assets/imgs_auction/leilao_live5.jpg">
                                        <div class="card-body">
											<h4 class="card-title">SANTA FÉ LEILÕES e SINDICATO RURAL SJRP</h4>
                                        </div>
										<div class="card-footer ">(19) 99237-6849</div>
										<div class="card-footer ">Itobi/SP</div>
                                    </div>
                                </div>
								<div class="col-md-4 mb-3">
                                    <div class="card zoom">
                                        <img class="img-fluid" alt="100%x280" src="../assets/imgs_auction/leilao_live6.jpg">
                                        <div class="card-body">
											<h4 class="card-title">Pains leilões Online MG</h4>
                                        </div>
										<div class="card-footer ">(37) 99981-1246</div>
										<div class="card-footer ">Pains/MG</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
 
    <Footer/>

</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import IconWhats from "../components/iconWhats.vue"

export default {
    components: {
        Navbar: Navbar,
        IconWhats: IconWhats,
        Footer: Footer
    },
    
	created() {
  document.body.style.backgroundColor = '#cfcfcf'
},
}

</script>

<style scoped>
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