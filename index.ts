// @ts-ignore
import './src/assets/less/style.less';

import { AppMenu } from './src/modules/app-menu/AppMenu';
import { Simulator } from './src/Simulator';

const menu = new AppMenu();
const simulator = new Simulator(document.body);
