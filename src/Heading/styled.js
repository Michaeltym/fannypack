// @flow
import styled, { css } from 'reakit/styled';
import { theme } from 'styled-tools';
import Heading from 'reakit/Heading';

const subHeadingProperties = css`
  font-weight: 500;

  & {
    ${theme('Heading.subHeading')};
  }
`;

export default styled(Heading)`
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;

  .heading& + .sub-heading {
    margin-top: -1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h1& {
    font-size: 3rem;
    @media (max-width: ${theme('layout.mobileBreakpoint')}px) {
      font-size: 2rem;
    }
    & {
      ${theme('Heading.h1')};
    }
  }
  h2& {
    font-size: 2.5rem;
    @media (max-width: ${theme('layout.mobileBreakpoint')}px) {
      font-size: 1.8rem;
    }
    & {
      ${theme('Heading.h2')};
    }
  }
  h3& {
    font-size: 2rem;
    @media (max-width: ${theme('layout.mobileBreakpoint')}px) {
      font-size: 1.6rem;
    }
    & {
      ${theme('Heading.h3')};
    }
  }
  h4& {
    font-size: 1.5rem;
    @media (max-width: ${theme('layout.mobileBreakpoint')}px) {
      font-size: 1.4rem;
    }
    & {
      ${theme('Heading.h4')};
    }
  }
  h5& {
    font-size: 1.25rem;
    @media (max-width: ${theme('layout.mobileBreakpoint')}px) {
      font-size: 1.2rem;
    }
    & {
      ${theme('Heading.h5')};
    }
  }
  h6& {
    font-size: 1rem;
    & {
      ${theme('Heading.h6')};
    }
  }

  & {
    ${props => props.isSubHeading && subHeadingProperties};
  }

  ${theme('Heading.base')};
`;
