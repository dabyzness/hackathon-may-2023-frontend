import { useState, useEffect, useRef } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./Profile.module.css";

import contact from "../../assets/profile/contact.svg";
import has from "../../assets/profile/has.svg";
import needs from "../../assets/profile/needs.svg";
import medical from "../../assets/profile/medical.svg";
import venmo from "../../assets/profile/venmo.svg";
import placeholder from "../../assets/profile/placeholder.svg";

const Profile = (props) => {
  const { user, profile } = props;
  const elemRef = useRef(null);

  if (!profile || !user) {
    return <div>LOADING</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={profile.image ? profile.image : placeholder}
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
        {profile.phone ? (
          <p className={styles.about}>
            ({profile.phone.slice(0, 3)}) {profile.phone.slice(3, 6)}-
            {profile.phone.slice(6)}
          </p>
        ) : (
          <button>Add Phone</button>
        )}

        <h3 className={styles.heading3}>EMAIL</h3>
        <p className={styles.about}>{user.email}</p>

        <h3 className={styles.heading3}>WHERE TO FIND ME</h3>
        {profile.location ? (
          <p style={{ marginBottom: "0" }} className={styles.about}>
            SCOOP
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
          {profile.contact ? (
            <p className={styles.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
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
          {profile.venmo ? (
            <p className={styles.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
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
          {profile.medical ? (
            <p className={styles.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
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
          {profile.has ? (
            <p className={styles.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
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
          {profile.needs ? (
            <p className={styles.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
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
