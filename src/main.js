import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'

import {createWebHistory, createRouter} from 'vue-router';
import Home from './components/Home.vue'
import Pelanggan from './components/Pelanggan.vue'
import Produk from './components/Produk.vue'
import Barang from './components/Barang.vue'
import Keranjang from './components/keranjang.vue'
import TambahPelanggan from './components/TambahPelanggan.vue'
import EditPelanggan from './components/EditPelanggan.vue'
import TambahProduk from './components/TambahProduk.vue'
import EditProduk from './components/EditProduk.vue'
import Login from './components/Login.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path : '/', name: "Home", component : Home},
        {path : '/pelanggan', name: "Pelanggan", component : Pelanggan},
        {path : '/produk', name: "Produk", component : Produk},
        {path : '/barang', name: "Barang", component : Barang},
        {path : '/keranjang', name: "Keranjang", component : Keranjang},
        {path : '/tambahpelanggan', name: "TambahPelanggan", component : TambahPelanggan},
        {path : '/editpelanggan/:id', name: "EditPelanggan", component : EditPelanggan},
        {path : '/tambahproduk', name: "TambahProduk", component : TambahProduk},
        {path : '/editproduk/:id', name: "EditProduk", component : EditProduk},
        {path : '/login', name: "Login", component : Login},
    ],
    base: '/'
})

const app = createApp(App)
app.use(router)
app.use(store)
app.config.globalProperties.axios = axios //agar axios bisa dibaca dan bisa digunakan dalam vue cli
app.mount("#app")