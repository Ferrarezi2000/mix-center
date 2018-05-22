<style scoped></style>

<template>
  <q-page>
    <q-timeline color="secondary" style="padding: 0 24px;">
      <q-timeline-entry heading>Histórico de compra</q-timeline-entry>

      <q-timeline-entry v-for="(item, index) in historico" :key="index"
        :title="item.status + ' - R$: ' + item.valor"
        :subtitle="item.data"
        side="left">
        <div>
          <ul>
            <li v-for="(compra, index) in item.compras" :key="index">
              {{ compra.qtd }} un - {{ compra.item }}
            </li>
          </ul>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>

<script>
export default {
  created () {},
  data () {
    return {
      historico: [
        {data: '22/01/2018',
          status: 'Entregue',
          compras: [
            {item: 'Cerveja Skol', qtd: '5'},
            {item: 'Arroz Sepé', qtd: '1'},
            {item: 'Óleo Soja', qtd: '3'}
          ],
          valor: '60,00'
        },
        {data: '22/02/2018',
          status: 'Entregue',
          compras: [
            {item: 'Cerveja Skol', qtd: '5'},
            {item: 'Arroz Sepé', qtd: '1'},
            {item: 'Óleo Soja', qtd: '3'}
          ],
          valor: '60,00'
        },
        {data: '22/05/2018',
          status: 'Entregue',
          compras: [
            {item: 'Cerveja Skol', qtd: '5'},
            {item: 'Arroz Sepé', qtd: '1'},
            {item: 'Óleo Soja', qtd: '3'}
          ],
          valor: '60,00'
        },
        {data: '22/03/2018',
          status: 'Entregue',
          compras: [
            {item: 'Cerveja Skol', qtd: '5'},
            {item: 'Arroz Sepé', qtd: '1'},
            {item: 'Óleo Soja', qtd: '3'}
          ],
          valor: '60,00'
        }
      ]
    }
  },
  methods: {}
}
</script>
