import { Space, Table, Tag } from 'antd';
import React, { useState } from 'react';
import api from '../../../../api'


// const [ updateTabela, setUpdateTabela] = useState(true)
// if (updateTabela) {
//   getCadastros()
//   setUpdateTabela(false)
// }

function Tabela() {

// const [cadastros, setCadastros] = useState([]);
// const getCadastros = async () => {
//   api
//     .get('/auth/login')
//     .then(response => {
//       setCadastros(response.data);
//     })
//     .catch(err => {
//       if(err.respose.status == 401) {
//         alert('Faça Login na página para acessar essa área!');
//         window.location.href = '/';
//       }
//       else alert(err.message);
//     })
// }

const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      // key: 'nome',
      // render: (text) => <a>{text}</a>,
    },

    {
      title: 'Address',
      dataIndex: 'address',
      // key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
  
            if (tag === 'loser') {
              color = 'volcano';
            }
  
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: 'Joe Black 2.0',
      age: 19,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
      
    ]
  
  return (
    <>
      {/* <ul style={{border: '2px solid red'}}>
        {cadastros.map(cadastro => (
          <li key={cadastro.id}>
            <p>{cadastro.nome}</p>
          </li>
        ))}
      </ul> */}

      <Table 
      columns={columns} 
      dataSource={data}
      />
    </>
  )
}

export default Tabela;