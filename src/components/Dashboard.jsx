import React,{useEffect,useState} from 'react';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import AxiosService from '../utils/ApiServices';
import Header from './Header';

function Dashboard() {
    let navigate = useNavigate()
    let [datas,setDatas] = useState([])
    const getData=async()=>{
        try {
          let res = await AxiosService.get('/')
          if(res.status===200)
          {
            //  toast.success('Blogs fetched Successfully!')
            setDatas(res.data)
          }
        } catch (error) {
            toast.error("Internal Server Error")
        }
      }
      const handleDelete = async(id)=>{
        try {
          let res = await AxiosService.delete(`/${id}`)

         
          if(res.status===200)
          {
            toast.success('Blog Deleted Successfully!')
            getData()
          }
        } catch (error) {
          toast.error("Internal Server Error")
        }
      }

    useEffect(()=>{
        getData()
      },[])

  return <>
  <Header/>
  <div className='container-fluid'>
  <div className='header d-flex justify-content-center align-content-center border-5'>React AXIOS CRUD Operation</div>
  <div className='table '>
  <Table striped bordered hover>
   
    <thead className='tableHead text-capitalize fs-6 '>
       
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>username</th>
        <th>email-id</th>
        <th>address</th>
        <th>geo-lat</th>
        <th>geo-lng</th>
        <th>phone</th>
        <th>website</th>
        <th>companyname</th>
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
      {
        datas.map((e,i)=>{
          // console.log(e);
          return <tr key={i}>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.username}</td>
            <td >           
                {e.email}
            </td>
             <td>{e.street}, {e.suite}, {e.city}, {e.zipcode}.
            </td>
            <td>{e.geolat}</td>
            <td>{e.geolng}</td>
            <td>{e.phone}
            </td>
            <td>{e.website}
            </td>
            <td>{e.companyname}, {e.catchPhrase}, {e.bs}.
            </td> 
            <td>
              <Button variant="info"size="sm" onClick={()=>navigate(`/update/${e.id}`)}>Update</Button>
              &nbsp; &nbsp;
              <Button variant="danger"size="sm"className='' onClick={()=>handleDelete(e.id)}>delete</Button>
            </td>
          </tr>
        })
      }
    </tbody>
  </Table>
  </div>
</div>
</>
}

export default Dashboard