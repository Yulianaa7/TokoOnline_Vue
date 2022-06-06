<template>
    <div><br><br>
        <div class="container">
            <div class="card"><br>
                <h3 class="card-title"><center>Edit Produk</center></h3>
                <div class="card-body">

                    <input type="hidden" class="form-control" id="id_produk" v-model="id_produk">

                    <div class="mb-3">
                        <label for="nama_produk" class="form-label">Nama Produk</label>
                        <input type="text" class="form-control" id="nama_produk" v-model="nama_produk" placeholder="nama_produk">
                    </div>

                    <div class="mb-3">
                        <label for="deskripsi" class="form-label">Deskripsi</label>
                        <textarea class="form-control" v-model="deskripsi" id="deskripsi" rows="3"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="harga" class="form-label">Harga</label>
                        <input type="harga" class="form-control" id="harga" v-model="harga" placeholder="harga">
                    </div>

                    <div class="mb-3">
                        <label for="foto_produk" class="form-label">Foto Produk</label>
                        <input type="text" class="form-control" id="foto_produk" v-model="foto_produk" placeholder="foto_produk">
                    </div>

                    <button @click="edit()" type="submit" class="btn btn-primary">Edit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "edit_produk",
        data() {
            return {
                id_produk : "",
                nama_produk : "",
                deskripsi : "",
                harga : "",
                foto_produk : "",
            }
        },
        methods : {
            getDetail(id){
                var option={
                    headers:{'Authorization':'Bearer '+localStorage.getItem("token")}
            }
                this.axios.get('http://localhost/belajar_toko/public/api/produk/'+id, option)
                .then(response => {
                    //vmodel
                    this.id_produk      = response.data[0].id_produk,
                    this.nama_produk    = response.data[0].nama_produk,
                    this.deskripsi      = response.data[0].deskripsi,
                    this.harga          = response.data[0].harga,
                    this.foto_produk    = response.data[0].foto_produk
                })
            },
            edit(){
                var option={
                    headers:{'Authorization':'Bearer '+localStorage.getItem("token")}
                }
                let form = {
                    //back end    //state
                    'nama_produk'   : this.nama_produk,
                    'deskripsi'     : this.deskripsi,
                    'harga'         : this.harga,
                    'foto_produk'   : this.foto_produk
                }
                
                this.axios.put("http://localhost/belajar_toko/public/api/produk/"+this.id_produk, form, option)
                    .then(response =>{
                        console.log(response)
                        this.$router.push('/produk')
                    })
                }
        },
        mounted(){
            this.getDetail(this.$route.params.id)
        }
        
    }
</script>