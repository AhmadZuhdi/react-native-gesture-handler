import React, { Component } from 'react';
import {
  TouchableHighlight as RNTouchableHighlight,
  TouchableOpacity as RNTouchableOpacity,
  TouchableNativeFeedback as RNTouchableNativeFeedback,
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const BOX_SIZE = 80;

const renderSampleBox = color => (
  <View
    style={{
      width: BOX_SIZE,
      height: BOX_SIZE,
      backgroundColor: color,
    }}
  />
);

const toReactNativeTouchable = touchable => {
  if (touchable === TouchableOpacity) return RNTouchableOpacity;
  if (touchable === TouchableWithoutFeedback) return RNTouchableWithoutFeedback;
  if (touchable === TouchableHighlight) return RNTouchableHighlight;
  if (touchable === TouchableNativeFeedback) return RNTouchableNativeFeedback;
};

const TOUCHABLES = [
  {
    type: TouchableWithoutFeedback,
    props: {},
    color: 'mediumseagreen',
    renderChild: renderSampleBox,
    text: 'TouchableWithoutFeedback doing nothing',
  },
  {
    type: TouchableWithoutFeedback,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
    },
    color: 'papayawhip',
    renderChild: renderSampleBox,
    text: 'TouchableWithoutFeedback with callbacks',
  },
  {
    type: TouchableWithoutFeedback,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
      onLongPress: () => console.warn('long press'),
    },
    color: 'powderblue',
    renderChild: renderSampleBox,
    text: 'TouchableWithoutFeedback with callbacks (with longPress)',
  },
  {
    type: TouchableOpacity,
    props: {
      hitSlop: {
        right: 20,
      },
    },
    color: 'palegoldenrod',
    renderChild: renderSampleBox,
    text: 'TouchableOpacity with hitSlop on right',
  },
  {
    type: TouchableOpacity,
    props: {},
    color: 'green',
    renderChild: renderSampleBox,
    text: 'TouchableOpacity doing nothing',
  },
  {
    type: TouchableOpacity,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
      onLongPress: () => console.warn('long press'),
    },
    color: 'violet',
    renderChild: renderSampleBox,
    text: 'TouchableOpacity with callbacks (with longPress)',
  },
  {
    type: TouchableHighlight,
    props: {},
    color: 'darksalmon',
    renderChild: renderSampleBox,
    text: "TouchableHighlight doing nothing (shouldn't be responsive)",
  },
  {
    type: TouchableHighlight,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
      onLongPress: () => console.warn('long press'),
    },
    color: 'goldenrod',
    renderChild: renderSampleBox,
    text: 'TouchableHighlight with callbacks (with longPress)',
  },
  {
    type: TouchableHighlight,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
    },
    color: 'forestgreen',
    renderChild: renderSampleBox,
    text: 'TouchableHighlight with callbacks (without longPress)',
  },
  {
    type: TouchableOpacity,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
      delayPressIn: 1000,
    },
    color: 'darkturquoise',
    renderChild: renderSampleBox,
    text: 'TouchableOpacity with callbacks and delayed pressIn (1000 ms)',
  },
  {
    type: TouchableOpacity,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
      delayPressOut: 1000,
    },
    color: 'darkolivegreen',
    renderChild: renderSampleBox,
    text: 'TouchableOpacity with callbacks and delayed pressOut (1000 ms)',
  },
  {
    type: TouchableOpacity,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
      delayPressOut: 1000,
      delayPressIn: 1000,
    },
    color: 'lightpink',
    renderChild: renderSampleBox,
    text:
      'TouchableOpacity with callbacks and delayed pressOut and pressIn (1000 ms)',
  },
  {
    type: TouchableOpacity,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
      delayLongPress: 1000,
    },
    color: 'lightsteelblue',
    renderChild: renderSampleBox,
    text: 'TouchableOpacity with callbacks and delayed longPress (1000 ms)',
  },
  {
    type: TouchableOpacity,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
      delayPressOut: 1000,
    },
    color: 'lemonchiffon',
    renderChild: renderSampleBox,
    text: 'TouchableHighlight with callbacks and delayed pressOut (1000 ms)',
  },
  {
    type: TouchableOpacity,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
    },
    renderChild: () => null,
    text: 'TouchableOpacity with nothing inside',
  },
  {
    type: TouchableOpacity,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
      style: {
        width: BOX_SIZE,
        height: BOX_SIZE,
        backgroundColor: 'ivory',
      },
    },
    renderChild: () => null,
    text: 'TouchableOpacity with nothing inside and style applied',
  },
  {
    type: TouchableNativeFeedback,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
    },
    color: 'indigo',
    renderChild: renderSampleBox,
    text: 'Simple TouchableNativeFeedback ',
  },
  {
    type: TouchableNativeFeedback,
    props: {
      onPressIn: () => console.warn('press in'),
      onPressOut: () => console.warn('press out'),
      onPress: () => console.warn('press'),
    },
    color: 'firebrick',
    renderChild: renderSampleBox,
    text: 'Simple TouchableNativeFeedback with callbacks',
  },

  {
    type: TouchableNativeFeedback,
    props: {},
    background: A => A.SelectableBackground(),
    color: 'transparent',
    renderChild: renderSampleBox,
    text: 'TouchableNativeFeedback (SelectableBackground) tranparent',
  },
  {
    type: TouchableNativeFeedback,
    background: A => A.SelectableBackgroundBorderless(),
    color: 'honeydew',
    renderChild: renderSampleBox,
    text: 'TouchableNativeFeedback (SelectableBackgroundBorderless)',
  },
  {
    type: TouchableNativeFeedback,
    background: A => A.Ripple('floralwhite', true),
    color: 'greenyellow',
    renderChild: renderSampleBox,
    text: 'TouchableNativeFeedback (Ripple, borderless: true)',
  },
  {
    type: TouchableNativeFeedback,
    background: A => A.Ripple('darkslategrey', false),
    color: 'dodgerblue',
    renderChild: renderSampleBox,
    text: 'TouchableNativeFeedback (Ripple, borderless: false)',
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

export default class Touchables extends Component {
  renderRow = ({
    item: { type: GHTouchable, background, props, renderChild, text, color },
  }) => {
    const RNTouchable = toReactNativeTouchable(GHTouchable);
    return (
      <View style={{ width: '100%', padding: 10 }}>
        <Text>{text}</Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            margin: 20,
          }}>
          <RNTouchable
            {...props}
            background={background && background(RNTouchableNativeFeedback)}>
            {renderChild(color)}
          </RNTouchable>
          <GHTouchable
            {...props}
            background={background && background(TouchableNativeFeedback)}>
            {renderChild(color)}
          </GHTouchable>
        </View>
      </View>
    );
  };

  render() {
    return (
      <FlatList
        style={styles.list}
        data={TOUCHABLES}
        keyExtractor={(item, index) => `TC${index}`}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.renderRow}
        renderScrollComponent={props => <ScrollView {...props} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#EFEFF4',
  },
  separator: {
    height: 1,
    backgroundColor: '#DBDBE0',
  },
});
