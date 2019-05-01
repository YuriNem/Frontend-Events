import Vue from 'vue';
import store from './store';
import './style.css';
import App from './components/App/App.jsx';

new Vue({
  store,
  render: h => h(App),
}).$mount('#render');
