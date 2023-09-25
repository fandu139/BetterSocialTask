import Colors from '../../theme/colors';
import Fonts from '../../theme/fonts';
import Spinner from '../../uikit/Spinner';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AppSplashScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>
        BetterSocial adalah aplikasi media sosial yang dapat Anda percayai.
        Terinspirasi oleh komunitas kehidupan nyata, kami menghormati privasi
        dan mendorong percakapan jujur ​​melalui postingan anonim, login tanpa
        data, algoritme yang sehat, ulasan berita pihak ketiga, dan banyak lagi.
      </Text>
      <View style={styles.bottomContent}>
        <Spinner />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#255fad',
  },
  textContent: {
    width: 250,
    textAlign: 'center',
    color: '#ffffff',
  },
  bottomContent: {
    position: 'absolute',
    bottom: 100,
  },
  logoContainer: {
    width: 200,
    height: 200,
  },
  versionText: {
    marginTop: 30,
    color: Colors.WHITE,
    ...Fonts.regular,
  },
});

export default AppSplashScreen;
