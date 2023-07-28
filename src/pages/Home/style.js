import styled from "styled-components";

export const HomeSection = styled.section`
  width: 100%;
  min-height: 100vh;

  color: var(--color-gray-1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 30px;

  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);

  padding: 10px;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 28px;
    letter-spacing: 1px;
    color: var(--color-primary);
  }

  h1 {
    color: var(--color-primary);

    font-size: 1.875rem;
  }

  div {
    width: 296px;
    height: 403px;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 34px 18px;
    gap: 18px;

    background-color: var(--color-gray-3);

    border-radius: 4px;
  }

  div > h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 0.9375rem;
    line-height: 22px;

    color: var(--color-gray-0);
  }

  div > span {
    font-style: normal;
    font-weight: 400;
    font-size: 0.6108rem;
    line-height: 0px;

    color: var(--color-gray-1);
  }

  button {
    width: 100%;
    height: 39px;

    font-style: normal;
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 21px;

    padding: 0 10px;
  }

  a {
    width: 100%;
    max-width: 260px;
    height: 39px;

    font-style: normal;
    font-weight: 500;
    font-size: 0.8125rem;
    line-height: 21px;

    padding: 0 10px;
  }

  div > div > a {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 28px;
    color: var(--color-gray-0);

    padding: 0px 17px;
    gap: 10px;

    background: var(--color-gray-1);

    border: 1px solid var(--color-gray-1);
    border-radius: 4px;

    :hover {
      background: var(--color-gray-2);

      border: 1px solid var(--color-gray-2);
    }
  }
`;
