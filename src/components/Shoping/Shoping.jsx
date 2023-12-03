import React, { useEffect, useState } from 'react';

// import '../../styles/main.css';
import css from './shoping.module.css';
import { IoMdClose } from 'react-icons/io';
// import './shoping.css';

const parfums = fetch(
  'https://makckachka.github.io/parfume-project-layout/parfume.json'
)
  .then(response => {
    if (!response.ok) {
      throw new Error(
        `Network response was not ok, status: ${response.status}`
      );
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

export default function Shoping({
  data,
  setData,
  sum,
  setSum,
  counters,
  setCounters,
}) {
  // const [data, setData] = useState([]);

  const handleDelete = id => {
    setData(prevData => prevData.filter(data => data.code !== id));
  };

  // let summa = 0;

  // function summary(price) {
  //   sum += price;
  // }
  // useEffect(() => {
  //   setSum(summa);
  // }, [setSum, summa]);

  useEffect(() => {
    const newSum = data.reduce((acc, product, index) => {
      const productPrice = !isNaN(counters[index] * 100)
        ? counters[index] * 100
        : 0;
      return acc + productPrice;
    }, 0);

    setSum(newSum);
  }, [data, counters, setSum]);

  useEffect(() => {
    parfums.then(data => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    const initialCounters = data.map(() => 1);
    setCounters(initialCounters);
  }, [data]);

  const increase = index => {
    setCounters(prevCounters => {
      const newCounters = [...prevCounters];
      newCounters[index] += 1;
      return newCounters;
    });
  };

  const decrease = index => {
    setCounters(prevCounters => {
      const newCounters = [...prevCounters];
      if (newCounters[index] > 1) {
        newCounters[index] -= 1;
      }
      return newCounters;
    });
  };

  return (
    <div>
      <ul id="products" className={css.listGroup}>
        {data ? (
          data.map((product, index) => (
            <li key={product.code} id={product.code} className={css.groupItem}>
              <img
                className={css.itemImage}
                // src="http://placehold.it/400x250/000/fff"
                src={product.image}
                alt=""
              />
              <div className={css.caption}>
                <span className={css.itemInfo}>
                  <h4 className={css.itemHeading}>{product.name}</h4>
                  <button
                    className={css.delBtn}
                    href="http://www.jquery2dotnet.com"
                    type="button"
                    onClick={() => handleDelete(product.code)}
                  >
                    <IoMdClose className={css.closeIcon} />
                  </button>
                </span>
                <span className={css.itemInfo}>
                  <p className={css.lead}>{counters[index] * 100} грн.</p>
                  <div className={css.counter}>
                    <button
                      onClick={() => {
                        increase(index);
                      }}
                      className={css.counterButton}
                    >
                      +
                    </button>
                    <p className={css.counterValue}>{counters[index]}</p>
                    <button
                      onClick={() => decrease(index)}
                      className={css.counterButton}
                    >
                      -
                    </button>
                  </div>
                </span>
              </div>
              {/* <div>
                {summary(
                  !isNaN(counters[index] * 100) ? counters[index] * 100 : 0
                )}
              </div> */}
            </li>
          ))
        ) : (
          <p>loading</p>
        )}
      </ul>
      <p className={css.Sum}>
        Загалом: <span>{sum} грн.</span>
      </p>
    </div>
  );
}
/* {data ? (
        data.map((product, index) => (
          <li id={product.code} key={index}>
            <div className="portfolio-list-item">
              <div className="portfolio-item-link">
                <div className="img-wrapper">
                  <img
                    className="prod-img"
                    src={product.image}
                    alt={product.name}
                    max-width="356"
                    max-height="400"
                  />
                  <p className="overlay">{product.description}</p>
                </div>
                <div className="portfolio-text">
                  <h3 className="portfolio-item-title">{product.name}</h3>
                  <p className="portfolio-item-text">{product.description}</p>
                </div>
              </div>
            </div>
          </li>
        ))
      ) : (
        <p>lox</p>
      )} */
