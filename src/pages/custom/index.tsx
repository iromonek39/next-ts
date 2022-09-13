import { css } from "@emotion/react";
import Link from "next/link";
import React from "react";

type Props = {
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onkeypress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClickDiv: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const index = () => {
  type Sandwich = {
    name: string;
    id: number;
    price: number;
    kcal: number;
  };

  const sandwiches: Sandwich[] = [
    {
      id: 1,
      name: "BLT",
      price: 430,
      kcal: 330,
    },
    {
      id: 2,
      name: "サラダチキン",
      price: 430,
      kcal: 278,
    },
    {
      id: 3,
      name: "チリチキン",
      price: 430,
      kcal: 273,
    },
  ];

  const selectedSandwich = (event: React.MouseEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <>
      <div
        css={css`
          width: 50%;
          margin: 0 auto;
        `}
      >
        <ul
          css={css`
            display: flex;
            width: 100%;
            flex-wrap: wrap;
          `}
        >
          {sandwiches.map((sandwich) => (
            <li
              key={sandwich.id}
              css={css`
                width: 50%;
              `}
              onClick={selectedSandwich}
            >
              {sandwich.name},¥{sandwich.price}/{sandwich.kcal}kcal
            </li>
          ))}
        </ul>
      </div>
      <Link href="/">トップ</Link>
    </>
  );
};

export default index;
