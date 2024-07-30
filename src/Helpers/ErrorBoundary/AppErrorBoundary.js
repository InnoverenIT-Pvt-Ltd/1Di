import React from "react";
import error from "../../../src/Assests/Images/i.png";
import { Button } from "antd";
import { Spacer } from "../../Components/UI/Elements";
import { ReloadOutlined } from "@ant-design/icons";

class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  handleRefreshPage() {
    window.location.reload();
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
 
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "4.68em 1.25em",
            }}
          >
            <div
              style={{
                width: "400px",
                height: "400px",
                padding: "0.31em 1.25em",
                /* border-radius: "50%"; */
                boxShadow: " 0 0.81em 1.68em -0.31em rgba(50, 50, 93, 0.25)",
                backgroundColor: " #f5f5f5",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // margin-bottom: 0.62em;
                // margin-top: 0.62em;
              }}
            >
              <img
                src={error}
                style={{
                  height: "3.12em",
                  width: "3.12em",
                  borderRadius: "50%",
                }}
                alt="app-error"
              ></img>
              <div>
                <h1
                  style={{
                    fontSize: "2.5em",
                    fontWeight: "600px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  OOPS !
                </h1>
                <h1
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  &nbsp; &nbsp; It is a problem with us.
                  <br />
                  Please refresh your browser
                </h1>
              </div>
              <Spacer />
              <Button
                type="primary"
                // icon="reload"
                icon={<ReloadOutlined />}
                onClick={() => this.handleRefreshPage()}
              >
                Retry
              </Button>
            </div>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
