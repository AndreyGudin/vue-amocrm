<script setup lang="ts">
import { useStore } from "@/stores/store";
import { ref } from "vue";

const items = ["Сделка", "Контакт", "Компания"];
const store = useStore();
const selected = ref("");
function handleChange() {
  store.setItem(selected.value);
}
</script>

<template>
  <select @change="handleChange" v-model="selected" class="text-xl">
    <option selected value="">Не выбрано</option>
    <option :key="item" v-for="item in items">
      {{ item }}
    </option>
  </select>
</template>
