import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, Tooltip } from 'antd';
import api from '../../api';

const formatNumber = (value) => new Intl.NumberFormat().format(value);

const NumericInput = (props) => {
  const { value, onChange } = props;

  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;

    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  }; // '.' at the end or only '-' in the input box.

  const handleBlur = () => {
    let valueTemp = value;

    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }

    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };

  const title = value ? (
    <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
  ) : (
    'Digite seu CPF'
  );

  const [cpf, setCpf] = useState();

  function PostCpf (e) {
    e.preventDefault()
    api.post('/auth/login', {
       cpf: cpf
    }) 
    .then (res => {
      // console.log(res)
      console.log(e)
    })
    .catch(e => {
      console.log(e)
      console.log(cpf)
    })
  }

  return (
    <>
    <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="CPF">
      <Input
        {...props}
        onChange={(e) => {handleChange(e); setCpf(e.target.value)}}
        onBlur={handleBlur}
        placeholder="CPF"
        maxLength={11}
        value={cpf}
        // type='number'
      />
    </Tooltip>
    <button onClick={PostCpf} type='submit'>Agua</button>

</>
  );
};



const Inputt = () => {
  const [value, setValue] = useState('');
  return (
    <NumericInput
    style={{
      width: 350,
      height: 50,
      borderRadius: 5,
    }}
    value={value}
    onChange={setValue}

    />
    );

};


export default Inputt;