import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

const Selection = createReactClass({
  propTypes: {
    className: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return {
      disabled: false,
    };
  },

  onSelect() {
    this.props.onSelect(this.props.date);
  },

  render() {
    return (
      <input className={this.props.className}
             type='button'
             onClick={this.onSelect}
             disabled={this.props.disabled}
             value={this.props.label} />
    );
  },
});

export default Selection;
