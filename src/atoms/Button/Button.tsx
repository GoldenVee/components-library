import React, { forwardRef, ComponentPropsWithoutRef } from 'react';
import styled from 'styled-components';
import {
  StyledButtonOne,
  StyledButtonTwo,
  StyledButtonThree,
} from './Button.styles';

export interface ButtonProps {
  name: string;
  children?: React.ReactNode;
}
export type Ref = HTMLButtonElement;

const CardExample = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 1.5rem;
  margin: 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  max-width: 500px;
  box-shadow: 4px 2px 16px ${({ theme }) => theme.colors.boxShadow};
`;

const TestText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  margin: 0.25rem 0.5rem;
`;
const TestSubText = styled.p`
  color: ${({ theme }) => theme.colors.subText};
  margin: 0.25rem 0.5rem;
`;

const TextLink = styled.a`
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  margin: 0.25rem 0.5rem;

  &:hover {
    transition: all 0.5s ease-in-out;
    color: ${({ theme }) => theme.colors.linkHover};
  }
`;

export const Button = forwardRef<Ref, ComponentPropsWithoutRef<'button'>>(
  ({ children, name, ...props }, ref) => (
    <CardExample>
      <StyledButtonOne type="button" ref={ref} {...props}>
        {name}
      </StyledButtonOne>
      <StyledButtonTwo type="button" ref={ref} {...props}>
        {name}
      </StyledButtonTwo>
      <StyledButtonThree type="button" ref={ref} {...props}>
        {name}
      </StyledButtonThree>
      <TestText>Text test</TestText>
      <TestSubText>Subtext test</TestSubText>
      <TextLink href={'https://whitelabelco.com/blog'}>Link test</TextLink>
    </CardExample>
  ),
);

Button.displayName = 'Button';
