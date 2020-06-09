import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import Modal from "react-native-modal";

import ColorBadge from "../common/colorBadge";

import s from "./styles";

const ItemModal = ({ isVisible, setIsVisible, currentProduct }) => {
  const [selectedColor, setSelectedColor] = useState({
    rgbColors: "",
    colorName: "",
  });

  const { rgbColors, articleColorNames, variantSizes } = currentProduct;

  const handleClose = () => {
    setSelectedColor({
      rgbColors: "",
      colorName: "",
    });
    setIsVisible();
  };

  return (
    <Modal isVisible={isVisible} style={s.container}>
      <TouchableOpacity onPress={handleClose} style={{ marginBottom: 30 }}>
        <Text>Close</Text>
      </TouchableOpacity>
      <View>
        <Text>Choose Color</Text>
        <View style={[s.rowDesc, s.rowColors]}>
          <Text style={s.label}>Available colors: </Text>
          <View style={s.colorsList}>
            {rgbColors.map((el, i) => (
              <TouchableOpacity
                key={i}
                onPress={() =>
                  setSelectedColor({
                    rgbColors: el,
                    colorName: articleColorNames[i],
                  })
                }
                style={{ padding: 5 }}
              >
                <ColorBadge color={el} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Text style={s.label}>Selected Color: </Text>
        <Text>{selectedColor.colorName}</Text>
      </View>
      <View>
        <Text>Choose Size</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
            paddingHorizontal: 10,
            flexWrap: "wrap",
          }}
        >
          {variantSizes
            .sort((a, b) => a.orderFilter - b.orderFilter)
            .map((i, idx) => (
              <TouchableOpacity
                style={{
                  width: 35,
                  height: 35,
                  borderWidth: 0.5,
                  borderColor: "#ccc",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 20,
                  marginBottom: 15,
                }}
              >
                <Text key={idx}>{i.filterCode}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </Modal>
  );
};

export default ItemModal;
