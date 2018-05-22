<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="orange"
        :inverted="$q.theme === 'ios'">

        <q-btn flat dense round v-if="!historicoNavegacao.voltar"
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <q-btn flat dense round v-else
               @click="voltar"
               aria-label="Voltar">
          <q-icon name="arrow_back" />
        </q-btn>

        <q-toolbar-title @click.native="home">
          {{ menuBarraNavegacao.titulo }}
          <div slot="subtitle">
            {{ menuBarraNavegacao.subTitulo }}
          </div>
        </q-toolbar-title>

        <q-btn flat round dense icon="shopping_cart" />

        <q-btn flat round dense icon="more_vert">
          <q-popover
            :anchor="anchor"
            :self="self">
            <q-list link style="min-width: 100px">
              <q-item>
                <q-item-main label="Sair" @click.native="sair"/>
              </q-item>
            </q-list>
          </q-popover>
        </q-btn>

      </q-toolbar>
    </q-layout-header>

    <!--Menu-->
    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">

      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/quasarframework/')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
        </q-item>
        <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
          <q-item-side icon="chat" />
          <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
        </q-item>
        <q-item @click.native="openURL('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
import { mapGetters } from 'vuex'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      anchorOrigin: {vertical: 'bottom', horizontal: 'left'},
      selfOrigin: {vertical: 'top', horizontal: 'left'},
      popover: false,
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  computed: {
    ...mapGetters(['historicoNavegacao', 'menuBarraNavegacao']),
    anchor () {
      return `${this.anchorOrigin.vertical} ${this.anchorOrigin.horizontal}`
    },
    self () {
      return `${this.selfOrigin.vertical} ${this.selfOrigin.horizontal}`
    }
  },
  methods: {
    openURL,
    home () {
      this.$router.push('/')
    },
    voltar () {
      this.$router.push(this.historicoNavegacao.rota)
    },
    sair () {
      console.log('sair')
    }
  }
}
</script>

<style>
</style>
