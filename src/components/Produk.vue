<template>
    <div class="container">
        <center><h2>DATA PRODUK</h2></center>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAMA PRODUK</th>
                    <th>DESKRIPSI</th>
                    <th>HARGA</th>
                    <th>FOTO PRODUK</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(produk, index) in produk" :key="produk.id">
                    <td>{{index+1}}</td>
                    <td>{{produk.nama_produk}}</td>
                    <td>{{produk.deskripsi}}</td>
                    <td>{{produk.harga}}</td>
                    <td>{{produk.foto_produk}}</td>
                    <td><router-link class="btn btn-success" :to="{path: '/editproduk/' + produk.id_produk}">Edit</router-link>
                    <a class="btn btn-danger" v-on:click="deleteproduk(produk.id_produk)">Delete</a></td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-primary" :to="{path:'/tambahproduk'}">Tambah Produk</router-link>
        <br><br>
    </div>    
</template>

<script>
export default {
    name: "produk_page",
    data(){
        return {
            produk:[],
        }
    },
    methods:{
        tm_produk:function(){
            var option={
                    headers:{'Authorization':'Bearer '+localStorage.getItem("token")}
            }
            this.axios.get("http://localhost/belajar_toko/public/api/produk", option)
            .then((result)=>{
                this.produk=result.data
            })
        },
        deleteproduk:function(id){
            var option={
                    headers:{'Authorization':'Bearer '+localStorage.getItem("token")}
            }
            this.axios.delete("http://localhost/belajar_toko/public/api/produk/" +id, option)
            .then((result)=>{
                console.log(result)
                this.$router.push('/produk')
                location.reload();
            })
        }
    },
    mounted(){
        this.tm_produk()
    }
}
</script>