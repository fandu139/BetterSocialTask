import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import {PLACEHOLDER_PROFILE} from '../../../assets/images';
import AppStyles from '../../../theme/appStyles';
import Colors from '../../../theme/colors';

type Props = {
  item: {
    user: string;
    date: string;
    description: string;
    image: string;
    comment: {
      totalComment: number;
    };
    like: {
      totalLike: number;
    };
  };
  index: number;
};

/**
 *
 * @param item
 * @param index
 * @param onPress
 * @returns {*}
 * @constructor
 */

const ItemList = React.memo(({item, index}: Props) => {
  const user = item?.user;
  const date = item?.date;
  const description = item?.description;
  const image = item?.image;
  const totalComment = item?.comment.totalComment;
  const totalLike = item?.like.totalLike;

  return (
    <View key={index} style={styles.container} testID="card-item-order">
      <View style={styles.statusSection}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          source={PLACEHOLDER_PROFILE}
          style={styles.imageItem}
        />
        <View>
          <Text>{`${user}`}</Text>
          <Text>{`${date}`}</Text>
        </View>
      </View>
      <View style={styles.orderInfoSection}>
        <Text>{`${description}`}</Text>
      </View>
      <FastImage
        resizeMode={FastImage.resizeMode.contain}
        source={image}
        style={styles.imageItemConntent}
      />
      <View style={styles.orderInfoSection}>
        <View style={AppStyles.rowItemsCenterSpace}>
          <View style={AppStyles.rowItemsCenter}>
            <Text style={styles.textColorOrder}>{`${totalComment}`}</Text>
            <Text style={styles.textColorOrder}>{`${totalComment}`}</Text>
            <Text style={styles.textColorOrder}>{`${totalComment}`}</Text>
          </View>
          <View style={AppStyles.rowItemsCenter}>
            <Text style={styles.textColorOrder}>{`${totalLike}`}</Text>
            <Text style={styles.textColorOrder}>{`${totalLike}`}</Text>
            <Text style={styles.textColorOrder}>{`${totalLike}`}</Text>
            <Text style={styles.textColorOrder}>{`${totalLike}`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  statusSection: {
    ...AppStyles.rowItems,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  orderInfoSection: {paddingHorizontal: 15, marginVertical: 10},
  orderAddressInfo: {
    marginTop: 10,
    marginBottom: 17,
  },
  textColorOrder: {
    color: Colors.BLACK_50,
  },
  imageItem: {
    width: 36,
    height: 36,
  },
  imageItemConntent: {
    width: 'auto',
    height: 350,
  },
});

export default ItemList;
