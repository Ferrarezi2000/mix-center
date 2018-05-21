<style scoped>
  img {border-radius: 100%; margin-top: 40px; margin-bottom: 5px}
  .nome {color: darkgrey; font-size: 17px; margin-bottom: 5px}
  .data {font-size: 12px; margin-bottom: 70px}
  .texto {font-size: 14px; margin-bottom: 15px}
</style>

<template>
  <q-page>
    <div class="flex flex-center">
      <img src="../assets/avatar.png" height="90" width="90"/>
    </div>

    <div class="flex flex-center nome">Boa tarde, {{ usuario.nome }}!</div>
    <div class="flex flex-center data">{{ dataAtual | moment("dddd, DD MMM  YYYY") }}</div>
    <div class="flex flex-center texto">Diga-nos o que você deseja fazer</div>

    <hr/>
    <span v-for="(item, index) in menu" :key="index" style="color: darkgrey;">
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
export default {
  created () {
    this.dataAtual = new Date()
  },
  data () {
    return {
      usuario: {nome: 'João Lima'},
      menu: [
        {icone: 'shopping_cart', texto: 'Iniciar um compra'},
        {icone: 'view_headline', texto: 'Meu histórico de compras'},
        {icone: 'place', texto: 'Como chegar ao mercado'}
      ],
      dataAtual: null
    }
  }
}
</script>
