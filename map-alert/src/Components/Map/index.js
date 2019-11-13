import React from "react";
import styles from "./style";
import { ActivityIndicator } from "react-native-paper";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import MapView, { UrlTile, MAP_TYPES } from "react-native-maps";

export default class Map extends React.Component {
  state = {
    region: null
  };

  _getCurrentLocation = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      return console.log("Permissão negada!");
    }

    const {
      coords: { latitude, longitude }
    } = await Location.getCurrentPositionAsync({});
    this.setState({
      region: {
        latitude,
        longitude,
        latitudeDelta: 0.0922 / 30,
        longitudeDelta: 0.0421 / 30
      }
    });
  };

  componentDidMount() {
    this._getCurrentLocation();
  }

  render() {
    const { region } = this.state;
    if (!region) {
      return (
        <ActivityIndicator
          animating={true}
          size="large"
          style={styles.loadingMap}
        />
      );
    }

    return (
      <MapView
        style={styles.map}
        region={region}
        provider={null}
        mapType={MAP_TYPES.NONE}
        rotateEnabled={false}
        showsUserLocation
      >
        <UrlTile
          urlTemplate="http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maximumZ={22}
        />
      </MapView>
    );
  }
}
