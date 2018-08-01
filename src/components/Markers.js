import React, {Component} from 'react';


class Markers extends Component {
  render() {
    const recommendations = {this.state.markers.map((marker, index) => {
    return <MapView.Marker key={index} coordinate={marker.coordinate}>
        <Animated.View style={[styles.markerWrap]}>
          <Animated.View style={[styles.ring]} />
          <View style={styles.marker} />
        </Animated.View>
      </MapView.Marker>
    })
    return (
      <View>
        {recommendations}
      </View>
      )
  }

export default Markers
