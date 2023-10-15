<script setup lang="ts">
import CustomButton from "@/components/CustomButton.vue";
import CustomList from "@/components/CustomList.vue";
import CreatedItems from "@/components/CreatedItems.vue";

import { watch } from "vue";
import { useAuth } from "@/composables/useAuth";
import { useUserStore } from "@/stores/user";
import { useDataStore } from "@/stores/data";

const user = useUserStore();
const ids = useDataStore();

const { data, error } = useAuth();
watch(data, (newData) => {
  if (newData) user.setToken(newData);
});
</script>

<template>
  <main class="flex justify-center w-screen min-h-[800px]">
    <div
      class="flex flex-col items-center gap-6 w-[600px] h-auto border border-black p-6"
    >
      <CustomList />
      <CustomButton name="Создать" :loading="!ids.loading" />
      <CreatedItems :items="ids.ids" />
    </div>
  </main>
</template>
