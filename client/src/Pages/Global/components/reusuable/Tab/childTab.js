import React, { Component } from "react";
import PropTypes from "prop-types";

class ChildTab extends Component {
      static propTypes = {
            activeTab: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired,
      };

      onClick = () => {
            const { label, onClick } = this.props;
            onClick(label);
      };

      render() {
            const {
                  onClick,
                  props: { activeTab, label },
            } = this;
            let id = "tabz" + label;
            let className = "tab-list-item nav-item";
            if (activeTab === label) {
                  className += " tab-list-active";
            }

            return (
                  <li id={id} className={className} onClick={onClick}>
                        {label}
                  </li>
            );
      }
}

export default ChildTab;