<template>
  <div class="container">
    <p class="text-center font-bold capitalize my-8">
      Create new Author Profile
    </p>
    <form class="max-w-xl mx-auto" @submit.prevent="createProfile">
      <div class="mb-5">
        <label
          for="first_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >First Name
        </label>
        <input
          type="text"
          id="first_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Ahmed"
          required
          v-model="first_name"
        />
      </div>
      <div class="mb-5">
        <label
          for="last_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Last Name
        </label>
        <input
          type="text"
          id="last_name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Soliman"
          required
          v-model="last_name"
        />
      </div>
      <div class="mb-5">
        <label
          for="about"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >About
        </label>
        <textarea
          type="text"
          id="about"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="about me"
          required
          v-model="about"
        />
      </div>

      <div>
        <label
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="user_avatar"
          >Profile image</label
        >
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
          @change="handleFileUpload"
        />
        <div
          class="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="user_avatar_help"
        >
          A profile picture is useful to confirm your are logged into your
          account
        </div>
      </div>
      <img
        v-if="uploadedFile"
        class="w-[200px] mx-auto my-4"
        :src="backendUrl + uploadedFile?.url"
        alt=""
      />
      <div class="mt-8">
        <button
          type="submit"
          class="bg-blue-500 px-4 py-2 rounded-lg text-white font-medium block w-full"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();
const backendUrl = config.public.strapi.url;

const first_name = ref("");
const last_name = ref("");
const about = ref("");

const uploadedFile = ref();
const handleFileUpload = async (e: any) => {
  try {
    const file = e.target.files[0];
    const formData = new FormData();
    const timestamp = new Date().getTime();
    formData.append("files", file, timestamp + "_" + file.name);
    const url = (await $fetch(`${backendUrl}/api/upload`, {
      method: "POST",
      body: formData,
    })) as any;
    console.log(url);
    uploadedFile.value = url[0];
  } catch (error) {
    console.log(error);
  }
};

const { create } = useStrapi();
const user = useStrapiUser();

const createProfile = async () => {
  try {
    // @todo: create validations
    const res = await create("authors", {
      first_name: first_name.value,
      last_name: last_name.value,
      about: about.value,
      avatar: uploadedFile.value,
      user: user.value?.id,
    });

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style></style>
