
import { Link } from 'react-router-dom';
import { FormGroup, Input, Label, Button } from 'reactstrap';



const onSubmit = () => {

}

const ContactUs = () => {
    return (
        <div className="container-fluid ">

            <div className="row justify-content-center">
                <div className="col-md-4 bg-primary p-7 text-white border-radius-pill" >
                    <h2 className="mb-7 text-white">Get In Touch</h2>
                    <h4 className="text-white mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eius reprehenderit soluta magnam similique vero! Inventore veniam nobis eaque quas non officiis. Reprehenderit, ipsam ab.</h4>
                    <p >
                        Zora Corporation
                        <br /> 16826 Georgia Avenue.
                        <br /> Olney, MD 20832
                    </p>
                    <p>info@zoracorp.com</p>
                    <p>P:(301) 774-7999 </p>



                </div>
                <div className="col-md-4">
                    <div className="p-7">
                        <h2 className="text-center mb-7 text-primary">Wants us to contact you</h2>
                        <FormGroup className="mb-5">
                            <Label id="f_name" className="text-dark">First Name</Label>
                            <Input className="form-control-pill border-primary" type="text" id="f_name" placeholder="Enter First Name" />
                        </FormGroup>
                        <FormGroup className="mb-5">
                            <Label id="l_name" >Last Name</Label>
                            <Input className="form-control-pill border-primary" type="text" id="l_name" placeholder="Enter Last Name" />
                        </FormGroup>

                        <FormGroup className="mb-5">
                            <Label id="email" >Email </Label>
                            <Input className="form-control-pill border-primary" type="text" id="f_name" placeholder="Enter Email" />
                        </FormGroup>

                        <FormGroup className="mb-5">
                            <Label id="message" className="text-dark">Message</Label>
                            <Input className="form-control-pill border-primary" type="textarea" rows="7" id="message" placeholder="Enter Message" />
                        </FormGroup>
                        {/* <FormGroup className="mb-5">
                        <Label id="f_name" className="text-dark">Full Name</Label>
                        <Input className="form-control-pill border-primary" type="text" id="f_name" placeholder="Enter Email" />
                    </FormGroup> */}

                        <Button color="primary" className="btn-block btn-pill" >Submit</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactUs;

