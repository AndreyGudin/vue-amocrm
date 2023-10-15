<script setup lang="ts">
const props = withDefaults(defineProps<{ items: string[]; error: boolean }>(), {
  items: () => [""],
  error: false,
});
</script>
<template>
  <h3 class="text-2xl font-bold border-b border-black">Созданные сущности</h3>
  <span v-if="props.error" class="text-xl font-bold text-red-700"
    >Похоже что-то пошло не так</span
  >
  <div :key="item" v-for="item in props.items" class="flex flex-col gap-3">
    <span class="text-xl font-bold">{{ item }}</span>
  </div>
</template>
