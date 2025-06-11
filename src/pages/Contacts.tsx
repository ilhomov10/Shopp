import React, { useState } from "react";
import instagram from "../assets/images/instagram.png"
import telegram from "../assets/images/telegram.svg"
import telefon from "../assets/images/telefon.webp"

const BOT_TOKEN = "7919040141:AAGhDpmxSwc7eaMc14OBTN7k1dzbd-f2ZHs";
const CHAT_ID = "6835611509";

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Inputlarni to'liq to'ldirilganini tekshirish
    if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.message.trim() === ""
    ) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return; // yuborishni to'xtatamiz
    }

    const text = `
New message from contact form:
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Message: ${formData.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
          }),
        }
      );

      const data = await response.json();
      if (data.ok) {
        alert("Xabaringiz yuborildi.");
        setFormData({ firstName: "", lastName: "", message: "" });
      } else {
        alert("Xabaringiz yuborilmadi.");
      }
    } catch (error) {
      alert("Xabar yuborishda internet bilan bog‘liq muammo yuz berdi.");
      console.error(error);
    }
  };

  return (
    <div className="series">
      <h2>Contacts</h2>
      <div className="card__1">
        {/* Chap tomonda ijtimoiy tarmoqlar */}
        <div className="ins">
          <ul>
            <li>
              <img src={instagram} alt="Instagram" className="icon" />
              <a href="https://instagram.com/ilhx.n7" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              <img src={telegram} alt="Telegram" className="icon" />
              <a href="https://t.me/ilhomov_nosirxon" target="_blank" rel="noopener noreferrer">Telegram</a>
            </li>
            <li>
              <img src={telefon} alt="Telefon" className="icon" />
              <a href="tel:+998943240164" target="_blank" rel="noopener noreferrer">Telefon</a>
            </li>
          </ul>
        </div>

        {/* O'ng tomonda forma */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label">First name</label>
            <input
              type="text"
              placeholder="Ismingizni kiriting"
              className="input"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="label">Surname</label>
            <input
              type="text"
              placeholder="Familiyangizni kiriting"
              className="input"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="label">Your opinion</label>
            <textarea
              placeholder="Xabaringizni shu yerga yozing..."
              className="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button className="submit-btn" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
