import { useRef } from "react";
import styles from "./Contact.module.scss";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";



export const Contact = () => {
  const form = useRef();

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Contact Us</h2>
        <div className={styles.section}>
          <form ref={form}>
            <div className={styles.card}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="abc@xyz.com"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn --btn-primary">Send Message</button>
            </div>
          </form>

          <div className={styles.details}>
            <div classClass={styles.card2}>
              <h3>Our Contact Information</h3>
              <p>Fill the form or contact us via </p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>+234 705 141 6545</p>
                </span>
                <span>
                  <FaEnvelope />
                <p>Support@eCommerce.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Bangalore, Karnataka</p>
                </span>
                <span>
                  <FaTwitter />
                  <p>@Twitter</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


