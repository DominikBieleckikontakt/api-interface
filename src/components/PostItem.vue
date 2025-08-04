<template>
  <div
    class="flex flex-col justify-between p-5 duration-300 border border-gray-300 rounded-lg hover:shadow-sm"
  >
    <div>
      <p class="text-sm font-light">{{ author?.name }}</p>
      <h2 class="text-lg font-semibold">{{ post.title }}</h2>
      <div class="mt-4">
        {{ isExpanded ? post.body : post.body.slice(0, 100) + "..." }}
        <button class="text-blue-500" @click="toggleExpanded">
          {{ isExpanded ? "Zobacz mniej" : "Zobacz więcej" }}
        </button>
      </div>
    </div>
    <div class="flex justify-end w-full pt-5">
      <button
        @click="$emit('delete')"
        class="px-5 py-2 text-white duration-300 bg-red-500 rounded-lg hover:bg-red-600 max-w-fit"
      >
        Usuń
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  post: Object,
  author: Object,
});

const isExpanded = ref(false);

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
