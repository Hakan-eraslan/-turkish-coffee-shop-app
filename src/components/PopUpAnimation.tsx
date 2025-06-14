import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE} from '../theme/theme';

interface PopUpAnimationProps {
  style: any;
  source: any;
}

const PopUpAnimation: React.FC<PopUpAnimationProps> = ({style, source}) => {
  return (
    <View style={styles.LottieAnimationContainer}>
      <View style={[styles.AnimationPlaceholder, style]}>
        <Text style={styles.AnimationText}>✓</Text>
        <Text style={styles.AnimationSubText}>Success!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LottieAnimationContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: COLORS.secondaryBlackRGBA,
    justifyContent: 'center',
  },
  AnimationPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primaryWhiteHex,
    borderRadius: 20,
    marginHorizontal: 40,
    paddingVertical: 40,
  },
  AnimationText: {
    fontSize: 60,
    color: COLORS.primaryOrangeHex,
    fontFamily: FONTFAMILY.poppins_bold,
    marginBottom: 10,
  },
  AnimationSubText: {
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryBlackHex,
    fontFamily: FONTFAMILY.poppins_medium,
  },
});

export default PopUpAnimation;
