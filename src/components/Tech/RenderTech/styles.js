import styled from "styled-components";

export const TechUl = styled.ul`
  width: 100%;
  max-width: 1000px;
  min-width: 400px;
  min-height: 380px;
  max-height: 480px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  background-color: var(--color-gray-3);
  border-radius: 8px;

  margin: 0 auto;
  padding: 15px 15px;
  gap: 16px;

  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-gray-2);
    border-radius: 100px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  section > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  section > div > h2 {
    font-size: 1.75rem;
    text-align: center;
    color: var(--color-gray-0);
  }

  section > div > h3 {
    text-align: center;
    color: var(--color-gray-0);
  }

  li {
    width: 40%;
    height: 70px;
    min-width: 370px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--color-gray-4);
    border-radius: 4px;

    padding: 10px 20px;
  }

  li:hover {
    background-color: var(--color-gray-2);
  }

  li > p {
    font-style: normal;
    font-weight: 700;
    font-size: 0.8881rem;
    line-height: 22px;
    color: var(--color-gray-0);
  }

  li > section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    gap: 16px;
  }

  li > section > i {
    font-size: 0.875rem;
    color: var(--color-gray-0);

    cursor: pointer;
  }

  li > section > p {
    font-style: normal;
    font-weight: 400;
    font-size: 0.7614rem;
    line-height: 22px;

    color: var(--color-gray-0);

    text-align: right;
  }
`;
