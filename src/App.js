import React, { Component } from 'react';
import Button from './components/Button/Button.jsx';
import Icon from './components/Icon/Icon.jsx';
import Textarea from './components/Textarea/Textarea.jsx';
import Select from './components/Select/Select.jsx';
import Input from './components/Input/Input.jsx';
// import { Checkbox, CheckboxGroup } from './components/CheckboxGroup/CheckboxGroup.jsx';
import CheckboxGroup from './components/CheckboxGroup/CheckboxGroup.jsx';
import { Radio, RadioGroup } from './components/RadioGroup/RadioGroup.jsx';
import Toast from './components/Toast/toast.jsx';
import Modal from './components/Modal/modal.jsx';
import Pagination from './components/Pagination/Pagination.jsx';
import iconfonts from './components/Fonts/icofonts.css';
import DragSort from './components/DragSort/DragSort.jsx';
import Form from './components/Form/index.js';
import './App.css';

const {
  CreateForm,
  InputField,
  FieldInput,
  FieldCheckbox,
  FieldSelect,
  FieldRadioGroup,
  FieldTextarea,
} = Form;


const onChange = (val) => {
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
class FieldForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options1: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
      ],
      checkedBoxValue: [
        'Pear'
      ],
      formDate: {},
      productTypexs: null
    }
  }
  formSubmit = (e) => {
    e.preventDefault();
    this.props.rsForm.validateForm(true, () => {
      if (this.props.rsForm.isValid()) {
        console.log('Yes！表单通过');
        console.log('可以提交的表单：',this.props.rsForm.getFormValues())
      } else {
        console.log('No！表单校验不通过')
        console.log('错误的表单：', this.props.rsForm.getFormValues())
      }
    })
  }
  // FormChange = (params) => {
  //   let state = {
  //     ...this.state,
  //     formDate: {
  //       ...this.state.formDate,
  //       ...params
  //     }
  //   }
  //   this.setState(state, () => {
  //     console.log(this.state)
  //   })
  //   console.log(this.Form)
  // }
  inputChange = (params) => {
    // this.props.rsForm.handleChange(params);
    console.log(this.props.rsForm.getFormValues())
    console.log(this.props.rsForm.getFieldError('name'))
  }
  productTypeChangexs = (val) => {
    console.log(val);
    this.setState({
      productType: val.value
    })
  }
  render() {
    return (
      <Form onSubmit={this.formSubmit}>
        <FieldInput
          required
          name="name"
          label="姓名"
          validations={{ required: true }}
          validationErrors={{ required: '必填项' }}
          onChange={this.inputChange}/>
        <FieldInput
          required
          name="email"
          validations={{ isEmail: true }}
          validationErrors={{ isEmail: '邮箱格式不正确' }}
          label="邮箱"/>
        <FieldInput
          name="hhhh"
          label="dizhi"/>
        <FieldSelect
          name="xuanzeqi"
          label="slect"
          placeholder="请选择"
          optionData={saleVolumes}
          onChange={selectChange}/>
        <FieldTextarea
          required
          name="textarem"
          label="textarem"
          validations={{ required: true }}
          validationErrors={{ required: '必填项' }}/>
        <FieldRadioGroup
          required
          name="danxuan"
          label="danxuan"
          value={this.state.productTypexs}
          onChange={this.productTypeChangexs}
          validations={{ required: true }}
          validationErrors={{ required: '必填项' }}>
          <Radio value={1} id="productType1xx" textname="硬件设备"></Radio>
          <Radio value={2} id="productType2xx" textname="软件应用"></Radio>
        </FieldRadioGroup>
        <FieldCheckbox
          required
          name="shuiguo"
          label="duoxuan"
          options={this.state.options1}
          value={this.state.checkedBoxValue}
          validations={{
            isMore(values, value) {
              return value.length >= 2;
            }
          }}
          validationErrors={{ isMore: '不能低于两项' }}/>
        <Button htmlType="submit">提交</Button>
      </Form>
    );
  }
}

const WrappedForm = CreateForm()(FieldForm);
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      checkedVal: ['first', 'second'],
      productType: 1,
      currentPage: 1,
      options: [
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange' },
      ],
      checkedBox: [
        'Pear'
      ],
      selectArr: [],
      isShowModal: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        inputValue: 'ajaxInp',
        selectArr: saleVolumes
      });
      // Toast.errorTopico('带错误图标--从头渐出',2000000);
      // Toast.info('图片仅支持上传 JPG、PNG格式', 'info', 500000);
    }, 2000)
  }
  pageChange = (page) => {
    console.log(page);
    this.setState({
      currentPage: page
    })
  }
  FieldInputChange = (params) => {
    console.log(params);
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
          <WrappedForm ref={ref => { this.wrapForm = ref }}/>
          <Button icon="delete" onClick={this.openModal}>Open Modal</Button>
          <Pagination total={218} pageSize={10} current={this.state.currentPage} onChange={this.pageChange} />
          <br/>
          <div>
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
          </div>
          <div className="code-box-demo">
            <Textarea value='zhangning' name="zhang" maxLength={10} onChange={onChange}/>
          </div>
          <div className="code-box-demo">
            <Input radius="radius" placeholder="圆角"/>
          </div>
          <div className="code-box-demo">
            <Input value={ 123 }/>
          </div>
          <div className="code-box-demo">
            <Input type="password" placeholder="密码"/>
          </div>
          <div className="code-box-demo">
            <Input disabled={true} placeholder="不可输入" />
          </div>
          <div className="code-box-demo">
            <Input size="small" placeholder="小"/>
          </div>
          <div className="code-box-demo">
            <Input size="base" placeholder="中"/>
          </div>
          <div className="code-box-demo">
            <Input size="large" placeholder="大"/>
          </div>
          <div className="code-box-demo">
            <Input maxLength={5}  placeholder="最多输入五个"/>
          </div>
          <div className="code-box-demo">
            <Input addonBefore="http://" addonAfter=".cn" />
          </div>
          <div className="code-box-demo">
            <Input addonBefore="搜索框gg" addonAfter={<Icon type='search' />} size="large"/>
          </div>
          <div className="code-box-demo">
            <Input addonBefore="搜索框gg" addonAfter={<Icon type='search' />} size="large"/>
          </div>
          <div className="code-box-demo">
            <Select
              size="small"
              optionData={saleVolumes}
              onChange={selectChange}/>
            <Select
              optionData={this.state.selectArr}
              defaultValue={2}
              onChange={selectChange}/>
          </div>
          <Modal
            size='sm'
            visible={this.state.isShowModal}>
            Hello Modal
          </Modal>
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

          <Radio
            value={111}
            id="productType111"
            textname="hello硬件设备"
            defaultChecked={true}></Radio>
          <RadioGroup selectedvalue={this.state.productType} onChange={this.productTypeChange}>
            <Radio value={1} id="productType1" textname="硬件设备"></Radio>
            <Radio value={2} id="productType2" textname="软件应用"></Radio>
            <Radio value={3} id="productType3" textname="软件应用"></Radio>
          </RadioGroup>
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
  checkboxGroupChange = (val, second) => {
    let newCheckboxGroup = [];
    console.log(val);
    console.log(second);
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
        h
    </div>
    )
  }
  openModal = () => {
    console.log(123)
    this.setState({
      isShowModal: true
    })
    // this.myModal = Modal.open({
    //   "size": 'sm',
    //   "template": this.getContentComponent(),
    //   "onCancel": this.closeModal,
    //   "onOk": this.okModal
    // });
    // 该组件提供代码关闭弹框的手段，调用close方法即可！
    // setTimeout(() => {
    //   myModal.close()
    // }, 2000);
  }
  okModal = () => {
    console.log(456);
    this.myModal.close();
  }
  getContentComponent = () => {
    return (
      <p>如果没有保存，数据将会丢失，确认取消吗123？</p>
    )
  }
}

export default App;
