import { $api } from "@/api/axios";
import { ref } from "vue";

export function useAuth() {
  const data = ref(null);
  const error = ref(null);

  $api
    .get("/auth")
    .then((res) => (data.value = res.data))
    .catch((err) => (error.value = err));

  return { data, error };
}
