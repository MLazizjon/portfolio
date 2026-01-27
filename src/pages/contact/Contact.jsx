import React, { useState } from "react";
import { ContactSection, Wrapper } from "./contact.styles";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const info = [
  { icon: <FaPhone />, name: "Telefon", des: "+998 88 344 30 36" },
  {
    icon: <MdOutlineMail />,
    name: "Email",
    des: "maxmudjonovlazizjon@gmail.com",
  },
  { icon: <FaLocationDot />, name: "Address", des: "Samarqand, Uzbekistan" },
  { icon: <FaTelegramPlane />, name: "Telegram", des: "@azimjonov_13" },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // telegramga yuborish
  const sendToTelegram = async () => {
    const BOT_TOKEN = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.REACT_APP_TELEGRAM_CHAT_ID;

    const text = `
📩 Yangi xabar!

👤 Ism: ${form.name}
📧 Email: ${form.email}
📞 Telefon: ${form.phone}
💬 Xabar: ${form.message}
    `;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
      }),
    });
  };

  // submit
  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("❌ Iltimos barcha maydonlarni to‘ldiring");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("❌ Email noto‘g‘ri kiritildi");
      return;
    }

    if (form.phone.length < 10) {
      toast.error("❌ Telefon raqam noto‘g‘ri");
      return;
    }

    try {
      await sendToTelegram();
      toast.success("✅ Xabar Telegramga yuborildi!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      toast.error("❌ Xabar yuborishda xatolik");
    }
  };

  return (
    <ContactSection>
      <Wrapper>
        {/* LEFT */}
        <div className="side">
          <h2>Contact</h2>
          <p style={{ color: "gray", fontSize: "20px" }}>
            If you have any questions or suggestions, please contact us.
            We look forward to hearing from you
          </p>

          {info.map((item, index) => (
            <div className="box_main" key={index}>
              <div
                className="start"
                style={{ fontSize: "25px", color: "#2563eb" }}
              >
                {item.icon}
              </div>
              <div className="end">
                <h4 style={{ fontSize: "20px" }}>{item.name}</h4>
                <p style={{ fontSize: "15px", color: "grey" }}>{item.des}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="side">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={form.email}
            onChange={handleChange}
          />

          <PhoneInput
            country="uz"
            value={form.phone}
            onChange={(phone) => setForm({ ...form, phone })}
            inputStyle={{
              width: "100%",
              borderRadius: "10px",
              background: "var(--card-bg)",
              color: "var(--text-color)",
            }}
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            maxLength={300}
            value={form.message}
            onChange={handleChange}
            style={{ padding: "10px", borderRadius: "10px" }}
          />

          <button onClick={handleSubmit}>Send</button>
        </div>
      </Wrapper>

      <ToastContainer position="top-right" autoClose={3000} />
    </ContactSection>
  );
};

export default Contact;
