<script setup lang="ts">
const props = withDefaults(defineProps<{ items: string[] }>(), {
  items: () => [""],
});
</script>
<template>
  <div :key="item" v-for="item in props.items" class="flex flex-col gap-3">
    <span class="text-xl font-bold">{{ item }}</span>
  </div>
</template>
