import { ref } from "vue";
import { defineStore } from "pinia";

interface Visitor {
  id: number;
  name: string;
  company: string;
  group: string;
  online: boolean;
}

export const useStore = defineStore("store", () => {
  const visitors = ref<Array<Visitor>>([
    { id: 1, name: "1", company: "2", group: "3", online: true },
  ]);
  function add(value: Visitor) {
    visitors.value.push(value);
  }

  return { visitors, add };
});
