import styled from 'styled-components';
import tw from 'twin.macro';

const sharedButtonStyling = styled.button`
  padding: 0.75em 1em;
  margin: 0.25rem 0.5rem;

  &:hover {
    transition: all 0.5s ease-in-out;
  }
`;

export const StyledButtonOne = styled(sharedButtonStyling)`
  background-color: ${({ theme }) => theme.colors.primaryActive};
  color: ${({ theme }) => theme.colors.primaryText};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px ${({ theme }) => theme.colors.primaryBorder} solid;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.primaryTextHover};
    border: 1px ${({ theme }) => theme.colors.primaryBorderHover} solid;
  }
`;
export const StyledButtonTwo = styled(sharedButtonStyling)`
  color: ${({ theme }) => theme.colors.secondaryActive};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px ${({ theme }) => theme.colors.secondaryActive} solid;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
    color: ${({ theme }) => theme.colors.secondaryTextHover};
    border: 1px ${({ theme }) => theme.colors.secondaryHover} solid;
  }
`;
export const StyledButtonThree = styled(sharedButtonStyling)`
  background-color: ${({ theme }) => theme.colors.disabled};
  color: ${({ theme }) => theme.colors.disabledText};

  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px ${({ theme }) => theme.colors.disabledBorder} solid;
`;

export const TwButton = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
`;
