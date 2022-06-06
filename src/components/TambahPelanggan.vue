<template>
    <div class="container">
        <center><h3>Tambah Pelanggan</h3></center>
        Nama 
        <input type="text" name="nama" v-model="nama" class="form-control">
        <br>

        Alamat
        <textarea rows="4" class="form-control" v-model="alamat" name="alamat"></textarea>
        <br>

        Telp
        <input type="number" name="telp" v-model="telp" class="form-control">
        <br>

        Username 
        <input type="text" name="username" v-model="username" class="form-control">
        <br>

        Password 
        <input type="text" name="password" v-model="password" class="form-control">
        <br>

        <button class="btn btn-primary" @click="simpanpelanggan()">SIMPAN</button>
        <p></p>
    </div>
</template>

<script>
export default {
    name:"tambahpelanggan_page",
    data(){
        return{
            nama:'',
            alamat:'',
            telp:'',
            username:'',
            password:'',
            style_mess:'',
            message:'',
        }
    },
    methods:{
        simpanpelanggan:function(){
            var option={
                    headers:{'Authorization':'Bearer '+localStorage.getItem("token")}
            }
            var data = {
                nama : this.nama,
                alamat: this.alamat,
                telp: this.telp,
                username: this.username,
                password: this.password
            }
            this.axios.post("http://localhost/belajar_toko/public/api/pelanggan", data, option)
            .then((result)=> {
                console.log(result)
                this.$router.push('/pelanggan')
            })
        }
    },
    mounted(){

    }
}
</script>