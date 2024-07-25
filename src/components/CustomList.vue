<script setup lang="ts">
import { useStore } from "@/stores/store";

const store = useStore();
</script>

<template>
  <div v-for="visitor in store.visitors" :key="visitor.id">
    {{ visitor.name }}
  </div>
</template>
