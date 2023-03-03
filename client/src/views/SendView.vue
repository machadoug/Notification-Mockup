<template>
  <v-card
    class="mx-auto"
    style="max-width: 500px;"
  >
    <v-toolbar
      cards
      dark
      flat
    >
      <v-card-title class="text-h6 font-weight-regular">
        Send notification
      </v-card-title>
    </v-toolbar>
    <v-form
      id="notification-form"
      ref="form"
      v-model="form"
      class="pa-4 pt-6"
      @submit.prevent="submit"
    >

    <v-select
      label="Select a category"
      :rules="[rules.required]"
      :items="categories"
      v-model="selectedCategory"
    ></v-select>
      <v-textarea
        :rules="[rules.required,rules.length(5), rules.maxlength(250)]"
        v-model="message"
        auto-grow
        variant="filled"
        label="Message"
        rows="3"
      ></v-textarea>

    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        :disabled="!form"
        :loading="isLoading"
        type="submit" block class="mt-2" color="success"  form="notification-form"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import CategoryService from '../services/CategoryService';
import NotificationService from '../services/NotificationService';

import { useGlobal } from '@/store';

  export default {
    data: () => ({
      categories: [],
      selectedCategory: [],
      message: '',
      form: false,
      isLoading: false,
      rules: {
        length: (len: number) => (v:any) => (v || '').length >= len || `Invalid character length, required ${len}`,
        maxlength: (len: number) => (v:any) => (v || '').length <= len || `Invalid character length, maximum allowed ${len}`,
        required: (v:any) => !!v || 'This field is required',
      },
    }),
    mounted () {
      this.getCategoryList();
    },
    methods: {
      async submit (e: any) {
        /** Global Store */
        const globalStore = useGlobal();
        /** Display snackbar */
        await NotificationService.send({'message': this.message, 'category': this.selectedCategory}).then(response => {
          if(response.data.message){
            globalStore.setMessage(response.data.message)
            this.$refs.form.reset();
          }
        });
      },
      getCategoryList(){
        CategoryService.getAll().then(response => {
          this.categories = response.data.list;
        });
      }
    },
  }
</script>
