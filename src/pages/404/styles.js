import styled from "styled-components";

export const NotFound = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  h1 {
    font-size: 1.25rem;
    color: var(--color-gray-0);
  }

  a {
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
`;
