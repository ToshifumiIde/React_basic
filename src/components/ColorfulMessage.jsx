import React from "react";

const ColorfulMessage = (props) => {
  //コンポーネントの引数にpropsを渡すことで、親コンポーネントで設定した引数をコンポーネントに引き継ぐことが可能。
  console.log(props);
  //propsはオブジェクトを返却する。したがって、中身はドット記法で取得可能。
  const { color, children } = props;
  //親要素から引き継いだpropsを分割代入する。
  const contentStyle = {
    color,// propsで引き継いだcolorをプロパティに当てる
    fontSize:"24px",
  };

  return(
    <p style={contentStyle}>{children}</p>
    // タグで囲った中身を呼び出す場合、{props.children}で返却する。
  )
};

export default ColorfulMessage;