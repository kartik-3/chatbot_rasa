<template>
  <v-app>
    <v-app-bar app dark height="75px">
      <v-btn-toggle>
        <v-btn block rounded color="green" class="mr-4" @click="goToFaqChatBox">FAQ BOT
        </v-btn>
        <v-btn block depressed color="blue" @click="goToReflectChatBox">REFLECT BOT + BLENDERBOT
        </v-btn>
      </v-btn-toggle>
      <v-text-field v-model="senderName" label="Sender Name" clearable style="margin-left: 50%; margin-top: 15px"
        @change="updateSenderName"></v-text-field>
    </v-app-bar>
    <v-main class="ma-0">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { routerPush } from './utils/constants';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',

  components: {
    // Grid
  },

  data: () => ({
    senderName: ""
  }),
  computed: {
    ...mapState('chat', ['sender'])
  },
  methods: {
    ...mapActions('chat', ['updateSender']),
    goToFaqChatBox() {
      routerPush(this, "FaqChatBox")
    },
    goToReflectChatBox() {
      routerPush(this, "ReflectChatBox")
    },
    updateSenderName() {
      // console.l
      this.updateSender(this.senderName)
    }
  }
};
</script>
