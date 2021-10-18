import { useEffect } from "react";
import styled from "styled-components";
import Layout from "../styles/Layout";
import PageHeading from "../styles/PageHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";
const ContactPageStyle = styled("section")`
  position: relative;
  font-family: "Poppins";
  .row {
    display: flex;
    justify-content: space-between;
    gap: 20rem;
    .left {
      flex: 1 1 50%;
      .formItem {
        width: 100%;
        height: 5rem;
        margin-bottom: 50px;
        position: relative;
        border: 1px solid var(--bgGreyDark);
        .formLabel {
          transform: translate(3rem, -20px);
          position: absolute;
          font-size: 1.6rem;
          color: var(--colorGrey);
          background: var(--bgPrimary);
          padding: 0 10px;
          text-transform: capitalize;
          sup {
            color: var(--colorBrand);
            font-size: 2rem;
            content: "required";
          }
        }
        .formInput {
          display: block;
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background: transparent;
          text-indent: 1rem;
          color: var(--colorGreyLight);
          line-height: 3rem;
          font-size: 1.6rem;
        }
        &:last-of-type {
          height: 10rem;
          .formInput {
            resize: none;
            padding-top: 1rem;
          }
        }
      }
    }
    .right {
      flex: 1 1 50%;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      .card {
        background-color: var(--bgGreyDark);
        padding: 3rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 3rem;
        color: var(--colorGreyLight);
        transition: all 0.3s linear;
        border: 1px solid var(--bgGreyDark);
        .icon {
          border: 1px solid var(--bgGrey);
          padding: 2rem;
          transition: all 0.3s linear;
          .svg {
            font-size: 3rem;
          }
        }
        .title {
          text-transform: capitalize;
          letter-spacing: 1px;
        }
        &:hover {
          background-color: var(--bgPrimary);
          .icon {
            transform: translateX(-5px);
            color: var(--colorBrand);
          }
        }
      }
    }
  }
`;
const ContactPage = () => {
  const PAGE_HEADING = "Contact Us";

  useEffect(() => {
    document.title = `${PAGE_HEADING} - ${process.env.REACT_APP_PROJECT_NAME}`;
  }, []);
  return (
    <Layout>
      <PageHeading>{PAGE_HEADING}</PageHeading>
      <ContactPageStyle>
        <div className="row">
          <div className="left">
            <form className="form" method="post">
              <div className="formItem">
                <label htmlFor="name" className="formLabel">
                  enter your name <sup>*</sup>
                </label>
                <input
                  type="text"
                  className="formInput"
                  id="name"
                  name="name"
                />
              </div>
              {/* .formItem */}
              <div className="formItem">
                <label htmlFor="email" className="formLabel">
                  enter your email <sup>*</sup>
                </label>
                <input
                  type="email"
                  className="formInput"
                  id="email"
                  name="email"
                />
              </div>
              {/* .formItem */}
              <div className="formItem">
                <label htmlFor="mobile" className="formLabel">
                  enter your mobile number <sup>*</sup>
                </label>
                <input
                  type="number"
                  className="formInput"
                  id="mobile"
                  name="mobile"
                />
              </div>
              {/* .formItem */}
              <div className="formItem">
                <label htmlFor="subject" className="formLabel">
                  enter your subject <sup>*</sup>
                </label>
                <input
                  type="text"
                  className="formInput"
                  id="subject"
                  name="subject"
                />
              </div>
              {/* .formItem */}
              <div className="formItem">
                <label htmlFor="message" className="formLabel">
                  enter your message <sup>*</sup>
                </label>
                <textarea
                  className="formInput"
                  id="message"
                  name="message"
                ></textarea>
              </div>
              {/* .formItem */}
              <Button
                value="send"
                textTransform="uppercase"
                bg="bgBrand"
                type="button"
              />
            </form>
            {/* .form */}
          </div>
          {/* .left */}
          <div className="right">
            <div className="card">
              <aside className="icon">
                <FontAwesomeIcon className="svg" icon={"phone-alt"} />
              </aside>
              <aside className="info">
                <h3 className="title">phone</h3>
                <p className="text">01720092787</p>
              </aside>
            </div>
            {/* .card */}
            <div className="card">
              <aside className="icon">
                <FontAwesomeIcon className="svg" icon={"envelope"} />
              </aside>
              <aside className="info">
                <h3 className="title">email</h3>
                <p className="text">email@domain.com</p>
                <p className="text">email@domain.com</p>
              </aside>
            </div>
            {/* .card */}
            <div className="card">
              <aside className="icon">
                <FontAwesomeIcon className="svg" icon={"map-marker-alt"} />
              </aside>
              <aside className="info">
                <h3 className="title">address</h3>
                <p className="text">
                  Dhanmondi New 15, Dhaka - 1200, Bangladesh
                </p>
              </aside>
            </div>
            {/* .card */}
          </div>
          {/* .right */}
        </div>
        {/* .row */}
      </ContactPageStyle>
    </Layout>
  );
};

export default ContactPage;
