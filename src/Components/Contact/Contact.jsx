import React, {useRef} from "react";
import "./Contact.css";
import { FaHeadphonesAlt } from "react-icons/fa";
import laptoplogo from "../Assets/laptop.png";
import emailjs from "emailjs-com";

const formdata = {
  to_name: "Barath",
  from_name: "",
  from_email: "",
  message: "",
  subject: ""
};
export const Contact = () => {
  const [inputdata, setinputdata] = React.useState(formdata);
  const form = useRef();

  const handlechange = (e) => {
    const { name, value } = e.target;

    setinputdata({
      ...inputdata,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pu689uy",
        "template_9vbrrlw",
        form.current,
        "user_37Y24qg2leMBPKt21LIsN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setinputdata(formdata);
    e.target.reset();
  };

  return (
    <div className="contact-form">
      <h1>
        <FaHeadphonesAlt className="contactlogo" /> &nbsp;Get in{" "}
        <strong className="purple">Touch</strong>
      </h1>
      <div className="FormDiv">
        <div className="FormDiv-imagediv">
          <img src={laptoplogo} alt="Laptop Logo" />
        </div>
        <form  ref={form} className="FormDiv-inputdiv" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="from_name"
              id="name"
              placeholder="First last"
              value={inputdata.from_name}
              onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <br />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Reason"
              value={inputdata.subject}
              onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="from_email"
              id="email"
              placeholder="Please enter Your Email"
              value={inputdata.from_email}
              onChange={handlechange}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              name="message"
              id="message"
              placeholder="Please Enter Message Here"
              value={inputdata.message}
              onChange={handlechange}
            />
          </div>
          <div>
            <input
              className="inputdivButton"
              type="submit"
              style={{
                color: "black",
                backgroundColor: "rgb(250, 250, 45)",
                border: "rgb(250, 250, 45)"
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
