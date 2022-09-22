import { useState} from 'react'
import './App.css'
import image1 from './img/chevron-down-outline.svg';
import image2 from './img/Vector.svg';
import image3 from './img/Logan.svg';
import image4 from './img/Susie.svg';
import image5 from './img/Markus.svg';
import image6 from './img/Marie.svg';



const App = () => {
  
  const [drop, setDrop] = useState(0);

  const handleDrop = () =>{
    document.querySelector('.mid-nav .colapse ul').style.display= 'block'
  }
  const handleCollapse = () =>{
    document.querySelector('.mid-nav .colapse ul').style.display= 'none'
  }



  return (

    
    <div className='App'>
      <div className="navbar">
        <div className="links">
         <a href="/" id="logo">LOGO</a>
        <a href="">Menu</a>
        <a href="">Menu</a>
        <a href="">Menu</a>
        <a href="">Menu</a>
        </div>
        <div onClick={handleCollapse} onMouseEnter={handleDrop} className="profile">
          
          <div>

          </div>
        </div>
        </div>
        <div className="mid-nav">
          <div className="reports">
          <a href="">Home/ </a>
          <a href="">Reports & Insights</a>
        </div>
       <div className="colapse">
         <ul>
            <li>
              <div className="pic"></div>
              <div className="settings">
                <h2>My Profile</h2>
              <p>Change settings of your account</p>
              </div>
              
              </li>
            <li>
              <div className="logout">
                 <span><img src={image2} alt="" /></span> 
              <span>Logout</span>
              </div>
             
            </li>
          </ul>
       </div>

        </div>
        
        <main>
             <div className="piechart">
              <h2>Why do you create a startup ?</h2>
              <p>Trends</p>
              <div className="chart">
                <div className="circle"></div>
              </div>
              <div className="activities">
                <div className="fa"><div></div> <h2>DUNNO</h2></div>
                <div className="sa"><div></div> <h2>I'm Bored</h2></div>
                <div className="ta"><div></div> <h2>Money</h2></div>
                <div className="foa"><div></div><h2>Fun</h2></div>
              
              </div>
             </div>
           

        <div className="employee-tab">
          <h2>Employees</h2>
          <div className="employees-details">
            <table>
              
  <tr>
    <th>Employee</th>
    <th>Last Login</th>
    <th >Department</th>
    <th >Status</th>
    <th ></th>
  </tr>
<tbody>

  <tr className="logan">
    
    <td className="info"><div className="profile-pic"><img src={image3} alt="" /></div> <div className="name"><h2>Logan Henderson</h2><p>logan@company.com</p></div>  </td>
    <td className="Date"><h2>September 20,2019</h2> <p>2 days ago</p> </td>
    <td className="job">Accounting</td>
    <td className="status">Active</td>
    <td className="icon"><img src={image1} alt="" /></td>
  </tr>
  <tr className="Susie">
  
    <td scope="row" className="info"><div className="profile-pic"><img src={image4} alt="" /></div> <div className="name"><h2>Susie Carison</h2> <p>susie@company.com</p>  </div> </td>
    <td className="Date"><h2>September 22,2019 </h2><p>5 hours ago</p> </td>
    <td className="job">Development</td>
    <td className="status">Inactive</td>
    <td className="icon"><img src={image1} alt="" /></td>
  </tr>
  <tr>
  
    <td scope="row" className="info"><div className="profile-pic"><img src={image5} alt="" /></div> <div className="name"><h2> Markus Benes</h2> <p>markus@company.com</p>  </div></td>
    <td className="Date"> <h2>September 14,2019 </h2>  <p>4 days ago</p> </td>
    <td className="job">Development</td>
    <td className="status">Active</td>
    <td className="icon"><img src={image1} alt="" /></td>
  </tr>
  <tr>
  
    <td scope="row" className="info"><div className="profile-pic"><img src={image6} alt="" /></div> <div className="name"><h2>Marie Stephens </h2>  <p>marie@company.com </p></div>  </td>
    <td className="Date"> <h2>September 20,2019 </h2>  <p> 2 days ago</p> </td>
    <td className="job">Human Resources</td>
    <td className="status">Active</td>
    <td className="icon"><img src={image1} alt="" /></td>
  </tr>
  <tr className="Jacob">
  
    <td scope="row" className="info"><div className="profile-pic"><img src={image3} alt="" /></div> <div className="name"><h2>Jacob Gibson </h2> <p>jacob@company.com</p></div>   </td>
    <td className="Date"> <h2> September 22,2019</h2> <p>3 hours ago</p> </td>
    <td className="job">Sales</td>
    <td className="status">Active</td>
    <td className="icon"><img src={image1} alt="" /></td>
  </tr>
</tbody>
</table>

          </div>
        </div>
        </main>
      
    </div>
  )
}

export default App