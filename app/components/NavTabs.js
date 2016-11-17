import React from 'react';
import {Tab, Tabs, Glyphicon} from 'react-bootstrap';
import NavTabsActions from '../actions/NavTabsActions';
import NavTabsStore from '../stores/NavTabsStore';

class NavTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavTabsStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  // First render
  componentWillMount() {
    let selected = this.determineSelection(this.props.getQueryParam);

    this.setState({key: selected});
  }

  // Successive renders
  componentWillReceiveProps(nextProps) {
    if(this.props.query !== nextProps.query) {
      let selected = this.determineSelection(nextProps.getQueryParam);

      this.setState({key: selected});
    }
  }

  componentDidMount() {
    NavTabsStore.listen(this.onChange);
  }

  componentWillUnmount() {
    NavTabsStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  determineSelection(getQueryParam) {
    let tabSelected = getQueryParam("tabSelected");
    let selected = 1; // Default to one

    switch (tabSelected) {
      case "2":
        selected = 2;
        break;
      case "3":
        selected = 3;
        break;
      case "4":
        selected = 4;
        break;
      case "5":
        selected = 5;
        break;
      default:
        selected = 1;
        break;
    }
    return selected;
  }

  render() {
    return (
      <Tabs activeKey={this.state.key} onSelect={NavTabsActions.handleSelect.bind(this, this.props.getQueryParam, this.props.updateQueryString)}>
        <Tab eventKey={1} title={this.state.key === 1 ?
          <span className="tabExpand" onClick={() => {$('#tabOnePane').slideDown(400);}}><b>Tab 1</b></span> :
          <span onClick={() => {$('#tabOnePane').show();}}><b>Tab 1</b></span>}>
          <div className='jumbotron' id="tabOnePane">
            <div className="pull-right"><span onClick={() => {$('#tabOnePane').slideUp(400);}}><Glyphicon glyph="remove"/></span></div>
            <h1>Tab 1 Content</h1>
          </div>
        </Tab>
        <Tab eventKey={2} title={this.state.key === 2 ?
          <span className="tabExpand" onClick={() => {$('#tabTwoPane').slideDown(400);}}><b>Tab 2</b></span> :
          <span onClick={() => {$('#tabTwoPane').show();}}><b>Tab 2</b></span>}>
          <div className='jumbotron' id="tabTwoPane">
            <div className="pull-right"><span onClick={() => {$('#tabTwoPane').slideUp(400);}}><Glyphicon glyph="remove"/></span></div>
            <h1>Tab 2 Content</h1>
          </div>
        </Tab>
        <Tab eventKey={3} title={this.state.key === 3 ?
          <span className="tabExpand" onClick={() => {$('#tabThreePane').slideDown(400);}}><b>Tab 3</b></span> :
          <span onClick={() => {$('#tabThreePane').show();}}><b>Tab 3</b></span>}>
          <div className='jumbotron' id="tabThreePane">
            <div className="pull-right"><span onClick={() => {$('#tabThreePane').slideUp(400);}}><Glyphicon glyph="remove"/></span></div>
            <h1>Tab 3 Content</h1>
          </div>
        </Tab>
        <Tab eventKey={4} title={this.state.key === 4 ?
          <span className="tabExpand" onClick={() => {$('#tabFourPane').slideDown(400);}}><b>Tab 4</b></span> :
          <span onClick={() => {$('#tabFourPane').show();}}><b>Tab 4</b></span>}>
          <div className='jumbotron' id="tabFourPane">
            <div className="pull-right"><span onClick={() => {$('#tabFourPane').slideUp(400);}}><Glyphicon glyph="remove"/></span></div>
            <h1>Tab 4 Content</h1>
          </div>
        </Tab>
        <Tab eventKey={5} title={this.state.key === 5 ?
          <span className="tabExpand" onClick={() => {$('#tabFivePane').slideDown(400);}}><b>Tab 5</b></span> :
          <span onClick={() => {$('#tabFivePane').show();}}><b>Tab 5</b></span>}>
          <div className='jumbotron' id="tabFivePane">
            <div className="pull-right"><span onClick={() => {$('#tabFivePane').slideUp(400);}}><Glyphicon glyph="remove"/></span></div>
            <h1>Tab 5 Content</h1>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default NavTabs;
