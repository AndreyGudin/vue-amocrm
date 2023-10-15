import { ref } from "vue";
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", () => {
  const ids = ref<string[]>([]);
  const loading = ref(true);
  function setId(value: string) {
    ids.value.push(value);
  }
  function setLoading(value: boolean) {
    loading.value = value;
  }

  return { ids, setId, loading, setLoading };
});
