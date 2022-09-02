import React, { useRef, useState } from 'react';
import api from '../../../../api'

import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';

import Highlighter from 'react-highlight-words';
import EditarCadastro from '../edit';
import Dialog from '../deletemessage';

function Tabela() {
  const data = []

  const [usuario, setUsuario] = useState();
  const [cols, setCols] = useState()
  const getCadastros = async () => {
    api
      .get('/usuarios')
      .then(response => {
        setUsuario(response.data);
      })
      .catch(err => {
        if (err.response.status == 401) {
          window.location.href = '/';
        }
        else console.log(err.message);
      })
  }
  if (!usuario) getCadastros()

  // console.log(usuario)
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
      cpf: u.cpf
    })
  });

  // console.log(data);

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
            Reset
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
            Filter
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

  const colunas = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: '5vw',
      ...getColumnSearchProps('id'),
    },
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
      width: '20vw',
      ...getColumnSearchProps('nome'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '30vw',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
      width: '5vw',
      ...getColumnSearchProps('tipo'),
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
      width: '20vw',
      ...getColumnSearchProps('cpf'),
    },
    {
      title: 'Ações',
      dataIndex: 'actions',
      key: 'actions',
      width: '5vw',
      render: (_, record) => <>
        <EditarCadastro record={record} update={getCadastros}/>,
        <Dialog record={record} update={getCadastros}/>,
      </>
    },
  ]
  return (
    <>
      <Table columns={colunas}
        bordered
        dataSource={data}
        pagination={{
          pageSize: 12,
        }} 
      />
    </>
  )
};

export default Tabela;