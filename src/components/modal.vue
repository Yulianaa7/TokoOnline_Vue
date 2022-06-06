<template>
    <div class="modal" id="show_detail" tabindex="-1" v-if="detail">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{detail.nama_produk}}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
        </div>
        <div class="modal-body">
            <img v-bind:src="'http://localhost:80/belajar_toko/public/foto_produk/' + detail.foto_produk" style="width:100%">
            <p>{{detail.deskripsi}}</p>
            <p v-if="getcount">{{getcount}}</p>
            <p v-else>0</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <a href="#" class="btn btn-primary" v-on:click="addToCart()">Add To Cart</a> <a href="#" class="btn btn-primary" v-on:click="removeItem()">Kurangi</a>
        </div>
    </div>
  </div>
</div>
</template>
<script>
export default{
    props:['detail'],
    name: 'modal_page',
    // data(){
    //     return{
    //         count:0,
    //     }
    // },
    methods:{
        addToCart(){
            this.$store.commit('addToCart', this.detail)
            // this.getcount()
        },
        removeItem(){
            this.$store.commit('removeFromProduct', this.detail)
        }
        // getcount(){
        //     this.count=this.$store.getters.productQuantity(this.detail)
        // }
    },
    computed:{
        getcount(){
            return this.$store.getters.productQuantity(this.detail)
        }
    }
    // mounted(){
    //     this.getcount()
    // }
}
</script>
