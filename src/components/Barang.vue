<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h2 align="center">Daftar Barang</h2>
                <modal :detail="produk"/>
                <div class="row">
                    <div class="col-md-3" v-for="produk in listproduk" :key="produk.id">
                    <div class="card">
                        <img v-bind:src="'http://localhost:80/belajar_toko/public/foto_produk/' + produk.foto_produk" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{produk.nama_produk}} <span v-if="getcount(produk)!==null"> ({{getcount(produk)}}) </span>
                            <span v-else>(0)</span></h5>
                            <p class="card-text">{{produk.deskripsi}}</p>
                            <a class="btn btn-primary" style="color:white" v-on:click="addToCart(produk)">Add To Cart</a> <a href="#" class="btn btn-primary" data-target="#show_detail" data-toggle="modal" v-on:click="view_product(produk)">Show</a>
                        </div>
                    </div>
                    </div>
                </div>
                <p></p>
                <router-link to="/keranjang" class="btn btn-success">Lihat Keranjang</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import modal from '../components/modal.vue'
export default {
    name : "Barang_page",
    components:{
        modal
    },
    data(){
        return {
            listproduk:[],
            produk:null,
        }
    },
    methods:{
        getproduk(){
            var option={
                    headers:{'Authorization':'Bearer '+localStorage.getItem("token")}
            }
            this.axios.get("http://localhost/belajar_toko/public/api/produk",option)
            .then((result)=>{
                console.log(result)
                this.listproduk=result.data
            })
        },
        view_product(produk){
            this.produk = produk
            console.log(this.produk)
        },
        addToCart(produk){
            this.$store.commit('addToCart', produk)
            // this.getcount()
        },
        getcount(produk){
            return this.$store.getters.productQuantity(produk)
        }
    },
    mounted(){
        this.getproduk()
    },
}
</script>