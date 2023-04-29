<template>
  <div >
    <nav>
      <Nabvar></Nabvar>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios'
import Nabvar from '@/components/Nabvar.vue';
export default {
  components:{
    Nabvar
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

