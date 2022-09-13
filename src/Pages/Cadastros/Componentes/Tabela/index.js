import React, { useRef, useState } from 'react';
import api from '../../../../api'
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import { BsFillImageFill } from "react-icons/bs";
import Highlighter from 'react-highlight-words';
import EditarCadastro from '../edit';
import Dialog from '../deletemessage';
import { withStyles } from '@mui/material';

function Tabela({ usuario, getCadastros }) {
  const data = []
  const [cols, setCols] = useState()

  
  function StringType(tipo) {
    if (tipo === 3) {
      return "Usuário comum"
    } else if (tipo === 2) {
      return "Administrador"
    } else if (tipo == 1) {
      return "Root";
    }
  }

  usuario?.map(u => {
    data.push({
      key: u.id,
      nome: u.nome,
      email: u.email,
      tipo: StringType(u.tipo),
      cpf: u.cpf,
      foto: u.foto,
    })
  });

 

  cols?.map(c => (
    c.title = c.title.charAt(0).toUpperCase() + c.title.slice(1)
  ));

  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef('');

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Resetar
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filtrar
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  function RenderFoto(url) {
    if (url.charAt(url.length - 4) === '.') {
      return (
        <Avatar src={<Image src={url} style={{width: 42, display: 'flex', alignItems: 'center' }} />} size={42} />
      )
    } else {
      return (
        <Avatar size={42} icon={<BsFillImageFill size={16}/>} />
      )
    }
  }

  const colunas = [
    {
      title: 'ID',
      dataIndex: 'key',
      key: 'id',
      width: '5vw',
      align: 'center',
      ...getColumnSearchProps('id'),
    },
    {
      title: 'Foto',
      dataIndex: 'foto',
      key: 'foto',
      width: '5vw',
      align: 'center',
      render: (_, record) => 
      RenderFoto(record.foto)       
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
      width: '20vw',
      align: 'center',
      ...getColumnSearchProps('nome'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '30vw',
      align: 'center',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
      width: '8vw',
      align: 'center',
      ...getColumnSearchProps('tipo'),
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
      width: '12vw',
      align: 'center',
      ...getColumnSearchProps('cpf'),
    },
    {
      title: 'Ações',
      dataIndex: 'actions',
      key: 'actions',
      width: '8vw',
      align: 'center',
      render: (_, record) => 
      <>
        <EditarCadastro record={record} update={getCadastros}/>
        <Dialog record={record} update={getCadastros}/>
      </>
    },
  ]
  return (
    <>
      <Table columns={colunas}
        bordered
        dataSource={data}
        pagination={{
          pageSize: 10,
        }} 
        />
    </>
  )
};

export default Tabela;