<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h2>Halaman Login</h2>
                <form>
                    Email:
                    <input type="text" name="email" class="form-control" v-model="email">

                    Password:
                    <input type="password" name="password" class="form-control" v-model="password">
                    <button type="button" class="btn btn-success" v-on:click="login()">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: "Login_page",
        data(){
            return{
                email   :'',
                password:'',
            }
        },
        methods:{
            login : function(){
                var data={
                    email:this.email,
                    password:this.password
                }

                this.axios.post("http://localhost:8000/api/login", data).then((result)=>{
                    console.log(result)
                    localStorage.setItem('token', result.data.token)
                    localStorage.setItem('user', JSON.stringify(result.data.token))
                    localStorage.setItem('status', true)
                    console.log(result)
                    this.$emit('authenticated', true)
                    location.href="/"
                }).catch(error=>{
                    console.log(error)
                    alert('Incorrect Password')
                })
            }
        },
        mounted(){
            this.$emit('authenticated', false)
        }
    }
</script>
