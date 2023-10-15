import { ref } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const chosenItem = ref("");
  function setItem(value: string) {
    chosenItem.value = value;
  }

  return { chosenItem, setItem };
});
