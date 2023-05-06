<template>
    <b-navbar  class="px-10" toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">Banck Project</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- Enlaces de router a la izquierda -->
        <b-nav-item to="/Inicio">Inicio</b-nav-item>
        <b-nav-item to="/acerca">Acerca</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <!-- Enlaces de router a la derecha -->
        <b-nav-item to="/proyectos">Proyectos</b-nav-item>
        <b-nav-item to="/mis-proyectos">Registrar</b-nav-item>
        <b-nav-item to="/mis-proyectos">login</b-nav-item>

  
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
<style>
/* Barra de navegacion */

.navbar {
  padding: 2rem;

  background-color: #1885f3;
}

.navbar-collapse {
  align-items: center;
  justify-content: space-between;  
}
</style>
