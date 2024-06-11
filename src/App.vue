<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink :to="'/'"><button>Home</button></RouterLink>
    <RouterLink :to="'/watchlist'"><button>Watchlist</button></RouterLink>
  </nav>
  <RouterView />
</template>
