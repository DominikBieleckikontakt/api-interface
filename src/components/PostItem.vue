<template>
  <div
    class="rounded-lg p-5 border border-gray-300 hover:shadow-sm duration-300 flex flex-col justify-between"
  >
    <div>
      <p class="font-light text-sm">{{ author?.name }}</p>
      <h2 class="font-semibold text-lg">{{ post.title }}</h2>
      <div class="mt-4">
        {{ isExpanded ? post.body : post.body.slice(0, 100) + "..." }}
        <button class="text-blue-500" @click="toggleExpanded">
          {{ isExpanded ? "Zobacz mniej" : "Zobacz więcej" }}
        </button>
      </div>
    </div>
    <div class="w-full flex justify-end pt-5">
      <button
        @click="$emit('delete')"
        class="bg-red-500 text-white hover:bg-red-600 duration-300 max-w-fit px-5 rounded-lg py-2"
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
