import Vue from 'vue';
import {
  Alert,
  Button,
  Card,
  Dialog,
  Form,
  FormItem,
  Icon,
  Input,
  Link,
  Option,
  Select,
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import 'element-ui/lib/theme-chalk/index.css';

locale.use(lang);

const elements = [Button, Card, Alert, Form, FormItem, Select, Input, Option, Dialog, Icon, Link];

elements.forEach((el) => Vue.component(el.name, el));
