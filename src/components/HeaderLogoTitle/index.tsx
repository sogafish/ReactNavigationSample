import * as React from 'react';
import { View, Image } from 'react-native';
import LOGO_IMAGE from '../../../assets/rn-logo.png';
import { styles } from './styles';

export function HeaderLogoTitle() {
  return (
    <View style={styles.headerLogoTitle}>
      <Image source={LOGO_IMAGE} style={styles.logoImage} />
    </View>
  );
}
