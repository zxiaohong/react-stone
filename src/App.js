import React, { Component } from 'react';
import Button from './components/Button/Button.jsx';
import Icon from './components/Icon/Icon.jsx';
import Textarea from './components/Textarea/Textarea.jsx';
import Select from './components/Select/Select.jsx';
import Input from './components/Input/Input.jsx';
import { Checkbox, CheckboxGroup } from './components/CheckboxGroup/CheckboxGroup.jsx';
import { Radio, RadioGroup } from './components/RadioGroup/RadioGroup.jsx';
import Toast from './components/Toast/toast.jsx';
import modal from './components/Modal/modal.jsx';
import Pagination from './components/Pagination/Pagination.jsx';
import iconfonts from './components/Fonts/icofonts.css';
import './App.css';

// 已整理组件
// 1. Button
// 2. Textarea
// 3. Input
// 4. Checkbox（有bug）
// 5. CheckboxGroup（有bug）
// 6. Radio
// 7. RadioGroup
// 8. Toast

// 待整理组件
// 1. Select
// 2. Model

// 待开发组件
// 1. 分页组件

const onText = (val) => {
  console.log(val);
}
const saleVolumes = [
  {
    label: '<1000',
    value: 1
  },
  {
    label: '1001~10000',
    value: 2
  },
  {
    label: '10001~100000',
    value: 3
  },
  {
    label: '100001~1000000',
    value: 4
  },
  {
    label: '>1000000',
    value: 5
  }
];
const selectChange = (val) => {
  console.log(val);
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      checkedVal: '1,2',
      productType: 1,
      currentPage: 1
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        inputValue: 'ajaxInp'
      });
      // Toast.info('图片仅支持上传 JPG、PNG格式', 'info', 500000);
    }, 2000)
  }
  pageChange = (page) => {
    console.log(page);
    this.setState({
      currentPage: page
    })
  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Pagination total={80} pageSize={10} current={this.state.currentPage} onChange={this.pageChange}></Pagination>
          <Icon type='delete' />
          <span className="icon-delete"></span>
          <Button>Button Base</Button>
          <Button size='small' theme='gray'>Button small</Button>
          <Button size='base'>Button base</Button>
          <Button size='large'>Button large</Button>
          <Button disabled={true}>Button Disabled</Button>
          <Button radius='circle' icon="delete" />
          <Button icon="delete">delect</Button>
          <Button htmlType='submit'>Button Submit</Button>
          <Textarea value='zhangning' name="zhang" maxLength={10} onText={onText}/>
          <Input />
          <Input value={ 123 }/>
          <Input type="password" />
          <Input disabled={true} placeholder="不可输入" />
          <Input placeholder="placeholder" />
          <Input size="small" />
          <Input size="base" />
          <Input size="large" />
          <Input maxLength={5} />
          <Input addonBefore="http://" addonAfter=".cn" />
          <Input addonBefore="搜索框" addonAfter={<Icon type='search' />} size="large"/>
          <Textarea />
          <Textarea placeholder="未输入时的提示信息"/>
          <Textarea value="value"/>
          <Textarea size="small" placeholder="size设为small"/>
          <Textarea size="base" placeholder="size设为base"/>
          <Textarea size="large" placeholder="size设为large"/>
          <Textarea width="1000px" placeholder="自定义宽度"/>
          <Textarea height="1000px" placeholder="自定义高度"/>
          <Textarea fontSize="30px" placeholder="自定义字体大小"/>
          <Textarea maxLength={30} placeholder="设置最小字符长度"/>
          <Select
            size="normal"
            optionData={saleVolumes}
            onChange={selectChange}/>
          <CheckboxGroup selectedValue={this.state.checkedVal} name="productType" onChange={this.checkboxGroupChange}>
            <p><Checkbox value='1' id="voiceType1" textname="手动发起" /></p>
            <p><Checkbox value='2' id="voiceType2" textname="近场语音唤醒" /></p>
            <p><Checkbox value='3' id="voiceType3" textname="远场语音唤醒" /></p>
          </CheckboxGroup>
          <Radio
            value={111}
            id="productType111"
            textname="hello硬件设备"
            defaultChecked={true}></Radio>
          <Button icon="delete" onClick={this.openModal}>Open Modal</Button>
          {/* <RadioGroup selectedValue={this.state.productType} onChange={this.productTypeChange}>
            <Radio value={1} id="productType1" textname="硬件设备"></Radio>
            <Radio value={2} id="productType2" textname="软件应用"></Radio>
          </RadioGroup> */}
          {/* <Checkbox value={'5'} id="voiceTypezn" textname="手动发起" onChange={this.oneCheckbox} /> */}
        </p>
      </div>
    );
  }
  valChange = (val) => {
    this.setState({
      inputValue: val.value
    })
  }
  oneCheckbox = (val) => {
    console.log(val);
  }
  checkboxGroupChange = (val) => {
    this.setState({
      checkedVal: val
    })
  }
  productTypeChange = (val) => {
    console.log(val);
    this.setState({
      productType: val.value
    })
  }
  MyModal = () => {
    return (
      <div>
        <div className="modal-header">
            <span>提示</span>
        </div>
        <div className="modal-body">
            <p>如果没有保存，数据将会丢失，确认取消吗？</p>
        </div>
    </div>
    )
  }
  openModal = () => {
    const a = modal.open({
      "size": 'sm',
      "template": this.MyModal(),
      "onCancel": this.closeModal,
      "onOk": this.okModal
    });
    setTimeout(() => {
      a.close()
    }, 2000);
  }
}

export default App;