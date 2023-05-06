<template>
  <b-navbar  class="navbar px-10" toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">Mi Sitio</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse   id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- Enlaces de router a la izquierda -->
        <b-nav-item to="/Inicio">Inicio</b-nav-item>
        <b-nav-item to="/acerca">Acerca</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <!-- Enlaces de router a la derecha -->
        <b-nav-item to="/proyectos">Proyectos</b-nav-item>
        <b-nav-item to="/mis-proyectos">Mis Proyectos</b-nav-item>

        <b-nav-item-dropdown text="Mis Proyectos" right>
          <b-dropdown-item to="/crear-proyecto">Crear Proyecto</b-dropdown-item>
          <b-dropdown-item to="/ver-proyecto">Ver Proyecto</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Grupo" >
          <b-dropdown-item to="/crear-proyecto">Crear Grupo</b-dropdown-item>
          <b-dropdown-item to="/ver-proyecto">Ver Grupo</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/mis-proyectos" @click="logout()" >logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
  import axios from 'axios'
import { BNavbar, BNavbarBrand, BNavbarToggle, BCollapse, BNavbarNav, BNavItem, BNavItemDropdown, BDropdownItem } from 'bootstrap-vue';

export default {
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
    BNavItem,
    BNavItemDropdown,
    BDropdownItem,
  },
  methods: {
        async logout() {
            console.log('logout')

            // await axios
            //   .post('api/token/logout/')
            //   .then(response => {
            //     console.log(response)
            //     console.log('Logged out')
            //   })
            //   .catch(error => {
            //     console.log(error)
            //   })

            axios.defaults.headers.common['Authorization'] = ""

            localStorage.removeItem('token')

            this.$store.commit('removeToken')
            this.$store.commit('clearState')


            this.$router.push('/inicio')
        }
    }
}
</script>
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
