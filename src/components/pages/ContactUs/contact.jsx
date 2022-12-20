import React, {useState} from 'react';
import './contact.css';
import img1 from '../../../img/Contact-us.gif';
import { useSelector, useDispatch, } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { editUserEmail, removeUserQueryFormResponceStatus, UserQueryForm } from '../../../redux/reducer';


const ContactUs = () => {
  const { userQueryFormResponceStatus, userEmail } = useSelector(store => store.userContact)

  const [userQueryForm, setuserQueryForm] = useState({ firstname: null, lastname: null, email: userEmail || null, query: null, mobile:null });
  const [wait, setwait] = useState(false)


  const dispatch = useDispatch()
  let navigation = useNavigate();
  const PHONE_REGEXP = /^[6789]\d{9}$/;

  if (userQueryFormResponceStatus && wait) {
    setTimeout(() => {
      dispatch(removeUserQueryFormResponceStatus())
    }, 2000)
    setwait(false)
  }

  const handleForm = (e) => {
    e.preventDefault();
    if (!PHONE_REGEXP.test(+userQueryForm.mobile))
      return alert("Please enter a valid phone number");
    dispatch(UserQueryForm({ ...userQueryForm }));
    dispatch(editUserEmail(userQueryForm.email));
    setwait(!wait);
    // setuserQueryForm({})

    setuserQueryForm({
      firstname: null,
      lastname: null,
      mobile: null,
      email: null,
      query: null,
    });

    e.target.fname.value = "";
    e.target.lname.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.textarea.value = "";
  };


    return (
      <>
      <section className="container-fluid">
        <div className="row justify-content-center mb-5" id="contact">
          <div className="contact-text col-lg-6 align-items-center align-self-center">
           <img src={img1} alt="img1" style={{ width: "80%" }} />
          </div>
          <div className="col-lg-6 align-items-center align-self-start">
            <div className="contact-form mt-5 border rounded">
            <form onSubmit={handleForm}>
                <div className="row" style={{ lineHeight: "36px" }}>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="inputFirstName" className="mt-3">
                        First Name
                      </label>
                      <input
                        value={userQueryForm.firstname}
                        onChange={(e) => {
                          setuserQueryForm({
                            ...userQueryForm,
                            firstname: e.target.value,
                          });
                        }}
                        type="text"
                        className="form-control c-form-control"
                        id="inputFirstName"
                        required
                        name="fname"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="inputLastName" className="mt-3">
                        Last Name
                      </label>
                      <input
                        value={userQueryForm.lastname}
                        onChange={(e) => {
                          setuserQueryForm({
                            ...userQueryForm,
                            lastname: e.target.value,
                          });
                        }}
                        type="text"
                        className="form-control c-form-control"
                        id="inputLastName"
                        required
                        name="lname"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="inputEmail" className="mt-3">
                      Email Address
                    </label>
                    <input
                      value={userQueryForm.email}
                      onChange={(e) => {
                        setuserQueryForm({
                          ...userQueryForm,
                          email: e.target.value,
                        });
                      }}
                      type="email"
                      className="form-control c-form-control mt-2"
                      id="inputEmail"
                      required
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputEmail" className="mt-3">
                      Phone Number
                    </label>
                    <input
                      value={userQueryForm.mobile}
                      onChange={(e) => {
                        setuserQueryForm({
                          ...userQueryForm,
                          mobile: e.target.value,
                        });
                      }}
                      type="number"
                      className="form-control c-form-control mt-2"
                      id="inputNumber"
                      required
                      name="phone"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputMessage" className="mt-3 text-capitalize">
                    What can we help you with?
                    </label>
                    <textarea
                      value={userQueryForm.query}
                      onChange={(e) => {
                        setuserQueryForm({
                          ...userQueryForm,
                          query: e.target.value,
                        });
                      }}
                      className="form-control c-form-control mt-2"
                      style={{ height: "112px" }}
                      placeholder="Type here..."
                      id="inputMessage"
                      rows="1"
                      required
                      name="textarea"
                    />
                  </div>
                  <div className="col-sm-6 offset-3 form-group mt-5 px-5">
                    <input
                      type="submit"
                      className="btn btn-primary px-5 py-3"
                      value="Submit"
                    />
                  </div>
                  {userQueryFormResponceStatus &&
                    (userQueryFormResponceStatus === "success" ? (
                      <Alert style={{ marginTop: "2%" }} severity="success">
                        {userQueryFormResponceStatus}!
                      </Alert>
                    ) : (
                      <Alert style={{ marginTop: "2%" }} severity="error">
                        {userQueryFormResponceStatus}!
                      </Alert>
                    ))}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
    );
};

export default ContactUs;