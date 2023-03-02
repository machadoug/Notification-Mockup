<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HomeComponent from '@/components/HomeComponent.vue';

const jsonLd = JSON.stringify(
  {
    '@schema': 'https://json.schemastore.org/jsonld.json',
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Notification Mockup',
    url: 'https://github.com/machadoug',
    description: 'Notification Mockup',
  },
  null,
  2
);
</script>

<template>
  <v-container fluid>
    <home-component msg="⚡Hello Vue 3 + Vuetify 3 + TypeScript + Vite⚡" />
  </v-container>
  <teleport to="head">
    <meta
      name="keyword"
      content="Notification,Mockup,vue,vuetify,node.js,node"
    />
    <meta name="description" content="Notification Mockup built using Vue and Node.js" />
    <component :is="'script'" type="application/ld+json">
      {{ jsonLd }}
    </component>
  </teleport>
</template>
