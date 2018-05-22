<style scoped>
  .titulo {margin: 20px}
  .valor {font-size: 14px; color: black; margin-right: 5px}
  .removerDaLista {color: red}
  .add {color: green}
  .remover {color: red}
  .listaVazia {margin-top: 200px}
</style>

<template>
  <q-page>

    <!--Lista Produtos-->
    <div v-if="produtos.length !== 0">
      <div class="flex flex-center titulo">
        Esses são os itens do seu carrinho
      </div>
      <hr/>
      <span v-for="(item, index) in produtos" :key="index">
      <q-item>
        <q-item-side icon="remove" class="removerDaLista" @click.native="abrirModal(item, index)"/>
        <q-item-main>
          <span>{{ item.nome }}</span>
        </q-item-main>
        <span class="valor">R$ {{ item.valor.toFixed(2) }}</span>
        <q-btn flat round dense icon="remove_circle" class="remover" @click="remover(item, index)"/>
        <span>{{ item.quantidade }}</span>
        <q-btn flat round dense icon="add_circle" class="add" @click="adicionar(item)"/>
      </q-item>
      <hr/>
      </span>

      <div class="flex flex-center" style="text-align: center; margin-top: 20px">
        <q-btn color="red" label="Esvaziar carrinho" @click="esvaziarCarrinho" style="margin-right: 10px"/>
        <q-btn color="blue" label="Fechar pedido" @click="concluir"/>
      </div>
    </div>

    <!--Lista Vazia-->
    <div class="flex flex-center listaVazia" v-else>
      Seu carrinho está vazio!
    </div>

    <!--Modal-->
    <q-modal v-model="modal" minimized :content-css="{padding: '20px'}">
      <div class="q-display-1 q-mb-md">Atenção</div>
      <p>
        Deseja realmente remover o item <strong>{{ removerItem.nome }}</strong>?
      </p>
      <div class="row" style="margin-top: 30px">
        <div class="col" style="text-align: center">
          <q-btn label="Cancelar" size="sm" @click="modal = false"/>
        </div>
        <div class="col" style="text-align: center">
          <q-btn color="red" size="sm" label="Remover" @click="removerDaLista"/>
        </div>
      </div>
    </q-modal>

  </q-page>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  created () {
    this.historicoNavegacao({rota: '/subCategoriaFinal', voltar: true})
    this.menuBarraNavegacao({titulo: 'Carrinho de Compras', subTitulo: null})
  },
  data () {
    return {
      modal: false,
      removerItem: {},
      indexRemover: null,
      produtos: [
        {nome: 'Brahma 600ml', valor: 6, quantidade: 1},
        {nome: 'Coca Cola 1lt', valor: 9, quantidade: 1}
      ]
    }
  },
  methods: {
    ...mapMutations(['historicoNavegacao', 'menuBarraNavegacao']),
    removerDaLista (index) {
      this.produtos.splice(index, 1)
      this.modal = false
    },
    abrirModal (item, index) {
      this.modal = true
      item.index = index
      this.removerItem = item
    },
    remover (item, index) {
      if (item.quantidade > 1) {
        item.quantidade--
      }
      if (item.quantidade === 1) {
        this.modal = true
        item.index = index
        this.removerItem = item
      }
    },
    adicionar (item) {
      item.quantidade++
    },
    esvaziarCarrinho () {
      this.produtos = []
    },
    concluir () {
      console.log('terminar')
    }
  }
}
</script>
