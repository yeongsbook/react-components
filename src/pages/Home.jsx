import React, { useState } from "react";
import Layout from "components/Layout";
import styles from "styles/pages/Home.module.css";

const mockupTexts = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Quam viverra orci sagittis eu volutpat odio. Elit sed vulputate mi sit amet. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Vestibulum morbi blandit cursus risus at ultrices. Cursus risus at ultrices mi tempus. Nulla malesuada pellentesque elit eget gravida cum. Orci a scelerisque purus semper. Amet nisl suscipit adipiscing bibendum. Eu lobortis elementum nibh tellus molestie nunc non blandit. Ipsum consequat nisl vel pretium lectus quam id leo in. Aliquet nec ullamcorper sit amet risus nullam eget. Nisl rhoncus mattis rhoncus urna neque viverra. Vitae auctor eu augue ut. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Eu non diam phasellus vestibulum lorem sed. Et magnis dis parturient montes nascetur ridiculus mus mauris.",
  "Viverra maecenas accumsan lacus vel facilisis volutpat est. Egestas dui id ornare arcu. Tellus rutrum tellus pellentesque eu tincidunt. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Interdum posuere lorem ipsum dolor sit amet. Velit euismod in pellentesque massa placerat. Et netus et malesuada fames ac turpis. A cras semper auctor neque vitae tempus quam. Duis at consectetur lorem donec massa sapien faucibus et molestie. Pellentesque sit amet porttitor eget dolor. Convallis aenean et tortor at risus viverra adipiscing. Egestas dui id ornare arcu odio. Urna id volutpat lacus laoreet non curabitur gravida. Elementum integer enim neque volutpat ac. Sapien pellentesque habitant morbi tristique. Mauris pellentesque pulvinar pellentesque habitant. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Libero nunc consequat interdum varius.",
  "Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. A cras semper auctor neque. Leo duis ut diam quam nulla porttitor massa id neque. Tincidunt lobortis feugiat vivamus at augue. Porttitor leo a diam sollicitudin tempor id eu nisl. Elementum integer enim neque volutpat. Quisque egestas diam in arcu cursus euismod quis viverra. Parturient montes nascetur ridiculus mus mauris. Et netus et malesuada fames ac turpis. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Interdum varius sit amet mattis vulputate enim. Ornare arcu odio ut sem.",
  "Praesent semper feugiat nibh sed pulvinar. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Sed nisi lacus sed viverra tellus in hac. Arcu risus quis varius quam quisque id diam vel quam. Tellus at urna condimentum mattis pellentesque id nibh. Viverra ipsum nunc aliquet bibendum enim facilisis. Dignissim enim sit amet venenatis urna cursus. Hendrerit dolor magna eget est lorem ipsum dolor. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Sit amet est placerat in egestas erat. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Volutpat est velit egestas dui id ornare arcu odio. Tincidunt id aliquet risus feugiat in ante metus. Et malesuada fames ac turpis egestas. Sem nulla pharetra diam sit.",
  "Nibh nisl condimentum id venenatis. Etiam sit amet nisl purus in mollis nunc. Vitae tortor condimentum lacinia quis vel eros. Fermentum leo vel orci porta non pulvinar neque. Ullamcorper morbi tincidunt ornare massa. Mauris a diam maecenas sed enim ut sem viverra. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Sit amet luctus venenatis lectus magna fringilla urna. Vestibulum sed arcu non odio euismod lacinia at. Nibh tellus molestie nunc non blandit. Hendrerit gravida rutrum quisque non tellus orci ac. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Duis ut diam quam nulla porttitor massa id neque aliquam. Sit amet dictum sit amet justo donec enim diam.",
];

function ChangeTextButton({ children, disabled, onClick }) {
  return (
    <button
      type="button"
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Home() {
  const [textLength, setTextLength] = useState(1);

  const changeTextLength = (delta) => {
    setTextLength(textLength + delta);
  };

  return (
    <Layout>
      <div className={styles.change_button_area}>
        <div className={styles.length}>현재 문단 개수 : {textLength}</div>
        <ChangeTextButton
          disabled={textLength === 0}
          onClick={() => {
            changeTextLength(-1);
          }}
        >
          문단 삭제
        </ChangeTextButton>
        <ChangeTextButton
          disabled={textLength === mockupTexts.length}
          onClick={() => {
            changeTextLength(1);
          }}
        >
          문단 추가
        </ChangeTextButton>
      </div>
      {mockupTexts.slice(0, textLength).map((text, index) => (
        <p key={index} className={styles.text}>
          {text}
        </p>
      ))}
    </Layout>
  );
}

export default Home;
