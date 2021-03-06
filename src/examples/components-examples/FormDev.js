import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../components/Button/Button.jsx';
import { Radio } from '../../components/RadioGroup/RadioGroup.jsx';
import Form from '../../components/Form/index.js';

const {
  CreateForm,
  FieldInput,
  FieldCheckbox,
  FieldSelect,
  FieldRadioGroup,
  FieldTextarea,
} = Form;

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
          />
        <FieldInput
          required
          name="email"
          validations={{ isEmail: true }}
          validationErrors={{ isEmail: '邮箱格式不正确' }}
          label="邮箱"/>
        <FieldInput
          name="地址"
          label="dizhi"/>
        <FieldSelect
          name="select"
          label="slect"
          placeholder="请选择"
          optionData={saleVolumes}
          onChange={selectChange}/>
        <FieldTextarea
          required
          name="自我描述"
          label="自我描述"
          validations={{ required: true }}
          validationErrors={{ required: '必填项' }}/>
        <FieldRadioGroup
          name="单选"
          label="单选"
          value={this.state.productTypexs}
          onChange={this.productTypeChangexs}
          >
          <Radio value={1} id="productType1xx" textname="硬件设备"></Radio>
          <Radio value={2} id="productType2xx" textname="软件应用"></Radio>
        </FieldRadioGroup>
        <FieldCheckbox
          required
          name="多选"
          label="多选"
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

class ButtonDev extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <WrappedForm/>
    );
  }
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

export default ButtonDev;
