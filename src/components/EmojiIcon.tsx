import { StyleSheet, Text } from 'react-native';
import React from 'react';

interface EmojiIconProps {
  name: string;
  size?: number;
  color?: string;
  style?: any;
}

const EmojiIcon: React.FC<EmojiIconProps> = ({
  name,
  size = 24,
  color = '#000',
  style,
}) => {
  // Unicode simgeler (emoji'lerden daha iyi renk desteği)
  const getUnicodeIcon = (iconName: string): string => {
    const iconMap: { [key: string]: string } = {
      // Navigation
      left: '←',
      right: '→',
      close: '×',

      // UI Actions
      search: '⚲',
      menu: '☰',
      add: '+',
      minus: '−',

      // App Features
      home: '⌂',
      cart: '⚿',
      like: '♡',
      favorite: '♡',
      bell: '◉',
      history: '◷',
      star: '☆',

      // Coffee related
      bean: '●',
      beans: '●',
      location: '◎',
      drop: '○',

      // Payment
      chip: '▣',
      visa: '▣',
      wallet: '▢',

      // Default fallback
      default: '●',
    };

    return iconMap[iconName] || iconMap.default;
  };

  return (
    <Text style={[styles.icon, { fontSize: size, color: color }, style]}>
      {getUnicodeIcon(name)}
    </Text>
  );
};

const styles = StyleSheet.create({
  icon: {
    textAlign: 'center',
  },
});

export default EmojiIcon;
