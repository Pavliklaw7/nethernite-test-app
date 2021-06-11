<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal darken-3">
        <strong class="subheading"
          >Get connected with me on social networks!</strong
        >

        <v-spacer></v-spacer>

        <v-btn
          v-for="social in socials"
          :href="social.url"
          target="_blank"
          :key="social.icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ social.icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>VLADYSLAV PAVLIK</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    socials: [
      {
        icon: "mdi-github",
        url: "https://github.com/Pavliklaw7"
      },
      {
        icon: "mdi-facebook",
        url: "https://www.facebook.com/profile.php?id=100004369868314"
      },
      {
        icon: "mdi-linkedin",
        url: "https://www.linkedin.com/in/vlad-pavlik-6005b1164/"
      },
      {
        icon: "mdi-instagram",
        url: "https://www.instagram.com/?hl=ru"
      }
    ]
  })
};
</script>

<style>
</style>