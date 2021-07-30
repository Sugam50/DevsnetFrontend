import './App.css';
import { Button, Input, InputLabel } from '@material-ui/core';
import {getUser} from './actions';
import {useSelector,useDispatch} from 'react-redux';

function App() {

 const data = useSelector((state) => state.data);
 const dispatch = useDispatch();
  return (
    <div className="App">
    <div className="Form">
      <h1>Fill Form</h1><br/>
      <form action="">
        <table>
        <tbody>
          <tr>
            <td>
              <InputLabel >FullName: </InputLabel>
            </td>
            <td>
              <Input type="Fullname" name="Fullname" id="Fullname" label="Fullname" placeholder="Enter Fullname"></Input>
            </td>
          </tr>
          <tr>
            <td>
              <InputLabel >UserName: </InputLabel>
            </td>
            <td>
              <Input type="username" name="username" id="Username" label="username" placeholder="Enter Username"></Input>
            </td>
          </tr>
          <tr>
            <td>
              <InputLabel >Email: </InputLabel>
            </td>
            <td>
              <Input type="Email" name="Email" id="Email" label="Email" placeholder="Enter Email"></Input>
            </td>
          </tr>
          <tr>
            <td>
              <InputLabel >Password: </InputLabel>
            </td>
            <td>
              <Input type="Password" name="Password" id="Password" label="Password" placeholder="Enter Password"></Input>
            </td>
          </tr>
          <tr >
            <td colSpan="2" style={{paddingLeft:"40%"}}>
              <Button variant="contained" color="default" onClick={()=>{

               var FullName=document.getElementById("Fullname").value,
                Username=document.getElementById("Username").value,
                Email=document.getElementById("Email").value,
                Password=document.getElementById("Password").value
                //  var details={FName:`${FullName}`,Uname:Username,Mail:Email,Pass:Password}
                dispatch(getUser({FName:FullName,Uname:Username,Mail:Email,Pass:Password}));
                
                }}>Submit</Button>
            </td>
          </tr>
          </tbody>
        </table>
      </form>
      </div>
      <div className="UserDetails">
        <h1> Identity Card</h1>
        <table>
            <tr>
              <td>
                Full Name:
              </td>
              <td>
              {data.obj.FName}
              </td>
            </tr>
            <tr>
              <td>
              Username:
              </td>
              <td>
              {data.obj.Uname}
              </td>
            </tr>
            <tr>
              <td>
              Email:
              </td>
              <td>
              {data.obj.Mail}
              </td>
            </tr>
            <tr>
              <td>
              Password:
              </td>
              <td>
              {data.obj.Pass}
              </td>
            </tr>
          
        </table>
      </div>

    </div>
  );
}

export default App;
