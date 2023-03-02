<script setup lang="ts">
import Meta from '@/Meta';

/** Props */
defineProps<{
  msg: string;
}>();
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img
        src="@/assets/logo.svg"
        alt="vuetify"
        :width="128"
        class="logo mx-auto"
      />
      <h1 class="text-h2 font-weight-bold mb-3">
        App Built using Vue, Vuetify and Node.js
      </h1>
      <p class="text-medium-emphasis">

        &nbsp;/&nbsp;Build:
        <time
          :datetime="Meta.date"
          v-text="new Date(Meta.date).toLocaleString()"
        />
      </p>
    </v-responsive>
  </v-container>
</template>

<style scoped>
.logo:hover {
  will-change: filter;
  filter: drop-shadow(0 0 1em #2196f3aa);
}
</style>
