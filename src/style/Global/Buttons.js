import styled from "styled-components";

export const BtnDefault = styled.button`
  box-sizing: border-box;

  height: 48px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: var(--color-gray-0);

  padding: 0px 22px;
  gap: 10px;

  background: var(--color-primary);

  border: 1px solid var(--color-primary);
  border-radius: 4px;

  :hover {
    background: var(--color-primary-Focus);

    border: 1px solid var(--color-primary-Focus);
  }

  :not {
    background: var(--color-primary-Negative);

    border: 1px solid var(--color-primary-Negative);
  }

  :disabled {
    background-color: var(--color-gray-1);

    border: 1px solid var(--color-gray-1);
  }
  :disabled:hover {
    background: var(--color-gray-2);

    border: 1px solid var(--color-gray-2);
  }
`;

export const BtnMedium = styled.button`
  box-sizing: border-box;

  height: 32px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
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
`;

export const BtnText = styled.button`
  box-sizing: border-box;

  height: 32px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
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
`;

export const BtnAdd = styled.button`
  box-sizing: border-box;

  height: 32px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 600;
  font-size: 20px;
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
`;
