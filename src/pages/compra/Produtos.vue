<style scoped>
  .titulo {margin: 20px}
  .valor {font-size: 14px; color: black; margin-right: 5px}
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
        <span class="valor">R$ {{ item.valor }}</span>
        <q-btn flat round dense icon="shopping_cart"/>
      </q-item>
      <hr/>
    </span>
  </q-page>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  created () {
    this.historicoNavegacao({rota: '/subCategoria', voltar: true})
    this.menuBarraNavegacao({titulo: 'Mix Certo', subTitulo: 'Mercado e Atacado'})
  },
  data () {
    return {
      menu: [
        {icone: 'local_bar', texto: 'Brahma Litrão s/casco', valor: '7,00', rota: '/carrinho'},
        {icone: 'local_bar', texto: 'Brahma 600ml', valor: '6,00', rota: '/carrinho'}
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
