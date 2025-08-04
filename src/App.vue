<template>
  <div class="">
    <PostList />
    <Transition name="toaster-fade">
      <div
        class="fixed px-5 py-3 text-center text-white bg-red-500 rounded-lg shadow-lg max-sm:-translate-x-1/2 max-sm:px-3 bottom-4 max-sm:left-1/2 sm:right-4"
        v-if="isToasterVisible"
      >
        Usunięto post.
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import PostList from "./components/PostList.vue";

const store = useStore();
const isToasterVisible = computed(() => store.state.isToasterVisible);
</script>

<style scoped>
.toaster-fade-enter-from {
  opacity: 0;
  transform: translateY(100%);
}

.toaster-fade-enter-active {
  transition: all 0.3s ease-out;
}

.toaster-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.toaster-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.toaster-fade-leave-active {
  transition: all 0.3s ease-in;
}
.toaster-fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
</style>
