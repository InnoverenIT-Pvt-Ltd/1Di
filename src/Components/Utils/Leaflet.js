import React, { Component } from "react";
import { Button } from "antd";
import L from "leaflet";
import { MapLayer, Map, TileLayer, withLeaflet } from "react-leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import Routing from "./RoutingMachine";
class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      zoomedOut: false,
      isMapInit: false,
    };
  }
  toggleMapZoom = (bool) => this.setState({ zoomedOut: bool });
  componentDidMount() {
    // this.saveMap.current.leafletElement.invalidateSize();
    setTimeout(() => {
      this.setState({
        isMapInit: true,
      });
    }, 3000);
  }
  // componentDidUpdate() {
  //     this.saveMap.current.leafletElement.invalidateSize();
  // }
  saveMap = (map) => {
    this.map = map;
    this.setState({
      isMapInit: true,
    });
  };

  render() {
    const {
      markers,
      width,
      height,
      margin,
      zoom,
      centerPosition,
      MyPopupMarker,
      userAddress,
    } = this.props;
    const { zoomedOut } = this.state;
    const position = centerPosition;
    const waypoints = [];
    let startLat;
    let startLng;
    let endLat = markers.length && markers[0].lat;
    let endLng = markers.length && markers[0].lng;
    userAddress &&
      userAddress.forEach((l) => {
        if (l.latitude && l.longitude) {
          startLat = parseFloat(l.latitude);
          startLng = parseFloat(l.longitude);
        }
      });
    waypoints.push(L.latLng(startLat, startLng));
    waypoints.push(L.latLng(endLat, endLng));
    if (!markers) {
      return <p>No locations </p>;
    }
    return (
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", right: 7, top: 2, zIndex: 401 }}>
          <Button.Group size="medium">
            {zoomedOut && (
              <Button
                style={{ border: "0.0625em solid #aaa" }}
                onClick={() => this.toggleMapZoom(false)}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;NEAR BY&nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
            )}
            {!zoomedOut && (
              <Button
                style={{ border: "0.0625em solid #aaa" }}
                onClick={() => this.toggleMapZoom(true)}
              >
                WORLD WIDE
              </Button>
            )}
          </Button.Group>
        </div>
        <Map
          ref={this.saveMap}
          center={position || null}
          zoom={zoomedOut ? 2 : zoom}
          style={{
            width: width || "auto",
            height: height || "85vh",
            margin: margin || "0.125em",
            marginTop: "0.5em",
            border: "0.0625em solid #ccc",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <MyMarkersList markers={markers} /> */}
          {waypoints[0] !== undefined ? (
            this.state.isMapInit && (
              <Routing map={this.map} waypoints={waypoints} />
            )
          ) : (
              <div style={{ display: "none" }}>
                {markers &&
                  markers.map((mark, i) =>
                    MyPopupMarker ? <MyPopupMarker key={i} mark={mark} /> : <></>
                  )}
              </div>
            )}

          {/* {this.state.isMapInit && waypoints.length && <Routing map={this.map} waypoints={waypoints} />} */}
        </Map>
      </div>
    );
  }
}

export default MapContainer;
