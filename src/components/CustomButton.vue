<script setup lang="ts">
withDefaults(
  defineProps<{
    name: string;
    style?: "green" | "gray";
  }>(),
  {
    style: "green",
  }
);
</script>

<template>
  <button class="w-[273px] h-[52px] bg-">
    <span>{{ name }}</span>
  </button>
</template>
