import styled from "styled-components";

export const FormCreate = styled.form`
  width: 100%;
  max-width: 260px;

  display: flex;
  flex-direction: column;

  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0px;

  color: var(--color-primary);

  gap: 20px;

  input {
    width: 265px;
    height: 39px;

    display: flex;
    flex-direction: row;
    align-items: center;

    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 21px;

    color: var(--color-gray-1);

    background: var(--color-gray-2);
    border: none;
    border-radius: 4px;

    padding: 0px 14px;
    gap: 9px;
  }

  input:focus {
    color: var(--color-gray-0);
  }

  .verify_pass {
    position: relative;
    margin-bottom: 5px;
  }
  .verify_pass > p {
    margin-top: 10px;
  }

  .verify_pass > span {
    font-size: 0.75rem;

    position: absolute;
    top: 0px;
    right: 0px;

    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-gray-1);
    background: var(--color-gray-2);
    border: none;
    border-radius: 4px;

    padding: 0px 14px;
    cursor: pointer;
  }

  .cad_verifyPass {
    position: relative;
    margin-bottom: 5px;

    flex-direction: column;
    align-items: flex-start;
  }

  .cad_verifyPass > i {
    font-size: 0.75rem;

    position: absolute;
    top: 10px;
    right: 0;

    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-gray-1);
    background: var(--color-gray-2);
    border: none;
    border-radius: 4px;

    padding: 0px 14px;
    cursor: pointer;
  }

  label {
    color: var(--color-gray-1);
  }

  a {
    box-sizing: border-box;

    width: 100%;
    height: 39px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
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
  }
`;
