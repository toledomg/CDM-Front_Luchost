import styled from "styled-components";

export const Nav = styled.nav`
  header {
    font-family: var(--font-primary);

    max-width: 1000px;
    min-width: 320px;
    height: 80px;
    min-height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    padding: 20px;
    gap: 1rem;
  }

  header > h1 {
    color: var(--color-primary);
  }

  header > a {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 28px;
    letter-spacing: 1px;
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
`;

export const Section = styled.section`
  border-top: 1px solid var(--color-gray-3);

  div {
    max-width: 1000px;
    min-width: 320px;
    height: 80px;
    min-height: 70px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    /* border-top: 1px solid var(--color-gray-3); */
    margin: 0 auto;

    padding: 10px 20px;
    gap: 30px;
  }

  div > h1 {
    color: var(--color-gray-0);
  }
  div > h2 {
    font-size: 1.125rem;
    color: var(--color-gray-0);
  }

  div > p {
    color: var(--color-gray-1);
  }

  @media screen and (min-width: 769px) and (max-width: 4044px) {
  }
`;

export const SectionInfo = styled.section`
  border-top: 1px solid var(--color-gray-3);

  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-top: 60px;
      font-size: 2rem;
      font-weight: 600;
      align-items: center;
    }

    img {
      width: 100px;
      height: auto;
      margin: 10% auto;
    }
  }

  div {
    max-width: 1000px;
    min-width: 320px;
    height: 80px;
    min-height: 70px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    padding: 10px 20px;
    gap: 30px;
  }

  div > h1 {
    color: var(--color-gray-0);
  }

  div > p {
    color: var(--color-gray-1);
  }

  @media screen and (max-width: 350px) and (max-width: 4044px) {
    .loading {
      img {
        margin: 40% auto;
      }
    }
  }
`;
