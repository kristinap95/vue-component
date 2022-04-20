# vue-component

cd v-card

npm install

npm run build -- --target wc --name v-card src/App.vue

Then, include following script tags in your html code:
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js"></script>

<script src="path/to/dist/v-card.min.js"></script>


Example of component:
```<v-card
    thumbnail="https://masteringjs.io/assets/images/vue/vue-transparent.png"
    headertext="Vue.js"
    subhead="Javascript framework"
    media="https://soject.com/wp-content/uploads/2021/02/EzgdmaCQuT84bgDL4fhXZS.jpg"
    supporttext="Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members."
    >
</v-card>
```

