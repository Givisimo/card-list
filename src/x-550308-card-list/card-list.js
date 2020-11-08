import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import view from './view';
import mockData from './mockData';

createCustomElement('x-550308-card-list', {
  renderer: { type: snabbdom },
  view,
  styles,
  initialState: { mockData },
});
