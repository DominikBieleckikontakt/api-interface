<template>
  <div>
    <div v-if="posts.length === 0">Loading data...</div>
    <div v-else>
      <h1 class="mb-16">Posts</h1>
      <div class="grid lg:grid-cols-2 2xl:grid-cols-3 gap-16">
        <PostItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
          :author="getUserById(post.userId)"
          @delete="deletePost(post.id)"
        />
      </div>
      <div class="mt-16 flex justify-between">
        <button
          v-for="page in totalPages"
          :key="page"
          :class="[
            'px-3 py-1 border border-gray-300 rounded-lg',
            page === currentPage ? 'bg-blue-500 text-white' : '',
          ]"
          @click="changePage(page)"
        >
          {{ page }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import PostItem from "./PostItem.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("fetchData");
});

const posts = computed(() => store.getters.paginatedPosts);
const totalPages = computed(() => store.getters.totalPages);
const currentPage = computed(() => store.getters.currentPage);
const getUserById = computed(() => store.getters.getUserById);

const changePage = (page) => {
  store.commit("setCurrentPage", page);
};

const deletePost = (id) => {
  store.commit("deletePost", id);
};
</script>
