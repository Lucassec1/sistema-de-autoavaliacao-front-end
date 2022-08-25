// const [ updateTabela, setUpdateTabela] = useState(true)
// if (updateTabela) {
//   getCadastros()
//   setUpdateTabela(false)
// }



import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
// import Highlighter from 'react-highlight-words';
import api from '../../../../api'

function Tabela() {
  const [usuario, setUsuario] = useState();
  const [cols, setCols] = useState()
  var columns = []
  useEffect(() => {
    const getCadastros = async () => {
      api
        .get('/usuarios')
        .then(response => {
            setUsuario(response.data);
            // var colunas = Object.keys(response.data[0])
            var colunas = ['id', 'nome', 'email','tipo']
            columns = []
            colunas.forEach(coluna => {
              columns.push({
                title: coluna,
                dataIndex: coluna,
                key: coluna,
                width: '30%'
                // ...getColumnSearchProps(coluna),
              })
            })
            setCols(columns)
          })
          .catch(err => {
              if(err.response.status == 401) {
                alert('Faça Login na página para acessar essa área!');
                window.location.href = '/';
              }
              else alert(err.message);
              })
            }
            getCadastros()
          }, []);

          //   const [searchText, setSearchText] = useState('');
  //   const [searchedColumn, setSearchedColumn] = useState('');
  //   const searchInput = useRef('');
  
  //   const handleSearch = (selectedKeys, confirm, dataIndex) => {
  //     confirm();
  //     setSearchText(selectedKeys[0]);
  //     setSearchedColumn(dataIndex);
  //   };
  
  //   const handleReset = (clearFilters) => {
  //     clearFilters();
  //     setSearchText('');
  //   };
  
  //   const getColumnSearchProps = (dataIndex) => ({
  //     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
  //       <div
  //         style={{
  //           padding: 8,
  //         }}
  //       >
  //         <Input
  //           ref={searchInput}
  //           placeholder={`Search ${dataIndex}`}
  //           value={selectedKeys[0]}
  //           onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
  //           onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
  //           style={{
  //             marginBottom: 8,
  //             display: 'block',
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
  //           color: filtered ? '#1890ff' : undefined,
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
  //             backgroundColor: '#ffc069',
  //             padding: 0,
  //           }}
  //           searchWords={[searchText]}
  //           autoEscape
  //           textToHighlight={text ? text.toString() : ''}
  //         />
  //       ) : (
  //         text
  //       ),
  //   });

    return ( 
      <>
      {
        cols &&
        <>
          {console.log(cols)}
          <Table columns={cols} dataSource={usuario} />
        </>
      }
        {/* <ul style={{overflowY: 'scroll'}}>
          {usuario.map((user) =>(
            <li key={user.id} style={{border: '1px solid red'}}>
              <p>{user.nome}</p>
            </li>
          ))}
        </ul> */}
        </>

  )
  };
  
export default Tabela;