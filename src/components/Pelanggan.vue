<template>
    <div class="container">
        <center><h2>DATA PELANGGAN</h2></center>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAMA</th>
                    <th>ALAMAT</th>
                    <th>TELP</th>
                    <th>USERNAME</th>
                    <th>PASSWORD</th>
                    <th>AKSI</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pelanggan, index) in pelanggan" :key="pelanggan.id">
                    <td>{{index+1}}</td>
                    <td>{{pelanggan.nama}}</td>
                    <td>{{pelanggan.alamat}}</td>
                    <td>{{pelanggan.telp}}</td>
                    <td>{{pelanggan.username}}</td>
                    <td>{{pelanggan.password}}</td>
                    <td><router-link class="btn btn-success" :to="{path: '/editpelanggan/' + pelanggan.id_pelanggan}">Edit</router-link>
                    <a class="btn btn-danger" v-on:click="deletepelanggan(pelanggan.id_pelanggan)">Delete</a></td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-primary" :to="{path:'/tambahpelanggan'}">Tambah Pelanggan</router-link>
        <br><br>
    </div>    
</template>

<script>
export default {
    name: "pelanggan_page",
    data(){
        return {
            pelanggan:[],
        }
    },
    methods:{
        tm_pelanggan:function(){
            var option={
                    headers:{'Authorization':'Bearer '+localStorage.getItem("token")}
            }
            this.axios.get("http://localhost/belajar_toko/public/api/pelanggan",option)
            .then((result)=>{
                console.log(result)
                this.pelanggan=result.data
            })
        },
        deletepelanggan:function(id){
            var option={
                    headers:{'Authorization':'Bearer '+localStorage.getItem("token")}
            }
            this.axios.delete("http://localhost/belajar_toko/public/api/pelanggan/" +id, option)
            .then((result)=>{
                console.log(result)
                this.$router.push('/pelanggan')
                location.reload();
            })
        }
    },
    mounted(){
        this.tm_pelanggan()
    }
}
</script>