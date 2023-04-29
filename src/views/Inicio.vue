<template>
  <div>
    <body>
      <Carrusel> </Carrusel>  
      <ul>
        <Informacion> </Informacion>
      </ul>
      <ul>
        <Ideas> </Ideas>
      </ul>
    </body>
    <Footer>
    </Footer>
  </div>
</template>
<script>
  
  import Footer from '../components/Footer.vue'
  import Carrusel from '../components/Carrusel.vue'
  import Informacion from '../components/Informacion.vue'
  import Ideas from '../components/Ideas.vue'


  export default {

    components: {
       Footer, Carrusel, Informacion, Ideas
    }

  }
</script>

<style>





</style>

