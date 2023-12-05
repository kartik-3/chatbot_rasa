<template>
  <div>
    <v-app-bar color="red lighten-5" class=" text-h5 font-weight-bold" elevation="1">
      FAQ CHATBOT
    </v-app-bar>
    <div class="chat">
      <div v-for="(item, index) in faqChat" :key="index" class="mt-64 mb-5">
        <v-row class="mb-11">
          <v-col cols="6" align="left">
            <v-avatar v-if="item.from == 'faqChatBot'" color="red">
              <div class="white--text">bot</div>
            </v-avatar>
            <div v-if="item.from == 'faqChatBot'" class="red--text ml-3" style="word-break: break-word;">{{ item.msg }}
            </div>
          </v-col>
          <v-col cols="6" align="right">
            <v-avatar v-if="item.from != 'faqChatBot'" color="blue">
              <div class="white--text">user</div>
            </v-avatar>
            <div v-if="item.from != 'faqChatBot'" class="blue--text mr-3" style="word-break: break-word;">{{ item.msg }}
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <v-footer fixed height="55px">
      <v-container class="ma-0 pa-0">
        <v-row no-gutters>
          <v-col>
            <div class="d-flex flex-row align-center">
              <v-text-field class="py-0" v-model="msg" placeholder="Type Something" @keypress.enter="send"></v-text-field>
              <v-btn icon class="ml-4" @click="send">
                <v-icon>mdi-send</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
    <v-snackbar height="64" v-model="snackbar" text color="primary" :timeout="3000">
      <v-icon large color="red lighten-1"> mdi mdi-alert-circle-outline</v-icon>
      <span class="ml-4">Set the sender name from the app bar at the top</span>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { getFaqQueryResponse } from "../utils/api";

export default {
  name: 'FaqChatBox',
  components: {
  },
  data() {
    return {
      msg: "",
      botResponse: "",
      snackbar: false
    }
  },
  computed: {
    ...mapState('chat', ['faqChat', 'sender'])
  },
  methods: {
    ...mapActions('chat', ['updateFaqChat']),
    async send() {
      if (!this.msg) {
        return
      }
      if (!this.sender) {
        this.snackbar = true
        return
      }
      this.updateFaqChat({
        from: this.sender,
        msg: this.msg,
      })
      const queryResponse = await getFaqQueryResponse({
        'sender': this.sender,
        'message': this.msg,
      })
      this.msg = ""
      const data = queryResponse.data
      for (let msg of data) {
        this.botResponse = msg.text
        this.addReply()
      }
    },
    addReply() {
      this.updateFaqChat({
        from: "faqChatBot",
        msg: this.botResponse,
      })
      this.scrollToElement()
    },
    scrollToElement() {
      window.scrollTo(0, (document.body.scrollHeight || document.documentElement.scrollHeight));
    }
  }
}
</script>

<style>
.chat {
  margin-bottom: 176px;
}
</style>