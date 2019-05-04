import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {func, element} from "prop-types";

/**
 * @augments {Component<{outsideCall: Function}, {}>}
 */
class ClickOutside extends Component {
    constructor(props) {
        super(props);
        this.mainRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click',this.handleClick);
    }

    componentWillUnmount() {
        window.removeEventListener('click',this.handleClick);
    }

    handleClick(event) {
        let outsideCall = this.props.outsideCall;
        if (outsideCall) {
            try {
                let node = ReactDOM.findDOMNode(this.mainRef.current);
                if (!node.contains(event.target)) outsideCall();
            } catch(error) {
                return null;
            }
        }
    }


    render() {
        try {
            const childElement = React.Children.only(this.props.children);
            return React.cloneElement(
                childElement,
                {ref  : this.mainRef}
            )
        } catch (error) {
            return null;
        }
        
    }
}

ClickOutside.propTypes = {
    outsideCall : func.isRequired,
    children : element.isRequired
};

export default ClickOutside;