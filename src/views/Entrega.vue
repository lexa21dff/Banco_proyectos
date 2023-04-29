<!-- <template>
    <b-form @submit.prevent="submitForm">
      <b-form-group label="Calificación">
        <b-form-select v-model="calificacion" :options="calificacionOptions"></b-form-select>
      </b-form-group>
      <b-form-group label="Descripción de la entrega">
        <b-form-textarea v-model="descripcion_entrega"></b-form-textarea>
      </b-form-group>
      <b-form-group label="Proyecto">
        <b-form-select v-model="proyecto" :options="proyectoOptions"></b-form-select>
      </b-form-group>
      <b-form-group label="Tipo de revisión">
        <b-form-select v-model="tipo_revision" :options="tipoRevisionOptions"></b-form-select>
      </b-form-group>
      <b-form-group label="Instructor">
        <b-form-input v-model="instructor"></b-form-input>
      </b-form-group>
      <b-form-group label="Documento">
        <b-form-file v-model="documento"></b-form-file>
      </b-form-group>
      <b-button type="submit">Enviar</b-button>
    </b-form>
  </template>
  
  <script>
  import { mapState } from 'vuex'

  
  export default {
    data() {
      return {
        calificacion: '',
        descripcion_entrega: '',
        proyecto: '',
        tipo_revision: '',
        instructor: '',
        documento: null,
        calificacionOptions: [
          { value: 'Aprobado', text: 'Aprobado' },
          { value: 'Reprobado', text: 'Reprobado' },
        ],
        proyectoOptions: [],
        tipoRevisionOptions: [],
      }
    },
    async created() {
      await this.fetchProyectos()
      await this.fetchTipoRevision()
    },
    computed: {
      ...mapState({
        token: state => state.auth.token,
      }),
    },
    methods: {
    //   async fetchProyectos() {
    //     const response = await axios.get('/api/proyectos/', {
    //       headers: { Authorization: `Bearer ${this.token}` },
    //     })
    //     this.proyectoOptions = response.data.results.map(p => ({
    //       value: p.id,
    //       text: p.nombre,
    //     }))
    //   },
    //   async fetchTipoRevision() {
    //     const response = await axios.get('/api/tipo-revision/', {
    //       headers: { Authorization: `Bearer ${this.token}` },
    //     })
    //     this.tipoRevisionOptions = response.data.results.map(t => ({
    //       value: t.id,
    //       text: t.nombre,
    //     }))
    //   },
      async submitForm() {
        // const formData = new FormData()
        // formData.append('calificacion', this.calificacion)
        // formData.append('descripcion_entrega', this.descripcion_entrega)
        // formData.append('proyecto', this.proyecto)
        // formData.append('tipo_revision', this.tipo_revision)
        // formData.append('instructor', this.instructor)
        // formData.append('documento', this.documento)
        // try {
        //   const response = await axios.post('/api/entregas/', formData, {
        //     headers: {
        //       Authorization: `Bearer ${this.token}`,
        //       'Content-Type': 'multipart/form-data',
        //     },
        //   })
        // //   const entregaId = response.data.id
        // //   const documentoFormData = new FormData()
        // //   documentoFormData.append('documento', this.documento)
        // //   await axios.post(`/api/entregas/${entregaId}/documentos/`, documentoFormData, {
        // //     headers: {
        // //     }
        }
    }
}   -->


<!-- <template>
  <b-form @submit.prevent="handleSubmit">
    <b-form-group id="calificacion" label="Calificación">
      <b-form-radio-group v-model="entrega.calificacion" :options="calificacionOptions"></b-form-radio-group>
    </b-form-group>
    <b-form-group id="descripcion_entrega" label="Descripción">
      <b-form-textarea v-model="entrega.descripcion_entrega"></b-form-textarea>
    </b-form-group>
    <b-form-group id="tipo_revision" label="Tipo de revisión">
      <b-form-select v-model="entrega.tipo_revision" :options="tipoRevisionOptions"></b-form-select>
    </b-form-group>
    <b-form-group id="documento" label="Documento">
      <b-form-file v-model="documento" accept=".pdf"></b-form-file>
    </b-form-group>
    <b-button type="submit" variant="primary">Guardar</b-button>
  </b-form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      entrega: {
        calificacion: '',
        descripcion_entrega: '',
        tipo_revision: '',
        documento: null,
      },
      documento: null,
      calificacionOptions: [
        { text: 'Aprobado', value: 'aprobado' },
        { text: 'Reprobado', value: 'reprobado' },
      ],
      tipoRevisionOptions: [
        { text: 'Primera revisión', value: 'primera_revisión' },
        { text: 'Segunda revisión', value: 'segunda_revisión' },
      ],
    };
  },
  methods: {
    handleSubmit() {
      const formData = new FormData();
      formData.append('calificacion', this.entrega.calificacion);
      formData.append('descripcion_entrega', this.entrega.descripcion_entrega);
      formData.append('tipo_revision', this.entrega.tipo_revision);
      formData.append('documento', this.documento);
      axios.post('/api/entregas/', formData)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
};
</script> -->
<template>
  <div>
    <p>Nombre de usuario: {{ username }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.state.username
    }
  }
}
</script>
