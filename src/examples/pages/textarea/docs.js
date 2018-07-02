const desc = `
  # Textarea 文本域

  文本输入域组件，用于输入多行的文字
`;

const base = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Textarea } from 'react-stone';

  class App extends Component {
    render(){
      return (
        <div>
          <Textarea />
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const placeholder = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Textarea } from 'react-stone';

  class App extends Component {
    render(){
      return (
        <div>
          <Textarea placeholder="未输入时的提示信息"/>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const value = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Textarea } from 'react-stone';

  class App extends Component {
    render(){
      return (
        <div>
          <Textarea value="value"/>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const size = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Textarea } from 'react-stone';

  class App extends Component {
    render(){
      return (
        <div>
          <Textarea size="small"/>
          <Textarea size="base"/>
          <Textarea size="large"/>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const width = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Textarea } from 'react-stone';

  class App extends Component {
    render(){
      return (
        <div>
          <Textarea width="1000px"/>
          <Textarea height="1000px"/>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const fontSize = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Textarea } from 'react-stone';

  class App extends Component {
    render(){
      return (
        <div>
          <Textarea fontSize="20px"/>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const length = `
  \`\`\`jsx
  import React, { Component } from 'react';
  import ReactDOM from 'react-dom';
  import { Textarea } from 'react-stone';

  class App extends Component {
    render(){
      return (
        <div>
          <Textarea maxLength={30}/>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  \`\`\`
`;

const api = `
  ## Options

  属性名   |    类型   |     默认值     |     说明
  ----    | ----    | ----    | ----    |
  value  | String  | 无 |  定义文本域的值
  placeholder | String | 无 | 定义默认的提示
  size  | String  | 'base' |  定义输入域的尺寸，可选值 'large', 'base', 'small'。三个尺寸的宽度分别为800px、600px和500px。
  width  | String  | '600px'  |  定义输入域的宽度，用于自定义宽度，默认600px。
  height  | String  | '160px'  |  定义输入域的宽度，用于自定义高度，默认160px。
  fontSize  | String  | '14px'  |  定义字体大小，用于自定义字体大小，默认14px。
  maxLength  | String  | 无  |  定义最大输入字符数。
  name | String | 无 | 定义表单名称。

  ## Events
  方法名称   |    说明    |    参数    |
  ----    | ----      | ----        |
  onChange | 在选择下拉选项变化时触发，接受一个参数 | 参数为文本域的值
`;

export {
  desc,
  base,
  placeholder,
  value,
  size,
  width,
  fontSize,
  length,
  api,
};
