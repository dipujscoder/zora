
import { Link } from 'react-router-dom';
import { FormGroup, Input, Label, Button } from 'reactstrap';

import { ReactComponent as Bannarsvg } from '../../assets/img/bannarsvg.svg';
import userIcon from '../../assets/img/user.png';
import keyIcon from '../../assets/img/key.png'

const onSubmit = () => {

}

const Login = () => {
    return (
        <div className="container-fluid margin-minus">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="logo-welcome">
                        <Bannarsvg className="bg-svg" />
                        <div className="welcome-content">
                            <h2>Welcom Back To Zoracorp.</h2>
                            <p>Enter Your ID and <br /> PassWord to Continue </p>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="login">
                        <h2 className="my-4 text-center ">Login</h2>
                        <h3 className="text-center mb-7">To Access Zoracrop.</h3>

                        <div className="input-wrapper">
                            <img src={userIcon} alt="user" />
                            <Input className="form-control-pill border-primary" type="email" id="email" name="email" placeholder="Enter Email" />
                        </div>
                        <div className="input-wrapper" >
                            <img src={keyIcon} alt="Key" />
                            <Input className="form-control-pill border-primary" type="password" id="password" name="password" placeholder="Enter Password" />
                        </div>

                        <Button color="primary" className="btn-block btn-pill" >Log in</Button>


                        {/* <p className="mt-4">Do not have account? <Link to="/register" >Sign Up</Link></p> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;

