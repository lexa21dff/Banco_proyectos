<template>
    <nav class="navbar navbar-expand-md navbar-light">
      <div class="container-fluid">
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> -->

        <div class="collapse navbar-collapse" id="navbar-toggler">
           <!-- <a class="navbar-brand" href="#">
            <img src="imagenes/icono.png" width="50" alt="Logo de la página web">
          </a>  -->
            <div class="navbar-brand" >
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">inicio</a>
                    </li>
                    <li class="nav-item">
                      <router-link class="nav-link active" aria-current="page" to="/ListaProyecto ">Proyectos</router-link>
                    </li>
                </ul>
            </div>
            <div class="navbar-nav d-flex justify-content-center align-items-center">
                <template v-if="$store.state.user.isAuthenticated">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                          <router-link class="nav-link active" aria-current="page" to="crearProyecto ">Crear Proyectos</router-link>
                            
                        </li>
                        <li class="nav-item">
                            <button @click="logout()" class="nav"  >Log out</button>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link active" aria-current="page" to="crearProyecto ">{{ username }}</router-link>
                            
                        </li>
                    </ul>
                </template>
                <template v-else>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="registrar">registrar</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="login">login</router-link>
                        </li>
                    </ul>
                </template>
            </div>         
        </div>
      </div>
    </nav>
</template>

<script>
import axios from 'axios'

export default {
    data() {
      return {
        username : this.$store.state.username,
        courses: []
      }
    },
    methods: {
        async logout() {
            console.log('logout')

            await axios
              .post('api/token/logout/')
              .then(response => {
                console.log(response)
                console.log('Logged out')
              })
              .catch(error => {
                console.log(error)
              })

            axios.defaults.headers.common['Authorization'] = ""

            localStorage.removeItem('token')

            this.$store.commit('removeToken')
            this.$store.commit('clearState')


            this.$router.push('/inicio')
        }
    }
}
</script>
<style >
.navbar {
  padding: 2rem;
  background-color: #B2EBF2;
}

.navbar-collapse {
  align-items: center;
  justify-content: space-between;  
}
</style>