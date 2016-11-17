import alt from '../alt';
import NavTabsActions from '../actions/NavTabsActions';

class NavTabsStore {
  constructor() {
    this.bindActions(NavTabsActions);
    this.key = 1;
  }

  onUpdateSelected(key) {
    this.key = key;
  }
}

export default alt.createStore(NavTabsStore);
