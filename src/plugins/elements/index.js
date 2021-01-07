import Vue from 'vue';
import { Alert, Button, Card } from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/lib/theme-chalk/index.css';

locale.use(lang);

const elements = [Button, Card, Alert];

elements.forEach((el) => Vue.component(el.name, el));
