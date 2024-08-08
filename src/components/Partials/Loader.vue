<script setup lang="ts">
import { useSiteStore } from '../../stores/SiteStore';

const siteStore = useSiteStore();
</script>

<template>
  <div 
    v-if="siteStore.loader" 
    class="justify-content-center align-items-center" 
    id="loader-screen"
  >
    <div class="">
      <div class="loader"></div>
    </div>
  </div>
</template>