import React,{useState,useEffect} from 'react'
import Header from './Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate,useParams} from 'react-router-dom';
import { toast } from 'react-toastify';
import AxiosService from '../utils/ApiServices';

function Update(){
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
   
    let navigate = useNavigate()
    let params = useParams()
    

      const handleEdit = async()=>{
        alert("hi")

        let {id} = params
        
        try {
          let res = await AxiosService.put(`/data/${id}`,{name,username,emailid,address,street,suite,city,zipcode,geoLat,geoLng,phone,catchPhrase,bs,companyname,website})
          console.log(res)
         
          if(res.status===200)
            navigate('/dashboard')
        } catch (error) {
          console.log(error)
        }
        
      }
    
     
      const getUserData = async() =>{
        let {id} = params;
        // console.log(id);
        try{
          let res = await AxiosService.get(`/data/${id}`)
        //  console.log(res);
          if(res.status===200)
          {
            setName(res.data.name)
            setUsername(res.data.username)
            setEmail(res.data.emailid)
            setAddress(res.data.address)
            setStreet(res.data.street)
            setSuite(res.data.suite)
            setCity(res.data.city)
            setZipcode(res.data.zipcode)
            setGeolat(res.data.geoLat)
            setGeolng(res.data.geoLng)
            setPhone(res.data.phone)
            setWebsite(res.data.website)
            setCompanyname(res.data.companyname)
            setCatchphrase(res.data.catchPhrase)
            setBs(res.data.bs)

          }
        }catch (error) {
          console.log(error)
      }

      }
      useEffect(()=>{
        getUserData();

      },[])
  
  return <>
    <Header/>
    <div className='createForm'>
    <Form className=' border-5 p-2 text-capitalize'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3 me-6" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username"value={username} onChange={(e)=>{setUsername(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Id</Form.Label>
        <Form.Control type="text" placeholder="Enter email" value={emailid} onChange={(e)=>{setEmail(e.target.value)}} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label>Address</Form.Label>
         <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e)=>{setAddress(e.target.value)}} />
       </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>street</Form.Label>
      <Form.Control type="text" placeholder="Enter street"value={street} onChange={(e)=>{setStreet(e.target.value)}}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>suite</Form.Label>
    <Form.Control type="text" placeholder="Enter suite" value={suite} onChange={(e)=>{setSuite(e.target.value)}}/>
  </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter city" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>zipcode</Form.Label>
        <Form.Control type="number" placeholder="Enter zipcode" value={zipcode} onChange={(e)=>{setZipcode(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>geolat</Form.Label>
        <Form.Control type="text" placeholder="Enter lat"value={geoLat} onChange={(e)=>{setGeolat(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>geolng</Form.Label>
        <Form.Control type="text" placeholder="Enter lng" value={geoLng} onChange={(e)=>{setGeolng(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>phone number</Form.Label>
        <Form.Control type="number" placeholder="Enter mobile" value={phone}onChange={(e)=>{setPhone(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>website</Form.Label>
        <Form.Control type="text" placeholder="Enter website"value={website} onChange={(e)=>{setWebsite(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>companyname</Form.Label>
      <Form.Control type="text" placeholder="Enter companyname"value={companyname} onChange={(e)=>{setCompanyname(e.target.value)}} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Catchphrase</Form.Label>
    <Form.Control type="text" placeholder="Enter catchPhrase" value={catchPhrase} onChange={(e)=>{setCatchphrase(e.target.value)}} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>BS</Form.Label>
  <Form.Control type="text" placeholder="Enter bs" value={bs} onChange={(e)=>{setBs(e.target.value)}} />
</Form.Group>
      <Button variant="primary" type="submit" onClick={()=>handleEdit()}>
        Submit
      </Button>
    </Form>
    </div>
  </>
}

export default Update