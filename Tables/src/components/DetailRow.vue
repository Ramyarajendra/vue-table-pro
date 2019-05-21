<template>
    <div>
        <div class="inline field">
            <textarea v-model="message" class="textarea" placeholder="Message"></textarea>
        </div>
        <div class="inline field">
            <button v-on:click="updateMessage" class="button is-normal is-primary is-focused">
                Press
            </button>
            <modal name="hello-world">
                <div>
                    <h1 class="title is-primary">Details</h1>
                    <div class="inline field">
                        <label class="is-normal is-bold">Name: </label>
                        <span>{{rowData.name}}</span>
                    </div>
                    <div class="inline field">
                        <label>Email: </label>
                        <span>{{rowData.email}}</span>
                    </div>
                    <div class="inline field">
                        <label>Birthdate: </label>
                        <span>{{rowData.birthdate}}</span>
                    </div>
                    <div class="inline field">
                        <label>Message: </label>
                        <span>{{this.message}}</span>
                    </div>
                </div>
            </modal>

        </div>
    </div>
</template>

<script>
    import Router from '../Router'
    import Vue from 'vue'
    import Vuex from 'vuex'
    import store from '../Store/store'
    import NewPage from './NewPage'
    Vue.use(Vuex)
    export default {
        data() {
            return {
                message: '',
            };
        },
        props: {
            rowData: {
                type: Object,
                required: true
            }
        },
        methods: {
            updateMessage() {
                let items = {}
                items.message = this.message;
                items.email = this.rowData.email
                this.$modal.show('hello-world', this.message);
                this.$store.commit('updateMessage',items);
                
                
            },
        }
    } 
</script>
