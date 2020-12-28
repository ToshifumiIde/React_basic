import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  //親要素から引き継いだpropsを分割代入する。
  const contentStyle = {
    color:color,// propsで引き継いだcolorをプロパティに当てる
    fontSize:"24px",
  };

  return(
    <p style={contentStyle}>{children}</p>
    // タグで囲った中身を呼び出す場合、{props.children}で返却する。
  )
};

export default ColorfulMessage;