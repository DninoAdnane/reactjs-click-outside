import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { Component } from 'react';
import ReactDOM from "react-dom";

/**
 * @augments {Component<{outsideCall: Function}, {}>}
 */
var ClickOutside =
/*#__PURE__*/
function (_Component) {
  _inherits(ClickOutside, _Component);

  function ClickOutside(props) {
    var _this;

    _classCallCheck(this, ClickOutside);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClickOutside).call(this, props));
    _this.mainRef = React.createRef();
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ClickOutside, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('click', this.handleClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.handleClick);
    }
  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var outsideCall = this.props.outsideCall;

      if (outsideCall) {
        try {
          var node = ReactDOM.findDOMNode(this.mainRef.current);
          if (!node.contains(event.target)) outsideCall();
        } catch (error) {
          return null;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      try {
        var childElement = React.Children.only(this.props.children);
        return React.cloneElement(childElement, {
          ref: this.mainRef
        });
      } catch (error) {
        return null;
      }
    }
  }]);

  return ClickOutside;
}(Component);

export default ClickOutside;