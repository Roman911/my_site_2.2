import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import moment from 'moment';
import 'moment/locale/uk';
import 'moment/locale/ru';
import { langT } from "./scripts/log/lang";

moment.locale(langT);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();