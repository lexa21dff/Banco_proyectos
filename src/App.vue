<template>
  <div >
    <template  v-if="$store.state.user.isAuthenticated">
      <NabvarAprendiz></NabvarAprendiz>

    </template>
    <template v-else>
      <nav>
        <Nabvar></Nabvar>
      </nav>
    </template>
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios'
import Nabvar from '@/components/Nabvar.vue';
import NabvarAprendiz from '@/components/NabvarAprendiz.vue'
export default {
  components:{
    Nabvar,
    NabvarAprendiz
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

