<template>
  <div>
    <div class="cointainer d-flex justify-content-center">
      <table>
        <tbody>
          <tr v-for="proyecto in proyectos " :key="proyecto.id">
            <!-- <div class="row" >
              <div class="container"> -->
                <b-card class="m-1 p-3">
                  <div class="row">
                    <div class="col-lg-1 col-md-1">
                        <img class="imagen" src="../assets/2.jpg" alt="">
                      </div>
                      <div class="col-lg-9">
                          <h3>{{ proyecto.nombre_proyecto }}</h3>
                        <p ><span class="fw-lighter" >Estado: </span>{{ proyecto.estado }}</p>
                      </div>
                    </div>
                    <div class="row">
                      <p class="fw-lighter">Descripcion:</p>
                      <p>{{ descripcion(proyecto.descripcion) }}</p>
                    </div>
                    <img class="position-absolute bottom-0 end-0" src="../assets/iconos/verProyecto.png" alt="" @click="verProyecto(proyecto.id)">
                </b-card>
              <!-- </div>
            </div> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
    
  </template>
  
  
  <script>
  import axios from 'axios'

  export default{
      name:'Lista',
      data(){
          return{
              searchValue: "",
              proyecto: [],
              proyectos: null
          }
      },
      methods:{
          getProyecto(){
              axios.get("http://127.0.0.1:8000/api/proyecto/").then(response=>{
              this.proyectos= response.data
            })
          },
          descripcion(descripcion){
            // descripcion corta
            if (descripcion.length > 100) {
              const index = descripcion.slice(100).search(/[.]/);
                if (index !== -1) {
                  return descripcion.slice(0, 100 + index + 1) + '...';
                }
            }
            return descripcion;
          },
      async search() {
        try {
          const response = await axios.get("buscar_proyectos/", {
            params: {
              search: this.searchValue,
            },
          });
          this.proyecto = response.data;
        } catch (error) {
          console.log(error);
        }
        
      },
      async verProyecto(id){
        this.$router.push('/verProyecto/'+id)
      },
  
  
      },
      mounted() {  
          this.getProyecto()
         
  
      },
          
  
  }
  </script>

<style>

.imagen{
    width: 100%;
}

</style>