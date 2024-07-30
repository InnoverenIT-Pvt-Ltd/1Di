import React, { Component } from "react";
import { SubTitle, HeaderText } from "../UI/Elements";
import { BundleLoader } from "../Placeholder";
import { Spin } from "antd";
class GroupView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isViewAll: false,
    };
  }
  toggleViewAll = () => {
    this.setState((prevState) => ({ isViewAll: !prevState.isViewAll }));
    if (!this.state.isViewAll) {
      if (this.props.onViewmore) {
        this.props.onViewmore();
      }
    }
  };

  render() {
    const { groupTitle, isFetching, length, noData, isLoading } = this.props;
    const { isViewAll } = this.state;
    return (
      <>
        {!noData && (
          <>
            <HeaderText
              style={{ marginBottom: 0, color: "#1f4c93", fontWeight: 600 }}
            >
              {groupTitle}
            </HeaderText>
            {isFetching ? (
              <div style={{ height: 100 }}>
                <BundleLoader height={40} />
              </div>
            ) : (
              this.props.children(isViewAll, this.toggleViewAll)
            )}
            {length <= 5 && <div style={{ marginBottom: 10 }} />}
            {length >= 5 && (
              <SubTitle
                style={{
                  cursor: "pointer",
                  color: "#02488e",
                  textAlign: "right",
                  marginRight: "0.3rem",
                }}
                onClick={this.toggleViewAll}
              >
                {isLoading && <Spin size="large" />}
                {/* <div style={{ marginBottom: 10 }}></div> */}
                {isViewAll ? "View less" : "View all"}
              </SubTitle>
            )}
          </>
        )}
      </>
    );
  }
}

export default GroupView;

// .kRuTcW:hover {
//   box-shadow: 0px 5px 10px -0.125em #444;
