import Vue from 'vue'
import Router from 'vue-router'
import ChatRoom from '@/views/ChatRoom'
import Sign from '@/components/SignDialog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      component: Sign,
      props: true
    },
    {
      path: '/chatroom',
      name: 'ChatRoom',
      component: ChatRoom,
      props: true
    },
    {
      path: '/signin',
      name: 'signin',
      component: Sign,
      props: true
    }
  ]
})
