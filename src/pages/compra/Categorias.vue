<style scoped>
  .titulo {margin: 20px}
</style>

<template>
  <q-page>
    <div class="flex flex-center titulo">Navegue entre as categorias</div>

    <hr/>
    <span v-for="(item, index) in menu" :key="index" style="color: darkgrey;" @click="navegar(item.rota)">
      <q-item>
        <q-item-side :icon="item.icone"/>
        <q-item-main>
          <span>{{ item.texto }}</span>
        </q-item-main>
        <q-btn flat round dense icon="arrow_forward_ios"/>
      </q-item>
      <hr/>
    </span>
  </q-page>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  created () {
    this.historicoNavegacao({rota: '/', voltar: true})
    this.menuBarraNavegacao({titulo: 'Mix Certo', subTitulo: 'Mercado e Atacado'})
  },
  data () {
    return {
      menu: [
        {icone: 'local_bar', texto: 'Bebidas', rota: '/subCategoria'},
        {icone: 'view_headline', texto: 'Cereais', rota: '/subCategoria'},
        {icone: 'view_headline', texto: 'Churrasco', rota: '/subCategoria'},
        {icone: 'place', texto: 'Casa', rota: '/subCategoria'}
      ]
    }
  },
  methods: {
    ...mapMutations(['historicoNavegacao', 'menuBarraNavegacao']),
    navegar (rota) {
      this.$router.push(rota)
    }
  }
}
</script>
