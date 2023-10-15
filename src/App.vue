<script setup lang="ts">
import CustomButton from "@/components/CustomButton.vue";
import CustomList from "@/components/CustomList.vue";
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
  <main>
    <div class="flex flex-col gap-6">
      <CustomList />
      <CustomButton name="Создать" :loading="!ids.loading" />
      <span :key="item" v-for="item in ids.ids">
        {{ item }}
      </span>
    </div>
  </main>
</template>
