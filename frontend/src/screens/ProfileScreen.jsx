import {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Form, Button, Row, Col} from 'react-bootstrap';
import FormContainer from '../components/FormContainer'; 
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import { setCredentials } from '../slices/authSlice';
import { useUpdateUserMutation } from '../slices/usersApiSlice';


const ProfileScreen = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // access userinfo from redux state management
  const { userInfo } = useSelector((state) => state.auth );

  const [UpdateProfile, {isLoading}] = useUpdateUserMutation();

  useEffect(() => {
    if (userInfo) { 
      setName(userInfo.name)
      setEmail(userInfo.email) 
    }
  },[userInfo.setName, userInfo.setEmail])

  // handle API call to update details
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
    } else {
      try {
        const res = await UpdateProfile({
          _id: userInfo._id,
          name,
          email,
          setPassword
        }).unwrap();
        dispatch(setCredentials({...res}));
        toast.success('Profile has been updated');
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }
  };

  return (
    <FormContainer>
      <h1>Update Profile</h1>

      <Form onSubmit={handleSubmit}>

        <Form.Group className='my-2' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
          type='text'
          placeholder='Enter Name'
          value={name}
          onChange={ (e) => setName(e.target.value)}
          >
          </Form.Control>
        </Form.Group> 

        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
          type='email'
          placeholder='Enter Email'
          value={email}
          onChange={ (e) => setEmail(e.target.value)}
          >
          </Form.Control>
        </Form.Group> 

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
          type='password'
          placeholder='Enter Password'
          value={password}
          onChange={ (e) => setPassword(e.target.value)}
          >
          </Form.Control>
        </Form.Group> 

        <Form.Group className='my-2' controlId='confirmPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={ (e) => setConfirmPassword(e.target.value)}
          >
          </Form.Control>
        </Form.Group> 

      { isLoading && <Loader />}

        <Button type='submit' variant='primary' className='mt-3'>
          Update
        </Button>

       
      </Form>
    </FormContainer>
  )
}

export default ProfileScreen