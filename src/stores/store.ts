import { ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const visitors = ref(false);
  function set(value: boolean) {
    visitors.value = value;
  }

  return { visitors, set };
});
