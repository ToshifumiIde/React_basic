import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = ()=> {

  const onClickButton = () => {
    alert();
  };

  const contentLadyStyle = {
    color:"pink",
    fontSize:"24px",
  };
  //styleをオブジェクトとして渡すことも可能。
  //この場合、記法はキャメルケース（cssだとfont-size ）。

  return (
    <>
    <h1 style={{color:"red",}}>hello world</h1>
    <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
    <ColorfulMessage color="pink">元気です！</ColorfulMessage>
    <button onClick={onClickButton}>
      ボタン
    </button>
    {/* Reactでのイベント設定はキャメルケースで記入 */}
    {/* この場合、onClick時が関数の実行タイミング()となる */}
    {/* =の後ろをカーリーブラケット{}で囲うと「中にJSを記載可能」 */}
    {/* styleの設定も可能。={}はJSの記法を宣言。内部の{}は「オブジェクト」を記載 */}
    {/* オブジェクトの中に記載する場合、中身は"string"で記載。""で囲わないとエラーが返る */}
    </>//React.Fragment。returnは1つの要素として返却する必要がある。
  )
};

export default App;
//reactのコンポーネントと明示するため、ファイル名は.jsxで記載することを推奨。
//命名に関しては「パスカルケース」を推奨(SomeComponent.jsxの様に、単語の頭文字を大文字に設定)