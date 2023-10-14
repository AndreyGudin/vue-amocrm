<script setup lang="ts">
import CustomButton from "@/components/CustomButton.vue";
import CustomList from "@/components/CustomList.vue";
import { onMounted, ref } from "vue";
import { useAuth } from "@/composables/useAuth";
const token = ref("");

const { data, error } = useAuth();

onMounted(() => {
  console.log("data", data.value);
});
</script>

<template>
  <main>
    <div class="flex flex-col gap-6">
      <CustomList />
      <CustomButton name="Создать" />
    </div>
  </main>
</template>
