import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../theme/colors';
import PostListHome from './components/PostListHome';
import {EXAMPLE_IMAGE} from '../../assets/images';

const HomeScreen = () => {
  const dataList = [
    {
      user: 'Fandu Pratama',
      date: '26 Sep 2023',
      description:
        'Nyesel baru tau ada life hacks begini Basmi jerawat, level kegantengan meningkat Pakai "Garnier Men Acno Fight Promo beli 3 pcs cuma Rp69rb dari jam 12 siang - 12 malam Ya kali ga kuy! ',
      image: EXAMPLE_IMAGE,
      comment: {
        totalComment: 201,
      },
      like: {
        totalLike: 100,
      },
    },
    {
      user: 'Azkia Aisyah',
      date: '25 Sep 2023',
      description:
        'Nyesel baru tau ada life hacks begini Basmi jerawat, level kegantengan mening',
      image: EXAMPLE_IMAGE,
      comment: {
        totalComment: 10,
      },
      like: {
        totalLike: 100,
      },
    },
    {
      user: 'Fandu Pratama',
      date: '26 Sep 2023',
      description:
        'Nyesel baru tau ada life hacks begini Basmi jerawat, level kegantengan meningkat Pakai "Garnier Men Acno Fight Promo beli 3 pcs cuma Rp69rb dari jam 12 siang - 12 malam Ya kali ga kuy! ',
      image: EXAMPLE_IMAGE,
      comment: {
        totalComment: 201,
      },
      like: {
        totalLike: 100,
      },
    },
    {
      user: 'Azkia Aisyah',
      date: '25 Sep 2023',
      description:
        'Nyesel baru tau ada life hacks begini Basmi jerawat, level kegantengan mening',
      image: EXAMPLE_IMAGE,
      comment: {
        totalComment: 10,
      },
      like: {
        totalLike: 100,
      },
    },
  ];

  return (
    <View
      style={styles.container}
      testID="home-screen"
      accessibilityLabel="home-screen">
      <PostListHome data={dataList} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  textName: {
    color: Colors.WHITE,
  },
});

export default HomeScreen;
