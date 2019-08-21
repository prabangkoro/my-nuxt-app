<template>
  <v-container>
    <v-layout column>
      <v-flex>
        To Do List
      </v-flex>
      <v-flex>
        <v-text-field
          v-model="toDo"
          clearable
          label="To Do"
          placeholder="To do"
        ></v-text-field>
        <v-btn @click="add">
          Add
        </v-btn>
      </v-flex>
      <v-flex>
        <v-list>
          <v-list-item
            v-for="(todo, index) in todos"
            :key="`todo-${index}`"
          >
            <v-list-item-content>
              {{ index + 1 }} - {{ todo.text }}
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      toDo: ''
    }
  },
  computed: {
    ...mapGetters({
      todos: 'todos/todos'
    })
  },
  methods: {
    ...mapActions({
      addToDoList: 'todos/add'
    }),
    add () {
      if (!this.toDo) {
        return
      }
      this.addToDoList(this.toDo)
      console.log(`todos: ${JSON.stringify(this.todos)}`)
    }
  }
}
</script>
