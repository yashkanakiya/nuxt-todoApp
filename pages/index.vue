<template>
  <div class="flex flex-col justify-center items-center space-y-5 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-screen">

    <script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"></script>
    <lord-icon
    src="https://cdn.lordicon.com/nobciafz.json"
    trigger="hover"
    colors="primary:#121331,secondary:#16c72e"
    style="width:175px;height:175px">
    </lord-icon>

    <h1 class="text-center text-4xl text-green-300 font-bold">This is My Todo List</h1>

    <div class="bg-gradient-to-r from-white to-yellow-300 p-10 rounded-2xl text-2xl text-green-500 font-semibold">

    <script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"></script>
    <lord-icon
    src="https://cdn.lordicon.com/wloilxuq.json"
    trigger="loop"
    colors="primary:#121331,secondary:#08a88a"
    style="width:100px;height:100px">
    </lord-icon>

      <ol class="list-decimal">
        <li v-for="(list,index) in lists" :key="list"><a href="#" class="border-b-2 border-gray-600" @click="remove(index)">{{list}}</a></li>
      </ol>
    </div>

    <form class="space-y-3 text-center" @submit.prevent="sub">
      <input v-model="todo" type="text" placeholder="enter todoList" class="border-2 border-blue-500 rounded-full">
      <br>
      <button class="bg-blue-600 rounded-xl text-white px-3 py-1 font-semibold tracking-wider" type="submit">ADD</button>
    </form>
  </div>
</template>

<script>
import { useStore } from '~/store/todos'
export default {
  // data() {
  //   return {
  //     lists: ['ex1','ex2','ex3'],
  //     todo: '',
  //   }
  // },
  data() {
    return {
      store: useStore()
    }
   
  },
  computed: {
    lists() {
      // return this.$store.state.todos.lists
      return this.store.lists
    }
  },
  // mounted() {
  //   alert(this.$store.state.todos.lists)
  // },
  methods: {
    sub() {
      if(this.todo) {
        // this.lists.push(this.todo)
        // this.$store.commit('todos/add',this.todo)

        this.store.add(this.todo)
        this.todo = ''
      }
    },
    remove(index) {
      // this.$delete(this.lists, index)
      // this.$store.commit('todos/remove',index)

      this.store.remove(index)
    }
  }
}
</script>
