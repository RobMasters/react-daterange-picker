import React from 'react';
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import BemMixin from './utils/BemMixin';

import PureRenderMixin from 'react-addons-pure-render-mixin';


const Legend = createReactClass({
  mixins: [BemMixin, PureRenderMixin],

  propTypes: {
    selectedLabel: PropTypes.string.isRequired,
    stateDefinitions: PropTypes.object.isRequired,
  },

  render() {
    let {selectedLabel, stateDefinitions} = this.props;
    let items = [];
    let name;
    let def;
    let style;

    for (name in stateDefinitions) {
      def = stateDefinitions[name];
      if (def.label && def.color) {
        style = {
          backgroundColor: def.color,
        };
        items.push(
          <li className={this.cx({element: 'LegendItem'})} key={name}>
            <span className={this.cx({element: 'LegendItemColor'})} style={style} />
            <span className={this.cx({element: 'LegendItemLabel'})}>{def.label}</span>
          </li>
        );
      }
    }

    return (
      <ul className={this.cx()}>
        <li className={this.cx({element: 'LegendItem'})}>
          <span className={this.cx({element: 'LegendItemColor', modifiers: {'selection': true}})} />
          <span className={this.cx({element: 'LegendItemLabel'})}>{selectedLabel}</span>
        </li>
        {items}
      </ul>
    );
  },
});

export default Legend;
