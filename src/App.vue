<template>
  <div id="app">

     <v-app id="inspire" dark>
      <v-navigation-drawer
        v-model="drawer"
        clipped
        fixed
        app
      >

        <!-- sidebar -->
        <v-treeview          
          :items="topics"
          activatable
          item-key="name"
          open-on-click>
          <template slot="label" slot-scope="{ item }">
            <v-icon v-if="item.name == 'Home'">home</v-icon>
            <v-icon v-else="item.name != 'Home'">folder_open</v-icon>
            
            <span @click="goPage(item)"> {{ item.name}} </span>
          </template>
        </v-treeview>

      </v-navigation-drawer>

      <!-- toolbar -->
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-toolbar>

      <!-- content -->
      <v-content>
        <v-container>
          <router-view/>
        </v-container>
      </v-content>

      <!-- footer -->
      <v-footer app fixed>
        <span>&copy; 2021</span>
      </v-footer>
      
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      drawer: null,
      topics: topicSource
    }
  },
  methods:{
    goPage(item){
      console.log(item.url);
      this.$router.push({path: item.url});
    }
  }
}

const topicSource = [
  {
    id: "0",
    name: "Home",
    url: "home"
  }
  
];
</script>

<style>
</style>
