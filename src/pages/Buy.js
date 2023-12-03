import Form from 'components/Form Data/Form';
import Shoping from 'components/Shoping/Shoping';
import { useState } from 'react';

export default function Buy() {
  const [data, setData] = useState([]);
  const [counters, setCounters] = useState([]);
  // let sum = 0;
  const [sum, setSum] = useState(0);

  return (
    <>
      <h1 className="main-title">Покупки</h1>
      <section className="buy-section">
        <Shoping
          data={data}
          setData={setData}
          sum={sum}
          setSum={setSum}
          counters={counters}
          setCounters={setCounters}
        />
        <Form data={data} sum={sum} counters={counters} />
      </section>
    </>
  );
}
