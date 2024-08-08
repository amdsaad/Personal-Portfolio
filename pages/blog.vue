<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id" class="mb-4 bg-red-50">
        {{ post }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const { data: posts, error: postsError } = (await useFetch(
  "http://localhost:1337/api/posts?populate=[0]=authors&populate[1]=categories"
)) as any;

if (postsError.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page Not Found",
  });
}
if (posts.value) {
  console.log(posts.value);
}
</script>

<style></style>
