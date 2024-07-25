<script setup lang="ts">
import { defineModel } from "vue";

defineProps<{
  id?: string;
  placeHolder?: string;
}>();
const model = defineModel();
</script>

<template>
  <input
    class="w-[500px] h-[50px] shadow"
    type="text"
    :id="id"
    :placeholder="placeHolder"
    v-model="model"
  />
</template>
