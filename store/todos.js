// import Vue from 'vue'

// export const state = () => ({
//   lists: ["hello world"]
// })
// export const mutations = {
//   add(state,addTodo) {
//     state.lists.push(addTodo)
//   },
//   remove(state,rmTodo) {
//     Vue.delete(state.lists,rmTodo)
//   }
// }
import Vue from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'todos',
  state() {
    return {
      lists: []
    }
  },
  actions: {
    add(addTodo) {
      this.lists.push(addTodo)
    },
    remove(rmTodo) {
      Vue.delete(this.lists,rmTodo)
    }
  }
})


