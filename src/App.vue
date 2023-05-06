<template>
  <div >
<<<<<<< HEAD
    <template v-if="$store.state.user.isAuthenticated">
      <template v-if="rol ='Aprendiz' ">

        <NabvarAprendiz></NabvarAprendiz>
      </template>
      <template v-else>
        <NabvarInstructor></NabvarInstructor>
      </template>
    </template>
    <template v-else>
      <Nabvar></Nabvar>
=======
    <template  v-if="$store.state.user.isAuthenticated">
      <NabvarAprendiz></NabvarAprendiz>

    </template>
    <template v-else>
      <nav>
        <Nabvar></Nabvar>
      </nav>
>>>>>>> f8a6ce69f4a303b5f23d32c6ffd88958fd6cecf7
    </template>
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios'
import Nabvar from '@/components/Nabvar.vue';
<<<<<<< HEAD
import NabvarAprendiz from '@/components/NabvarAprendiz.vue';
import NabvarInstructor from '@/components/NabvarInstructor.vue';
=======
import NabvarAprendiz from '@/components/NabvarAprendiz.vue'
>>>>>>> f8a6ce69f4a303b5f23d32c6ffd88958fd6cecf7
export default {
  data() {
          return {
              rol: this.$store.state.rol,
              
          }
      },
  components:{
    Nabvar,
<<<<<<< HEAD
    NabvarAprendiz,
    NabvarInstructor
=======
    NabvarAprendiz
>>>>>>> f8a6ce69f4a303b5f23d32c6ffd88958fd6cecf7
  },
  methods:{

    beforeCreate() {
      this.$store.commit('initializeStore')
  
      const token = this.$store.state.user.token
  
      if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
      } else {
        axios.defaults.headers.common['Authorization'] = ""
      }
    }
  }
}

</script>

