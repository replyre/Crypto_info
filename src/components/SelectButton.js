import React from "react";
import "./SelectButton.css";
const SelectButton = ({ item, selected, onClick }) => {
  const styles = {
    buttonstyle: {
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid orange",
      borderRadius: "5px",
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? "orange" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "& :hover": {
        backgroundColor: "orange",
        color: "black",
      },
      width: "22%",
      margin: 2,
    },
  };

  return (
    <>
      <span class="Button" style={styles.buttonstyle} onClick={onClick}>
        {item}
      </span>
      <span class="Button2" style={styles.buttonstyle} onClick={onClick}>
        {item.split(" ")[0] + " " + item.split(" ")[1].slice(0)[0]}
      </span>
    </>
  );
};

export default SelectButton;
