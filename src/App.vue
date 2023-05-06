<template>
  <div >
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
    </template>
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios'
import Nabvar from '@/components/Nabvar.vue';
import NabvarAprendiz from '@/components/NabvarAprendiz.vue';
import NabvarInstructor from '@/components/NabvarInstructor.vue';
export default {
  data() {
          return {
              rol: this.$store.state.rol,
              
          }
      },
  components:{
    Nabvar,
    NabvarAprendiz,
    NabvarInstructor
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

