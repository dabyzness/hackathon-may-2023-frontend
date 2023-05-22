import { useState, useEffect, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProfileIcons from "../../components/ProfileIcons/ProfileIcons";

import styles from "./Profile.module.css";

import contact from "../../assets/profile/contact.svg";
import has from "../../assets/profile/has.svg";
import needs from "../../assets/profile/needs.svg";
import medical from "../../assets/profile/medical.svg";
import venmo from "../../assets/profile/venmo.svg";
import placeholder from "../../assets/profile/placeholder.svg";

import allergy from "../../assets/medical/peanut.svg";
import pen from "../../assets/medical/Hypoallergenic.svg";
import diabetes from "../../assets/medical/Diabetes.svg";
import gluten from "../../assets/medical/gluten.svg";
import insulin from "../../assets/medical/insulin.svg";
import can from "../../assets/medical/can.svg";
import water from "../../assets/medical/Water-1.svg";
import tent from "../../assets/medical/tent.svg";
import light from "../../assets/medical/Flash Light.svg";
import beanie from "../../assets/medical/beanie.svg";
import pants from "../../assets/medical/Trousers.svg";
import socks from "../../assets/medical/Socks.svg";
import shoes from "../../assets/medical/Pair Of Sneakers.svg";
import dogfood from "../../assets/medical/Dog Bowl.svg";

const Profile = (props) => {
  const { user, profile } = props;
  const elemRef = useRef(null);

  if (!profile || !user) {
    return <div>LOADING</div>;
  }

  const profileFake = {
    phone: "6849752165",
    image: "/images/greg.PNG",
    address: "Raphael House",
    contact: {
      name: "Tom Wambsgans",
      phone: "2019864987",
    },
    venmo: venmo,
    medical: [
      {
        name: "Peanut",
        image: allergy,
      },
      { name: "Penicillin", image: pen },
      { name: "Gluten", image: gluten },
      { name: "Diabetes", image: diabetes },
      { name: "Insulin", image: insulin },
    ],
    has: [
      { name: "Beans", image: can },
      { name: "Soup", image: can },
      { name: "Gatorade", image: water },
      { name: "Hat", image: beanie },
      { name: "Jeans", image: pants },
      { name: "Sneakers", image: shoes },
      { name: "Tent", image: tent },
      { name: "Flashlight", image: light },
    ],
    needs: [
      {
        name: "Socks",
        image: socks,
      },
      { name: "Dog Food", image: dogfood },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          style={{ height: "120px", borderRadius: "1000px" }}
          className={styles.image}
          src={profileFake.image ? profileFake.image : placeholder}
          alt="profile"
        />
        <h2 className={styles.name}>
          {profile.firstName} {profile.lastName}
        </h2>
        <p className={styles.username}>@{profile.username}</p>
        {profile.bio && <p className={styles.bio}>{profile.bio}</p>}
        <button className={styles.editButton}>Edit Profile</button>
      </div>

      <div className={styles.infoContainer}>
        <h3 className={styles.heading3}>PHONE</h3>
        {profileFake.phone ? (
          <p className={styles.about}>
            ({profileFake.phone.slice(0, 3)}) {profileFake.phone.slice(3, 6)}-
            {profileFake.phone.slice(6)}
          </p>
        ) : (
          <button>Add Phone</button>
        )}

        <h3 className={styles.heading3}>EMAIL</h3>
        <p className={styles.about}>{user.email}</p>

        <h3 className={styles.heading3}>WHERE TO FIND ME</h3>
        {profileFake.address ? (
          <p style={{ marginBottom: "0" }} className={styles.about}>
            {profileFake.address}
          </p>
        ) : (
          <button>Add Address</button>
        )}
      </div>

      <Accordion disableGutters={true} sx={{ width: 360 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ m: -1.5 }}
        >
          <img
            style={{ paddingLeft: "16px", width: "26px" }}
            src={contact}
            alt="contact"
          />
          <p className={styles.accordionHeading}>EMERGENCY CONTACT</p>
        </AccordionSummary>
        <AccordionDetails>
          {profileFake.contact ? (
            <div
              style={{ border: "none", padding: "0 0 0 16px" }}
              className={styles.infoContainer}
            >
              <h3 className={styles.heading3}>NAME</h3>
              <p className={styles.about}>{profileFake.contact.name}</p>

              <h3 className={styles.heading3}>PHONE</h3>
              <p className={styles.about}>
                ({profileFake.contact.phone.slice(0, 3)}){" "}
                {profileFake.contact.phone.slice(3, 6)}-
                {profileFake.contact.phone.slice(6)}
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ margin: "0" }}>You have no emergency contact!</p>
              <button>Add</button>
            </div>
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters={true} sx={{ width: 360 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ m: -1.5 }}
        >
          <img
            style={{ paddingLeft: "16px", width: "26px" }}
            src={venmo}
            alt="venmo"
          />
          <p className={styles.accordionHeading}>VENMO QR CODE</p>
        </AccordionSummary>
        <AccordionDetails>
          {profileFake.venmo ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/images/venmoQR.PNG" alt="Poop" />
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ margin: "0" }}>You don't have a Venmo Code</p>
              <button>Add</button>
            </div>
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters={true} sx={{ width: 360 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{ m: -1.5 }}
        >
          <img
            style={{ paddingLeft: "16px", width: "26px" }}
            src={medical}
            alt="medical"
          />
          <p className={styles.accordionHeading}>MEDICAL</p>
        </AccordionSummary>
        <AccordionDetails>
          {profileFake.medical ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3
                style={{ textAlign: "left", marginLeft: "4px" }}
                className={styles.heading3}
              >
                ALLERGIES
              </h3>
              <div
                style={{
                  display: "flex",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                <ProfileIcons
                  name={profileFake.medical[0].name}
                  image={profileFake.medical[0].image}
                />
                <ProfileIcons
                  name={profileFake.medical[1].name}
                  image={profileFake.medical[1].image}
                />
                <ProfileIcons
                  name={profileFake.medical[2].name}
                  image={profileFake.medical[2].image}
                />
              </div>

              <h3
                style={{ textAlign: "left", marginLeft: "4px" }}
                className={styles.heading3}
              >
                AILMENTS
              </h3>
              <div
                style={{
                  display: "flex",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                <ProfileIcons
                  name={profileFake.medical[3].name}
                  image={profileFake.medical[3].image}
                />
              </div>

              <h3
                style={{ textAlign: "left", marginLeft: "4px" }}
                className={styles.heading3}
              >
                MEDICINE
              </h3>
              <div
                style={{
                  display: "flex",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                <ProfileIcons
                  name={profileFake.medical[4].name}
                  image={profileFake.medical[4].image}
                />
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ margin: "0" }}>
                You have no medical information recorded!
              </p>
              <button>Add</button>
            </div>
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters={true} sx={{ width: 360 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          sx={{ m: -1.5 }}
        >
          <img
            style={{ paddingLeft: "16px", width: "26px" }}
            src={has}
            alt="has"
          />
          <p className={styles.accordionHeading}>HAS</p>
        </AccordionSummary>
        <AccordionDetails>
          {profileFake.has ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3
                style={{ textAlign: "left", marginLeft: "4px" }}
                className={styles.heading3}
              >
                FOOD
              </h3>
              <div
                style={{
                  display: "flex",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                <ProfileIcons
                  name={profileFake.has[0].name}
                  image={profileFake.has[0].image}
                />
                <ProfileIcons
                  name={profileFake.has[1].name}
                  image={profileFake.has[1].image}
                />
                <ProfileIcons
                  name={profileFake.has[2].name}
                  image={profileFake.has[2].image}
                />
              </div>

              <h3
                style={{ textAlign: "left", marginLeft: "4px" }}
                className={styles.heading3}
              >
                CLOTHES
              </h3>
              <div
                style={{
                  display: "flex",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                <ProfileIcons
                  name={profileFake.has[3].name}
                  image={profileFake.has[3].image}
                />
                <ProfileIcons
                  name={profileFake.has[4].name}
                  image={profileFake.has[4].image}
                />
                <ProfileIcons
                  name={profileFake.has[5].name}
                  image={profileFake.has[5].image}
                />
              </div>

              <h3
                style={{ textAlign: "left", marginLeft: "4px" }}
                className={styles.heading3}
              >
                ITEMS
              </h3>
              <div
                style={{
                  display: "flex",
                  marginTop: "8px",
                  marginBottom: "12px",
                }}
              >
                <ProfileIcons
                  name={profileFake.has[6].name}
                  image={profileFake.has[6].image}
                />
                <ProfileIcons
                  name={profileFake.has[7].name}
                  image={profileFake.has[7].image}
                />
              </div>
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ margin: "0" }}>You have nothing in your inventory!</p>
              <button>Add</button>
            </div>
          )}
        </AccordionDetails>
      </Accordion>

      <Accordion disableGutters={true} sx={{ width: 360 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
          sx={{ m: -1.5 }}
        >
          <img
            style={{ paddingLeft: "16px", width: "26px" }}
            src={needs}
            alt="needs"
          />
          <p className={styles.accordionHeading}>NEEDS</p>
        </AccordionSummary>
        <AccordionDetails>
          {profileFake.needs ? (
            <div style={{ display: "flex" }}>
              <ProfileIcons
                name={profileFake.needs[0].name}
                image={profileFake.needs[0].image}
              />
              <ProfileIcons
                name={profileFake.needs[1].name}
                image={profileFake.needs[1].image}
              />
            </div>
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ margin: "0" }}>You have no needs!</p>
              <button>Add</button>
            </div>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Profile;
