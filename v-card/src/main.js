import Vue from 'vue';
import wrap from "@vue/web-component-wrapper";
import App from "./App.vue";

window.customElements.define("v-card", wrap(Vue, App));