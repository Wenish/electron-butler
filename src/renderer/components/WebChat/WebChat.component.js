import { App } from 'botframework-webchat'
import 'botframework-webchat/botchat.css'

export default {
  name: 'web-chat',
  components: { },
  props: ['directLineSecret'],
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {
    console.log(this.directLineSecret)
    App({
        directLine: { secret: this.directLineSecret },
        user: { id: 'userid' },
        bot: { id: 'botid' },
        resize: 'detect'
      }, document.getElementById("botframework-chat"))
  },
  methods: {

  }
}
