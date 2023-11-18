import Ionicons from "@expo/vector-icons/Ionicons";
import { FC } from "react";
import { Pressable, StyleSheet } from "react-native";

type TProps = {
  name: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string;
  onPress: () => void;
};

const IconButton: FC<TProps> = ({
  name,
  size = 24,
  color = "white",
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
