// import React, {useContext} from 'react'
// import AuthContext from '../context/AuthContext'
// import { Link } from 'react-router-dom';


// const LoginPage = () => {
  
//     let {loginUser} = useContext(AuthContext)
//     return (
//         <div className='d-flex  flex-wrap'style={{backgroundColor:" #F0EEE6" ,height:"100vh",overflow:"auto"}}>
//      <div class="col-lg-6 col-md-12 col-sm-12">
//          <div className='  d-flex justify-content-center' style={{ height:"700px",top:"30px",left:"70px",width:"600px", borderRadius:"20px",position:"relative",backgroundColor:"white"}}>

//          <form className=' my-5  d-flex flex-column 'style={{width:"381px"}} onSubmit={loginUser}>
//            <div  className='d-grid 'style={{marginBottom:"7px" }}>
//         <h3 style={{marginBottom:"3px" }}>Welcome back!!</h3>
//          <p style={{margin:"0px" }}className='text-secondary' >Enter your name to proceed.</p>
//          </div>
//          <div className='d-grid my-3' style={{minHeight: "76px"}}>

//          <label htmlFor="username">Name</label>
//           <input type="text" name="username" id="username" placeholder="Enter Username" />
//            </div>
//          <div className='d-grid my-3' style={{minHeight: "76px"}}>

//          <label htmlFor="password">Password</label>
//          <input type="password" name="password" id="password" placeholder="Enter Password" />
//              </div>
        
//         <input type="submit" className='btn bg-success my-3' style={{width:"381px"}}/>
       
//         <div className='d-flex my-5 justify-content-center'> <p className=' my-2 text-secondary mx-5 ' style={{fontSize:".9rem"}}>Aleady have an account?<Link to="/register" >SignUp</Link> </p>
//         </div>
//          </form >
//      </div>
//      </div>
//      <div class="col-lg-6 col-md-12 col-sm-12 d-none d-md-block">
//          <img style={{width:"570px",height:"630px",left:"30px" ,top:"70px",position:"relative",borderRadius:"10px"}}
//          src='https://images.pexels.com/photos/15513767/pexels-photo-15513767/free-photo-of-tree-branches-on-the-background-of-the-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'>
//          </img>
//      </div>
//      </div>

//  )
// }


// export default LoginPage;


import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom';

const LoginPage = () => {

    let { loginUser } = useContext(AuthContext)
    return (
        <div className='container-fluid' style={{ backgroundColor: " #F0EEE6", minHeight: "100vh" }}>
            <div className='row'>
                <div className='col-lg-6 col-md-12 col-sm-12 my-3 d-flex justify-content-center' style={{ position: "relative", top: '40px', maxHeight: "650px" }}>
                    <div className='card border-0 shadow-lg rounded-lg d-flex justify-content-center w-75 ' style={{ backgroundColor: "white" }}>
                        <div className='card-body  mx-5'>
                            <form onSubmit={loginUser} className='d-flex flex-column align-items-center'>
                                <div className='text-center mb-4'>
                                    <h3>Welcome back!!</h3>
                                    <p className='text-secondary'>Enter your name to proceed.</p>
                                </div>
                                <div className='form-group mb-4 w-75'>
                                    <label htmlFor="username">Name</label>
                                    <input type="text" name="username" id="username" placeholder="Enter Username" className='form-control' />
                                </div>
                                <div className='form-group mb-4 w-75'>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Enter Password" className='form-control' />
                                </div>
                                <div className='form-group w-75'>
                                    <input type="submit" className='btn w-100' value='Login' style={{ backgroundColor: "#9493BF" }} />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <p className='text-secondary'>Don't have an account? <Link to="/register">Sign up</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 my-3 d-none d-md-block'>
                    <img src="https://images.pexels.com/photos/587958/pexels-photo-587958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='login' className='img-fluid rounded' style={{ width: "570px", height: "600px", left: "30px", top: "40px", position: "relative", borderRadius: "10px" }} />
                </div>
            </div>
        </div>
    )
}

export default LoginPage