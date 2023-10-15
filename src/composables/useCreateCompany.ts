import { ref } from "vue";
import { $api } from "@/api/axios";
import { useUserStore } from "@/stores/user";
import { useDataStore } from "@/stores/data";

interface ResponseCompany {
  _embedded?: {
    companies: [
      {
        id: number;
      }
    ];
  };
}

export function useCreateCompany() {
  const data = ref<ResponseCompany>({});
  const user = useUserStore();
  const ids = useDataStore();

  const company = {
    name: "АО Рога и Копыта",
  };
  ids.setLoading(false);
  ids.setError(false);
  $api({
    method: "POST",
    url: "/create/company",
    data: company,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((res: { data: ResponseCompany }) => {
      data.value = res.data;
      ids.setLoading(true);
      ids.setId(`Компания ${res.data._embedded?.companies[0].id}`);
    })
    .catch((err) => {
      console.log(err);
      ids.setError(true);
      ids.setLoading(false);
    });
}
