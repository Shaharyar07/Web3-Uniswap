import React, { useState, useEffect, useRef } from "react";
import styles from "../styles";
import { chevronDown } from "../assets";
import { useOnClickOutside } from "../utils";
const AmountIn = () => {
  const [showList, setShowList] = useState(false);
  return (
    <div className={styles.amountContainer}>
      <input
        type='number'
        placeholder='0.0'
        onChange={() => {}}
        className={styles.amountInput}
        value=''
        disabled={false}
      />
      <div
        className='relative'
        onClick={() => {
          setShowList((prev) => !prev);
        }}
      >
        <button className={styles.currencyButton}>
          {"ETH"}{" "}
          <img
            src={chevronDown}
            alt='Chevron Down'
            className={`h-4 w-4 object-contain ml-2 ${
              showList ? "rotate-180" : "rotate-0 "
            } `}
          />
        </button>
        {showList && (
          <ul className={styles.currencyList}>
            {[
              {
                token: "ETH",
                tokenName: "Ethereum",
              },
              {
                token: "SOL",
                tokenName: "Solana",
              },
            ].map(({ token, tokenName }, index) => (
              <li
                key={index}
                className={`${styles.currencyListItem} ${
                  true ? "bg-site-dim2" : ""
                } cursor-pointer`}
              >
                {tokenName }
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AmountIn;
