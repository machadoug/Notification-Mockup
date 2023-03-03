<script lang="ts">
import NotificationService from '../services/NotificationService';
import { VDataTableServer } from 'vuetify/labs/VDataTable'
export default {
    components: {
      VDataTableServer,
    },
    data () {
      return {
        totalItems: 0,
        items: [],
        loading: true,
        options: {},
        headers: [
          {
            title: 'Message',
            key: 'message',
          },
          { title: 'User', key: 'User.name', sortable:  false},
          { title: 'Channel', key: 'channel' },
          { title: 'Category', key: 'Category.name' , sortable:  false},
          { title: 'Timestamp', key: 'createdAt' }
        ],
      }
    },

    watch: {
      options: {
        handler () {
          this.getList()
        },
        deep: true,
      },
    },
    mounted () {
      this.getList();
    },
    methods: {
      getList(){
        this.loading = true
        const { sortBy = [], page, itemsPerPage } = this.options;

        let orderBy = 'createdAt';
        let orderDir = 'DESC';

        if (sortBy.length){
          orderBy = sortBy[0].key;
          orderDir = sortBy[0].order;
        }
        NotificationService.getAll({
          orderBy: orderBy,
          orderDir: orderDir,
          offset: (page - 1) * itemsPerPage,
          limit: itemsPerPage,
        }).then(response => {
          console.log(response.data.list)
          this.items = response.data.list;
          this.totalItems = response.data.total;
          this.loading = false;
        });
      },
      formatDate(value: string){
          if (value) {
            return (new Date(value)).toLocaleString()
          }
      },
      capitalize(str: string){
        const arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        return arr.join(" ");
      }
    },
  }

</script>

<template>
  <div class="pa-3 ma-3">

  <div><h2 class="text-h4 text--primary">Notifications Log</h2></div>
  <v-data-table-server
      :headers="headers"
      :items="items"
      :items-length="totalItems"
      :loading="loading"
      :items-per-page="20"
      item-value="id"
      class="elevation-1"
      @update:options="options = $event"
    >
    <template v-slot:item.createdAt="{ item }">
        {{ formatDate(item.raw.createdAt) }}
    </template>
    <template v-slot:item.channel="{ item }">
        {{ capitalize(item.raw.channel) }}
    </template>
  </v-data-table-server>
  </div>
</template>
