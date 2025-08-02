<template>
  <div>
    <div v-if="posts.length === 0">Loading data...</div>
    <div v-else>
      <h1 class="mb-16">Posty</h1>

      <div class="grid gap-16 lg:grid-cols-2 2xl:grid-cols-3">
        <PostItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
          :author="getUserById(post.userId)"
          @delete="deletePost(post.id)"
        />
      </div>

      <div class="flex justify-between mt-16">
        <button
          @click="changePage(currentPage - 1)"
          class="flex items-center px-3 py-1 border rounded"
          :class="{
            visible: currentPage > 1,
            invisible: currentPage <= 1,
          }"
        >
          <ArrowLeft class="w-4 h-4 mr-2" />
          Wstecz
        </button>

        <div class="hidden sm:block">
          Strona
          <input
            class="w-auto p-2 py-0 text-center border border-gray-300 rounded-lg max-w-9 outline-0"
            :value="currentPage"
            @change="(e) => changePage(Number(e.target.value))"
          />
          z
          {{ totalPages }}
        </div>

        <button
          @click="changePage(currentPage + 1)"
          class="flex items-center px-3 py-1 border rounded"
          :class="{
            visible: currentPage < totalPages,
            invisible: currentPage === totalPages,
          }"
        >
          Dalej
          <ArrowRight class="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import PostItem from "./PostItem.vue";
import { ArrowLeft, ArrowRight } from "lucide-vue-next";

const store = useStore();

onMounted(() => {
  store.dispatch("fetchData");
});

const posts = computed(() => store.getters.paginatedPosts);
const totalPages = computed(() => store.getters.totalPages);
const currentPage = computed(() => store.state.currentPage);
const getUserById = store.getters.getUserById;

const changePage = (page) => {
  store.commit("setCurrentPage", page);
};

const deletePost = (id) => {
  store.commit("deletePost", id);
};
</script>
