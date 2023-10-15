import { ref } from "vue";
import { $api } from "@/api/axios";
import { useUserStore } from "@/stores/user";
import { useDataStore } from "@/stores/data";

interface ResponseLead {
  _embedded?: {
    leads: [
      {
        id: number;
      }
    ];
  };
}

export function useCreateLead() {
  const data = ref<ResponseLead>({});
  const user = useUserStore();
  const ids = useDataStore();

  const lead = {
    name: "Сделка для примера 1",
    price: 20000,
  };
  ids.setLoading(false);
  $api({
    method: "POST",
    url: "/create/lead",
    data: lead,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((res: { data: ResponseLead }) => {
      data.value = res.data;
      ids.setLoading(true);
      ids.setId(`Сделка ${res.data._embedded?.leads[0].id}`);
    })
    .catch((err) => err);
}
