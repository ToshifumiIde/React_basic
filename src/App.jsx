import React,{ useState ,useEffect } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = ()=> {
  // console.log("最初");
  const [num , setNum] = useState(0);
  const [faceShowFlag , setFaceShowFlag] = useState(false);

  const onClickSwitchShowFlag = ()=> {
    setFaceShowFlag(!faceShowFlag);
  }

  const onClickCountUp = () => {
    setNum(num + 1);
    //setNum()関数内に実行したい処理を記入する
    //stringを渡すことも可能
  };

  useEffect(()=> {
    if (num > 0){
      if(num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  },[num]);
  //useEffect(第一引数,第二引数)
  //第一引数：実行したい処理内容
  //第二引数：実行したい(変化の)タイミングを[]配列で指定（複数の条件を設定可能）。空の配列の場合初回のみ、無記入の場合renderがかかる度
  //処理の関心を分離することが可能



  // const contentLadyStyle = {
  //   color:"pink",
  //   fontSize:"24px",
  // };
  //styleをオブジェクトとして渡すことも可能。
  //この場合、記法はキャメルケース（cssだとfont-size ）。

  return (
    <>
    <h1 style={{color:"red",}}>hello world</h1>
    <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
    <ColorfulMessage color="pink">元気です！</ColorfulMessage>
    <button onClick={onClickCountUp}>
      カウントアップ！！
    </button>
    <button onClick={()=>{
      setNum(num + 1);
    }}>
      カウントアップ
    </button>
    <button onClick={()=>{
      setNum(num - 1);
    }}>
      カウントダウン
    </button>
    <button onClick={onClickSwitchShowFlag}>on/off</button>
    <p>{num}</p>
    {faceShowFlag ? <p>٩( 'ω' )و </p>:null}
    {/* {faceShowFlag || <p>✌︎('ω')✌︎</p> } */}
    {/* useStateの初期値をコンポーネント内で使う場合、JSを使用することになるため、カーリーブラケットで囲う */}
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