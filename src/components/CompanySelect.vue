<script setup lang="ts">
import { defineModel } from "vue";
const items = ["ООО Рога и Копыта", "АО АО", "ООО Моя оборона"];
const model = defineModel();
</script>

<template>
  <select class="w-[500px] h-[50px] shadow" v-model="model">
    <option disabled selected>Выбрать</option>
    <option :value="item" :key="item" v-for="item in items">
      {{ item }}
    </option>
  </select>
</template>
