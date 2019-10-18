import React from 'react';
import HomeWrapper from './HomePage.style';
import MonacoEditor from 'react-monaco-editor';

class Appz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        width="800"
        height="600"
        language="cpp"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

export default (props)=>{
  return(
      <HomeWrapper>
        
  <header className="hg-header">The Holy Grail Layout with CSS Grid</header>
  <main className="hg-main">
    <p>The <a href="https://en.wikipedia.org/wiki/Holy_Grail_(web_design)">Holy Grail Layout</a> using <a href="https://drafts.csswg.org/css-grid/">CSS Grid Layout</a>. <a href="http://bitsofco.de/holy-grail-layout-css-grid">Read the blog post on bitsofco.de</a></p>

    <p>Not working properly? You may need to <a href="http://igalia.github.io/css-grid-layout/enable.html">enable it in your browser</a>.</p>

    <p>You smart, you loyal, you a genius. Let’s see what Chef Dee got that they don’t want us to eat. I’m up to something. The key to more success is to have a lot of pillows. I told you all this before, when you have a swimming pool, do not use chlorine, use salt water, the healing, salt water is the healing. I’m up to something. Lion! We the best. To be successful you’ve got to work hard, to make history, simple, you’ve got to make it. Hammock talk come soon.</p>

    <p>It’s on you how you want to live your life. Everyone has a choice. I pick my choice, squeaky clean. They don’t want us to eat. Let’s see what Chef Dee got that they don’t want us to eat. The weather is amazing, walk with me through the pathway of more success. Take this journey with me, Lion! The key is to enjoy life, because they don’t want you to enjoy life. I promise you, they don’t want you to jetski, they don’t want you to smile.</p>
  </main>
  <aside className="hg-left">Menu</aside>
  <aside className="hg-right">Ads</aside>
  <footer className="hg-footer">Footer</footer>

      </HomeWrapper>
  );
}