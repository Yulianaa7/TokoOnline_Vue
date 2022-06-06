<template>
    <div class="container">
        <center><h3>Tambah Produk</h3></center>
        Nama Produk
        <input type="text" name="nama_produk" v-model="nama_produk" class="form-control">
        <br>

        Deskripsi
        <textarea rows="4" class="form-control" v-model="deskripsi" name="deskripsi"></textarea>
        <br>

        Harga
        <input type="number" name="harga" v-model="harga" class="form-control">
        <br>

        Foto Produk
        <input type="text" name="foto_produk" v-model="foto_produk" class="form-control">
        <br>

        <button class="btn btn-primary" @click="simpanproduk()">SIMPAN</button>
        <p></p>
    </div>
</template>

<script>
export default {
    name:"tambahproduk_page",
    data(){
        return{
            nama_produk:'',
            deskripsi:'',
            harga:'',
            foto_produk:'',
            style_mess:'',
            message:'',
        }
    },
    methods:{
        simpanproduk:function(){
            var option={
                    headers:{'Authorization':'Bearer '+localStorage.getItem("token")}
            }
            var data = {
                nama_produk : this.nama_produk,
                deskripsi: this.deskripsi,
                harga: this.harga,
                foto_produk: this.foto_produk,
            }
            this.axios.post("http://localhost/belajar_toko/public/api/produk", data, option)
            .then((result)=> {
                console.log(result)
                this.$router.push('/produk')
            })
        }
    },
    mounted(){

    }
}
</script>