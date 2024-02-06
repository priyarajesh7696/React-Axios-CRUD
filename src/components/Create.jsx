import React,{useState} from 'react'
import Header from './Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AxiosService from '../utils/ApiServices';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Create() {
    let [name,setName]=useState();
    let [username,setUsername]=useState();
    let [emailid,setEmail]=useState();
    let [address,setAddress]=useState();
    let [street,setStreet]=useState();
    let [suite,setSuite]=useState();
    let [city,setCity]=useState();
    let [zipcode,setZipcode]=useState();
    
    let [geoLat,setGeolat]=useState();
    let [geoLng,setGeolng]=useState();
    let [phone,setPhone]=useState();
    let [website,setWebsite]=useState();
    let [companyname,setCompanyname]=useState();
    let [catchPhrase,setCatchphrase]=useState();
    let [bs,setBs]=useState();
    // const [datas,setDatas]=useState({}) 
   
    let navigate = useNavigate()
   
    const handleCreate = async(e)=>{
        try {
          e.preventDefault();
          let datas= {name,username,emailid,
              street,suite,city,zipcode,
               geoLat,geoLng,
             phone,
             website,
             companyname,catchPhrase,bs}
          let res = await AxiosService.post('/',datas)
           console.log(res);
          if(res.status===201)
          {
            toast.success("Blog Created Successfully")
            navigate('/')
          }
    
        } catch (error) {
          console.log(error);
          
        }
      }
  
  return <>
    <Header/>
    <div className='createForm'>
    <Form className=' border-5 p-2 text-capitalize'>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3 me-6">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username"onChange={(e)=>{setUsername(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email Id</Form.Label>
        <Form.Control type="email" placeholder="Enter email"onChange={(e)=>{setEmail(e.target.value)}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>street</Form.Label>
      <Form.Control type="text" placeholder="Enter street" onChange={(e)=>{setStreet(e.target.value)}}/>
    </Form.Group>
    <Form.Group className="mb-3">
    <Form.Label>suite</Form.Label>
    <Form.Control type="text" placeholder="Enter suite" onChange={(e)=>{setSuite(e.target.value)}}/>
  </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter city" onChange={(e)=>{setCity(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>zipcode</Form.Label>
        <Form.Control type="text" placeholder="Enter zipcode"onChange={(e)=>{setZipcode(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>geoLat</Form.Label>
        <Form.Control type="text" placeholder="Enter lat"onChange={(e)=>{setGeolat(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>geoLng</Form.Label>
        <Form.Control type="text" placeholder="Enter lng"onChange={(e)=>{setGeolng(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>phone number</Form.Label>
        <Form.Control type="number" placeholder="Enter mobile"onChange={(e)=>{setPhone(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>website</Form.Label>
        <Form.Control type="text" placeholder="Enter website"onChange={(e)=>{setWebsite(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>companyname</Form.Label>
      <Form.Control type="text" placeholder="Enter companyname"onChange={(e)=>{setCompanyname(e.target.value)}} />
    </Form.Group>
    <Form.Group className="mb-3">
    <Form.Label>Catchphrase</Form.Label>
    <Form.Control type="text" placeholder="Enter catchPhrase"onChange={(e)=>{setCatchphrase(e.target.value)}} />
  </Form.Group>
  <Form.Group className="mb-3">
  <Form.Label>BS</Form.Label>
  <Form.Control type="text" placeholder="Enter bs"onChange={(e)=>{setBs(e.target.value)}} />
</Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleCreate(e)}>
        Submit
      </Button>
    </Form>
    </div>
  </>
}

export default Create