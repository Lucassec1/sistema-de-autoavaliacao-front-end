import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, Tag } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
// import Highlighter from 'react-highlight-words';
import Highlighter from 'react-highlight-words';
import api from '../../../../api'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Dialog from '../deletemessage';

function Tabela() {
  const data = []

  const [usuario, setUsuario] = useState();
  const [cols, setCols] = useState()
  const actions = () => {
    <div style={{ display: 'flex' }}>
      <button>Teste</button>
      <button>Teste1</button>
    </div>
  }
  var columns = ['actions']
    const getCadastros = async () => {
      api
        .get('/usuarios')
        .then(response => {
          setUsuario(response.data);
          // var colunas = Object.keys(response.data[0])
          // var colunas = ['id', 'nome', 'email', 'tipo', 'cpf', 'actions']
          // columns = []
          // colunas.forEach(coluna => {
          //   columns.push({
          //     title: coluna,
          //     dataIndex: coluna,
          //     key: coluna,
          //     width: '15vw',
          //     ...getColumnSearchProps(coluna),
          //   })
          // })
          // setCols(columns)
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
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
      width: '30%',
      ...getColumnSearchProps('nome'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '30%',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Tipo',
      dataIndex: 'tipo',
      key: 'tipo',
      width: '30%',
      ...getColumnSearchProps('tipo'),
    },
    {
      title: 'CPF',
      dataIndex: 'cpf',
      key: 'cpf',
      width: '30%',
      ...getColumnSearchProps('cpf'),
    },
    {
      title: 'Ações',
      dataIndex: 'actions',
      key: 'actions',
      width: '30%',
      render: (_, record) => <Dialog record={record} update={getCadastros}/>,
    },
  ]
  return (
    <>
      <Table columns={colunas}
        bordered
        dataSource={data}
        pagination={{
          pageSize: 12,
        }} />
    </>

  )
};

export default Tabela;

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-== Ela é muito boa, sério -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


// import { SearchOutlined } from "@ant-design/icons";
// import { Button, Input, Space, Table, Tag } from "antd";
// import React, { useEffect, useRef, useState } from "react";
// // import Highlighter from 'react-highlight-words';
// import Dialog from "../deletemessage";
// import Highlighter from "react-highlight-words";
// import api from "../../../../api";
// import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";

// function Tabela() {
//   const [usuario, setUsuario] = useState();
//   const [cols, setCols] = useState();

//   var columns = [];
  
//   const getCadastros = async () => {
//     api
//       .get("/usuarios")
//       .then((response) => {
//         setUsuario(response.data);
//       })
//       .catch((err) => {
//         if (err.response.status == 401) {
//           window.location.href = "/";
//         } else console.log(err.message);
//       });
//   };

//   if (!usuario) getCadastros();

//   usuario?.map((u) => {
//     if (u.tipo === 3) {
//       u.tipo = "Usuário comum";
//     } else if (u.tipo === 2) {
//       u.tipo = "Administrador";
//     } else if (u.tipo == 1) {
//       u.tipo = "Root";
//     }
//   });

//   cols?.map(
//     (c) => (c.title = c.title.charAt(0).toUpperCase() + c.title.slice(1))
//   );

//   const [searchText, setSearchText] = useState("");
//   const [searchedColumn, setSearchedColumn] = useState("");
//   const searchInput = useRef("");

//   const handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//     setSearchedColumn(dataIndex);
//   };

//   const handleReset = (clearFilters) => {
//     clearFilters();
//     setSearchText("");
//   };

//   const getColumnSearchProps = (dataIndex) => ({
//     filterDropdown: ({
//       setSelectedKeys,
//       selectedKeys,
//       confirm,
//       clearFilters,
//     }) => (
//       <div
//         style={{
//           padding: 8,
//         }}
//       >
//         <Input
//           ref={searchInput}
//           placeholder={`Search ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={(e) =>
//             setSelectedKeys(e.target.value ? [e.target.value] : [])
//           }
//           onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
//           style={{
//             marginBottom: 8,
//             display: "block",
//           }}
//         />
//         <Space>
//           <Button
//             type="primary"
//             onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
//             icon={<SearchOutlined />}
//             size="small"
//             style={{
//               width: 90,
//             }}
//           >
//             Search
//           </Button>
//           <Button
//             onClick={() => clearFilters && handleReset(clearFilters)}
//             size="small"
//             style={{
//               width: 90,
//             }}
//           >
//             Reset
//           </Button>
//           <Button
//             type="link"
//             size="small"
//             onClick={() => {
//               confirm({
//                 closeDropdown: false,
//               });
//               setSearchText(selectedKeys[0]);
//               setSearchedColumn(dataIndex);
//             }}
//           >
//             Filter
//           </Button>
//         </Space>
//       </div>
//     ),
//     filterIcon: (filtered) => (
//       <SearchOutlined
//         style={{
//           color: filtered ? "#1890ff" : undefined,
//         }}
//       />
//     ),
//     onFilter: (value, record) =>
//       record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
//     onFilterDropdownVisibleChange: (visible) => {
//       if (visible) {
//         setTimeout(() => searchInput.current?.select(), 100);
//       }
//     },
//     render: (text) =>
//       searchedColumn === dataIndex ? (
//         <Highlighter
//           highlightStyle={{
//             backgroundColor: "#ffc069",
//             padding: 0,
//           }}
//           searchWords={[searchText]}
//           autoEscape
//           textToHighlight={text ? text.toString() : ""}
//         />
//       ) : (
//         text
//       ),
//   });

//   var colunas = ["id", "nome", "email", "tipo", "cpf"];
//   columns = [];
//   colunas.forEach((coluna) => {
//     columns.push({
//       title: coluna,
//       dataIndex: coluna,
//       key: coluna,
//       width: "15vw",
//       ...getColumnSearchProps(coluna),
//     });
//   });
//   columns.push({
//     title: "Action",
//     dataIndex: "",
//     key: "x",
//     render: (_, record) => (
//       <>
//         <Dialog record={record} />
//         {/* <Button icon={<MdDeleteOutline/>} onClick={() => deleteUser(record)} style={{border: 'none'}}/>
//         <Button icon={<MdOutlineEdit/>}/> */}
//       </>
//     ),
//   });
//   setCols(columns);

//   return (
//     <>
//       {cols && (
//         <>
//           {console.log(cols)}
//           <Table
//             columns={cols}
//             dataSource={usuario}
//             pagination={{
//               pageSize: 12,
//             }}
//           />
//         </>
//       )}
//     </>
//   );
// }

// export default Tabela;
