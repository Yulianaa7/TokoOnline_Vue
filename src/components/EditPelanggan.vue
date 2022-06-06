<template>
    <div class="container border mt-4 rounded">
        <h3 class="mt-3">Edit Pelanggan</h3>
        <form>
            <input type="hidden" class="form-control" id="id_pelanggan" v-model="id_pelanggan">

            <div class="mb-3">
                <label for="nama" class="form-label">Nama</label>
                <input type="text" class="form-control" id="nama" v-model="nama">
            </div>
            <div class="mb-3">
                <label for="alamat" class="form-label">Alamat</label>
                <textarea type="text" class="form-control" id="alamat" v-model="alamat"></textarea>
            </div>
            <div class="mb-3">
                <label for="telp" class="form-label">Telp</label>
                <input type="text" class="form-control" id="telp" v-model="telp">
            </div>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" v-model="username">
            </div>
                <input type="hidden" class="form-control" id="password" v-model="password">
        
            <button @click="edit()" type="submit" class="btn btn-primary">Edit</button>
        </form> 
    </div>
</template>

<script>
    export default {
        name: 'EditPelanggan_page',
        data(){
            return{
                //vmodel
                id_pelanggan: '',
                nama: '',
                alamat: '',
                telp: '',
                username: '',
                password: ''
            }
        },
        methods:{
            getDetail(id){
                var option={
                    headers:{'Authorization':'Bearer '+localStorage.getItem("token")}
                }
                this.axios.get('http://localhost/belajar_toko/public/api/pelanggan/'+id, option)
                .then(res => {
                    //vmodel
                    this.id_pelanggan = res.data[0].id_pelanggan,
                    this.nama= res.data[0].nama,
                    this.alamat= res.data[0].alamat,
                    this.telp= res.data[0].telp,
                    this.username= res.data[0].username,
                    this.password = res.data[0].password
                })
            },
            edit(){
                var option={
                    headers:{'Authorization':'Bearer '+localStorage.getItem("token")}
                }
                let data = {
                    id_pelanggan: this.id_pelanggan,
                    nama: this.nama, 
                    alamat: this.alamat,
                    telp: this.telp,
                    username: this.username,
                    password: this.password
                }
                
                this.axios.put("http://localhost/belajar_toko/public/api/pelanggan/"+this.id_pelanggan, data, option)
                .then(res => {
                    console.log(res)
                    this.$router.push('/pelanggan')
                })
            }
        },
        mounted(){
            this.getDetail(this.$route.params.id)
        }
    }
</script>
