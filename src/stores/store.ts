import { ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const isChosen = ref(false);
  function set(value: boolean) {
    isChosen.value = value;
  }

  return { isChosen, set };
});
