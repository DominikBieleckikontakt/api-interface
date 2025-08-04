<template>
  <div>
    <div v-if="posts.length === 0">
      <div
        class="border-2 rounded-full border-black/80 size-12 border-t-transparent animate-spin"
      />
    </div>
    <div v-else>
      <h1 class="mb-16">Lista postów</h1>

      <div class="grid gap-16 lg:grid-cols-2 2xl:grid-cols-3">
        <PostItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
          :author="getUserById(post.userId)"
          @delete="deletePost(post.id)"
        />
      </div>

      <div class="gap-5 text-center max-sm:grid">
        <div class="flex mt-16 sm:justify-between max-sm:gap-5">
          <button
            @click="changePage(currentPage - 1)"
            class="flex items-center px-3 py-1 border rounded max-sm:w-full"
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
            class="flex items-center px-3 py-1 border rounded max-sm:justify-end max-sm:w-full"
            :class="{
              visible: currentPage < totalPages,
              invisible: currentPage === totalPages,
            }"
          >
            Dalej
            <ArrowRight class="w-4 h-4 ml-2" />
          </button>
        </div>
        <div class="block sm:hidden">
          Strona
          <input
            class="w-auto p-2 py-0 text-center border border-gray-300 rounded-lg max-w-9 outline-0"
            :value="currentPage"
            @change="(e) => changePage(e.target.value)"
          />
          z
          {{ totalPages }}
        </div>
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
const getUserById = (id) => store.getters.getUserById(id);

const changePage = (page) => {
  const pageNum = Number(page);
  if (pageNum >= 1 && pageNum <= totalPages.value) {
    store.commit("setCurrentPage", page);
  }
};

const deletePost = (id) => {
  store.commit("deletePost", id);
  store.dispatch("handleToaster");
};
</script>
