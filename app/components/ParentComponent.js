import React from 'react';
import NavTabs from './NavTabs';

class ParentComponent extends React.Component {
  render() {
    let path = this.props.location.pathname;
    let queryStr = this.props.location.search;
    let fullUrl = path + queryStr;

    updateQueryStringParameter(url) {
      return function(key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = url.indexOf('?') !== -1 ? "&" : "?";
        if (url.match(re)) {
          return url.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
          return url + separator + key + "=" + value;
        }
      };
    }

    // Parse query string for 'name' variable
    getParameterByName(url) {
      return function(name) {
        var adjName = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + adjName + "(=([^&#]*)|&|#|$)");
        var results = regex.exec(url);
        if (!results) {
          return null;
        }
        if (!results[2]) {
          return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, " "));
      };
    }

    let updateQueryString = updateQueryStringParameter(fullUrl);
    let getQueryParam = getParameterByName(fullUrl);

    return (
      <div className='container'>
        <NavTabs
            query={queryStr}
            getQueryParam={getQueryParam}
            updateQueryString={updateQueryString}
          />
      </div>
    );
  }
}

export default ParentComponent;
