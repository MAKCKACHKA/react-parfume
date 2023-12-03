import React, { useEffect, useState } from 'react';

import '../../styles/main.css';
import css from './form.module.css';

let tg = {
  token: '6866127779:AAG0vQHDIjHGP5FE3CsO6hfDQsu2Nuahh7o',
  chat_id: '@formTestMessages',
};

function sendMessage(text) {
  const url = `https://api.telegram.org/bot${tg.token}/sendMessage`;

  const obj = {
    chat_id: tg.chat_id,
    text: text,
  };

  const xht = new XMLHttpRequest();
  xht.open('POST', url, true);
  xht.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
  xht.send(JSON.stringify(obj));
}

// const email = document.getElementById('email');
// const phone = document.getElementById('phone');
// const comments = document.getElementById('comments');
// const form = document.querySelector('.form');
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   sendMessage(
//     `email: ${email.value}\nnumber: ${phone.value}\ncomment: ${comments.value}\n`
//   );

//   alert('Глянь в чат');
//   form.reset();
// });

export default function Form({ data, sum, counters }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [insta, setInsta] = useState('');
  const [email, setEmail] = useState('');

  const [send, setSend] = useState([]);

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'number') {
      setNumber(target.value);
    } else if (target.name === 'insta') {
      setInsta(target.value);
    } else if (target.name === 'email') {
      setEmail(target.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // console.log(name, email, number, insta);
    sendMessage(
      `Ім'я: ${name}\n Телефон: ${number}\n Інста: ${insta}\n Пошта: ${email}\n Замовлення: ${send.map(
        d =>
          `name: ${d.name},   price: ${d.price}, count:${d.count}, totalPrice: ${d.totalPrice};\n`
      )} \n Кінцева сума: ${sum}\n`
    );

    alert('Глянь в чат');
  };

  useEffect(() => {
    const newData = data.map((product, index) => {
      const itemData = {
        name: product.name,
        price: 100,
        count: counters[index],
        totalPrice: !isNaN(counters[index] * 100) ? counters[index] * 100 : 0,
      };
      // console.log(
      //   'Назва',
      //   itemData.name,
      //   '\n',
      //   'Ціна',
      //   itemData.price,
      //   '\n',
      //   'Ціна*кількість',
      //   itemData.totalPrice
      // );
      // console.log(send);
      return itemData;
    });

    setSend(newData);
  }, [data, counters]);

  // useEffect(() => {
  //   console.log('Кінцева сума', sum);
  // }, [sum]);

  return (
    <>
      <form className={css.Form} onSubmit={handleSubmit}>
        <h2 className={css.FormTitle}>Контактна інформація</h2>
        <div className={css.Group}>
          <input
            className={css.Input}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
            placeholder="*Ім'я"
          />
          {/* <label className={css.Label}>*Ім'я</label> */}
        </div>
        <div className={css.Group}>
          <input
            className={css.Input}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
            placeholder="*Телефон"
          />
          {/* <label className={css.Label}>*Телефон</label> */}
        </div>
        <div className={css.Group}>
          <input
            className={css.Input}
            type="text"
            name="insta"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={handleChange}
            value={insta}
            placeholder="Instagram"
          />
          {/* <label className={css.Label}>Instagram</label> */}
        </div>
        <div className={css.Group}>
          <input
            className={css.Input}
            type="email"
            name="email"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={handleChange}
            value={email}
            placeholder="Пошта"
          />
          {/* <label className={css.Label}>Пошта</label> */}
        </div>
        <button className={css.Button} type="submit">
          Відправити замовлення
        </button>
      </form>
    </>
  );
}
