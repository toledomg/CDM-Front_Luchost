import styled from "styled-components";

export const CadSection = styled.section`
  width: 100%;
  min-height: 100vh;

  color: var(--color-gray-1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;
  gap: 30px;

  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);

  section {
    width: 100%;
    max-width: 293px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* padding: 5px; */
    gap: 10px;
  }

  section > span {
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 28px;
    letter-spacing: 1px;
    color: var(--color-primary);
  }

  section > a {
    box-sizing: border-box;

    width: 100px;
    height: 32px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 28px;
    color: var(--color-gray-0);

    padding: 0px 17px;
    gap: 10px;

    background: var(--color-gray-3);

    border: 1px solid var(--color-gray-3);
    border-radius: 4px;

    :hover {
      background: var(--color-gray-2);

      border: 1px solid var(--color-gray-2);
    }
  }

  h1 {
    color: var(--color-primary);

    font-size: 1.5625rem;
  }

  div {
    width: 296px;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-gray-3);

    border-radius: 4px;
    padding: 34px 18px;
    gap: 20px;

    select {
      width: 100%;
      max-width: 263px;
      height: 38px;

      display: flex;
      flex-direction: row;
      align-items: center;

      color: var(--color-gray-1);
      background-color: var(--color-gray-2);

      border: 1px solid var(--color-gray-2);
      border-radius: 4px;

      padding: 0px 13px;
      gap: 8px;

      outline: none;
    }
    select > option {
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 26px;

      color: var(--color-gray-1);
    }

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 0.9375rem;
      line-height: 22px;

      color: var(--color-gray-0);
    }

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 0.625rem;
      line-height: 0px;

      color: var(--color-gray-1);
    }
  }
  button {
    width: 100%;
    max-width: 260px;
    height: 39px;

    font-style: normal;
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 21px;

    padding: 0 10px;
  }
`;
