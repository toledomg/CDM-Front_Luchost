import styled from "styled-components";

export const HeaderHubDash = styled.header`
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 28px;
    letter-spacing: 1px;
    color: var(--color-primary);
  }
  img {
    width: 250px;
    height: auto;
  }

  .reset-link {
    color: inherit;
    text-decoration: none;
    background: none;
    border: none;

    :hover {
      background: none;

      border: none;
    }
  }
`;
