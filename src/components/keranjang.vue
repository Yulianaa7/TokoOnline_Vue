<template>
    <div class="container">
        <center><h1>LIST KERANJANG</h1></center>
        <table class="table table-hover table-striped">
            <thead>
                <tr>
                    <th>Nama Barang</th>
                    <th>Qty</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cart in getcart" :key="cart.id">
                    <td>{{cart.nama_produk}}</td>
                    <td>{{cart.quantity}}</td>
                    <td><button class="btn btn-danger">X</button> <button class="btn btn-success">V</button></td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-primary" v-on:click="simpan_db()">Checkout</button>
    </div>    
</template>

<script>
export default {
    name: "cart_page",
    computed:{
        getcart(){
            return this.$store.getters.cartItems
        }
    },
    methods:{
        simpan_db(){
            var option = {
                headers:{
                    'Authorization' : 'Bearer ' + localStorage.getItem('token')
                }
            };
            var data = {
                datapost: this.$store.getters.cartItems
            }
            this.axios.post("http://localhost:80/belajar_toko/public/api/storecarttodb", data, option).then((result)=>{
                if(result.data.status==true){
                    alert(result.data.message)
                    this.$store.commit('reset')
                    this.$route.push('/barang')
                }
                //console.log(data)
            })
        }
    }
}
</script>
