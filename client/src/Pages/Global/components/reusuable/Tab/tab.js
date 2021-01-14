import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./scss/tabs.scss";

import ChildTab from "./childTab";

class Tab extends Component {
      static propTypes = {
            children: PropTypes.instanceOf(Array).isRequired,
      };

      constructor(props) {
            super(props);

            this.state = {
                  activeTab: this.props.children[0].props.label,
            };
      }

      onClickTabItem = (tab) => {
            this.setState({ activeTab: tab });
      };

      render() {
            const {
                  onClickTabItem,
                  props: { children },
                  state: { activeTab },
            } = this;

            return (
                  <div className="tabs -ta_tabs">
                        <ol className="tab-list ta-tabs">
                              {children.map((child) => {
                                    const { label } = child.props;

                                    return (
                                          <ChildTab
                                                activeTab={activeTab}
                                                key={label}
                                                label={label}
                                                onClick={onClickTabItem}
                                          />
                                    );
                              })}
                        </ol>
                        <div className="pl-5 mt-5 mb-5 tab-content">
                              {children.map((child) => {
                                    if (child.props.label !== activeTab) return undefined;
                                    return child.props.children;
                              })}
                        </div>
                  </div>
            );
      }
}

export default Tab;
