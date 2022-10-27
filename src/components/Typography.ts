import styled from "styled-components";

interface TitleTextProps {
  size?:  "m" | "s" | "xs";
  color?: "title" | "subtitle" | "text";
  weight?: string | number;
  width?: string | number;
}

interface RegularTextProps {
  size?: "l" | "m" | "s";
  color?: "text" | "subtitle" | "label" | 'span';
  weight?: string | number;
  width?: string | number;
}

export const TitleText = styled.span<TitleTextProps>`
  color: ${({ theme, color }) => theme[`base-${color ?? "title"}`]};
  font-size: ${({ theme, size }) => theme.textSizes[`title-${size ?? 'm'}`]};
  line-height: 160%;
  font-weight: ${({ weight }) => weight ?? 800};
  
  width: ${({width}) => width};
`;

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme[`base-${color ?? "text"}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? "m"}`]};
  line-height: 160%;
  font-weight: ${({ weight }) => weight ?? 400};
  width: ${({width}) => width};
`;

