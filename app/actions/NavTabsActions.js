import alt from '../alt';
import {browserHistory} from 'react-router';

class NavTabsActions {
  constructor() {
    this.generateActions(
      'updateSelected'
    );
  }

  handleSelect(getQueryParam, updateQueryString, key) {
    let currentTab = getQueryParam('tabSelected');
    let newTab = key.toString();

    if(currentTab !== newTab) {
      let newUri = updateQueryString('tabSelected', newTab);

      browserHistory.push(newUri);
    } else {
      this.actions.updateSelected(key);
    }
  }
}

export default alt.createActions(NavTabsActions);
