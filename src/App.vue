<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="authenticated">
    <a class="navbar-brand" href="#">JEN STORE</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">
            <a>Home</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pelanggan" class="nav-link">
            <a>Pelanggan</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/produk" class="nav-link">
            <a>Produk</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/barang" class="nav-link">
            <a>Barang</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" v-on:click="logout()" class="nav-link">
            <a>Logout</a>
          </router-link>
        </li>
      </ul>
</div>
  </nav>
  <router-view @authenticated="setAuthenticated"></router-view>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      // authenticated:JSON.parse(localStorage.getItem('status'))
      authenticated: localStorage.getItem('status')
    }
  },
  methods:{ 
    setAuthenticated(status){
      this.authenticated=status
    },
    logout(){
      this.authenticated=false
      localStorage.removeItem('status')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  },
  mounted(){
    this.$store.commit('updateCartFromLocalStorage');
    if(!this.authenticated){
      this.$router.replace({name: "Login"}); //misalkan sudah logout maka langsung dilempar ke login
    }
  }
}
</script>