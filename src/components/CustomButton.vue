<script setup lang="ts">
import { useStore } from "@/stores/store";
import LoaderSvg from "./LoaderSvg.vue";
import { useCreateContact } from "@/composables/useCreateContact";
import { useCreateLead } from "@/composables/useCreateLead";
import { useCreateCompany } from "@/composables/useCreateCompany";

defineProps<{
  name: string;
  loading?: boolean;
}>();
const store = useStore();

const chosen =
  "block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:bg-white disabled:text-black disabled:font-bold disabled:opacity-50 disabled:cursor-not-allowed";

const handleClick = () => {
  if (store.chosenItem === "Контакт") {
    useCreateContact();
  }
  if (store.chosenItem === "Сделка") {
    useCreateLead();
  }

  if (store.chosenItem === "Компания") {
    useCreateCompany();
  }
};
</script>

<template>
  <button
    @click="handleClick"
    :class="chosen"
    :disabled="store.chosenItem ? store.chosenItem.length === 0 : true"
    class="flex justify-center w-[300px]"
  >
    <LoaderSvg v-if="loading" color="white" />
    <span v-else>{{ name }}</span>
  </button>
</template>
