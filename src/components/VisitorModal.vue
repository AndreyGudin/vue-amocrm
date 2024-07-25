<script setup lang="ts">
import { ref } from "vue";
import CompanySelect from "./CompanySelect.vue";
import CustomLabel from "./CustomLabel.vue";
import TextInput from "./TextInput.vue";

const name = ref("");
const company = ref("");
const group = ref("");
const online = ref(false);
</script>

<template>
  <div
    class="w-screen h-full absolute top-0 left-0 bg-black/40 flex justify-center items-center"
  >
    <div
      class="w-[1460px] h-[581px] bg-white flex flex-col gap-[40px] py-[66px] px-[270px]"
    >
      <div class="flex w-full justify-between">
        <CustomLabel for="name" text="ФИО" />
        <TextInput id="name" v-model="name" />
      </div>
      <div class="flex w-full justify-between">
        <CustomLabel for="company" text="Компания" />
        <TextInput id="company" v-model="company" />
      </div>
      <div class="flex w-full justify-between">
        <CustomLabel for="group" text="Группа" />
        <CompanySelect v-model="group" />
        {{ group }}
      </div>
      <div class="flex w-full justify-between">
        <CustomLabel for="online" text="Присутствие" />
        <input type="checkbox" id="online" v-model="online" />
      </div>
    </div>
  </div>
</template>
