import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import AppStyles from '../../../theme/appStyles';
import PostItem from './PostItem';

const OrderListHome = ({data: dataList}) => {
  const [isRefreshing, setIsRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  return (
    <FlatList
      testID="flat-list-item-post-active"
      onEndReachedThreshold={0.1}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={AppStyles.flatListContainer}
      data={dataList}
      renderItem={({item, index}) => <PostItem item={item} index={index} />}
    />
  );
};

export default OrderListHome;
