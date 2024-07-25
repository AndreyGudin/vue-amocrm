<script setup lang="ts">
import CustomButton from "@/components/CustomButton.vue";
import CustomList from "@/components/CustomList.vue";
import VisitorModal from "./components/VisitorModal.vue";
</script>

<template>
  <main>
    <div class="flex flex-col gap-6">
      <CustomList />
      <CustomButton name="Создать" />
      <VisitorModal />
    </div>
  </main>
</template>
