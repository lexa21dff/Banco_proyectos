<template>
    <div class="container" id="app">
  <h1>Login</h1>
  <form @submit.prevent="submitForm">
 
    <div class="mb-3">
      <label for="username" class="form-label">Username</label>
      <input type="text" class="form-control" id="username" name="username" v-model="username">
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" name="password" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            username: '',
            password: '',
            errors: []
        }
    },
    mounted() {
        
    },
    methods: {
        submitForm() {
            console.log('submitForm')
            axios.defaults.headers.common['Authorization'] = ""
            localStorage.removeItem('token')
            this.errors = []
            if (this.username === '') {
                this.errors.push('The username is missing!')
            }
            if (this.password === '') {
                this.errors.push('The password is missing!')
            }
            if (!this.errors.length) {
                const formData = {
                    username: this.username,
                    password: this.password
                }
                axios
                    .post('http://127.0.0.1:8000/api/login/', formData)
                    .then(response => {
                        const token = response.data.access_token
                        const username = response.data.username
                        const rol = response.data.otro

                        this.$store.commit('setToken', token)
                        this.$store.commit('setUsername', username)
                        this.$store.commit('setRol', rol)
                        axios.defaults.headers.common['Authorization'] = "Token " + token
                        localStorage.setItem('token', token)
                        this.$router.push('/ListaProyecto')
                    })
                    .catch(error => {
                        if (error.response) {
                            for (const property in error.response.data) {
                                this.errors.push(`${property}: ${error.response.data[property]}`)
                            }
                            console.log(JSON.stringify(error.response.data))
                        } else if (error.message) {
                            this.errors.push('Something went wrong. Please try again')
                            
                            console.log(JSON.stringify(error))
                        }
                    })
            }
        }
    }
}
</script> 