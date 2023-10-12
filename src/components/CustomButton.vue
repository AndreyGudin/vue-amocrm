<script setup lang="ts">
import { useStore } from "@/stores/store";
import LoaderSvg from "./LoaderSvg.vue";

defineProps<{
  name: string;
  loading?: boolean;
}>();
const store = useStore();

const chosen =
  "block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:bg-white disabled:text-black disabled:font-bold disabled:opacity-50 disabled:cursor-not-allowed";
</script>

<template>
  <button :class="chosen" :disabled="!store.isChosen">
    <LoaderSvg v-if="loading" />
    <span v-else>{{ name }}</span>
  </button>
</template>
