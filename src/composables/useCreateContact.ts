import { ref } from "vue";
import { $api } from "@/api/axios";
import { useUserStore } from "@/stores/user";
import { useDataStore } from "@/stores/data";

interface ResponseContact {
  _embedded?: {
    contacts: [
      {
        id: number;
      }
    ];
  };
}

export function useCreateContact() {
  const data = ref<ResponseContact>({});
  const user = useUserStore();
  const ids = useDataStore();

  const contact = {
    first_name: "Петр",
    last_name: "Смирнов",
    name: "Петр Смирнов",
  };
  ids.setLoading(false);
  $api({
    method: "POST",
    url: "/create/contact",
    data: contact,
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  })
    .then((res: { data: ResponseContact }) => {
      data.value = res.data;
      ids.setLoading(true);
      ids.setId(`contact ${res.data._embedded?.contacts[0].id}`);
    })
    .catch((err) => err);
}
