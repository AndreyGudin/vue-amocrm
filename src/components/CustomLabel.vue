<script setup lang="ts">
defineProps<{
  text: string;
  for?: string;
}>();
</script>

<template>
  <label class="text-[32px] font-semibold" :for="for">
    {{ text }}
  </label>
</template>
