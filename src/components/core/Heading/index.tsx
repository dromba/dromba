import * as React from 'react';
import { cx, css } from 'emotion';
import { useDevice } from '../../../hooks/useDevice';

import { ThemeContext } from '../../../context/ThemeContext';
import { Theme } from '../../../styles';

import { HeadingTags } from '../../../enums/HeadingTags';
import { HeadingSize } from '../../../enums/HeadingSize';
import { DeviceType } from '../../../enums/DeviceType';

import { underlineOnHover } from '../../../styles/css/textHover';

interface IHeadingProps {
  children: React.ReactNode;
  tag: HeadingTags;
  size: HeadingSize;
  isHoverable?: boolean;
}

interface IHProps {
  children: React.ReactNode;
  isHoverable?: boolean;
}

export const headingCss = (
  size: HeadingSize,
  theme: Theme,
  isHoverable?: boolean
) => css`
  font-size: ${size};
  position: relative;

  ${isHoverable ? underlineOnHover(theme) : null}
`;

const Heading: React.FC<IHeadingProps> = (props: IHeadingProps) => {
  const { tag, size, isHoverable = false, children } = props;

  const theme = React.useContext(ThemeContext);

  return React.createElement(
    tag,
    {
      className: cx(headingCss(size, theme, isHoverable), 'heading'),
    },
    children
  );
};

export const H1: React.FC<IHProps> = (props: IHProps) => (
  <Heading
    tag={HeadingTags.H1}
    size={useDevice() === DeviceType.Mobile ? HeadingSize.H2 : HeadingSize.H1}
    isHoverable={props.isHoverable}
  >
    {props.children}
  </Heading>
);

export const H2: React.FC<IHProps> = (props: IHProps) => (
  <Heading
    tag={HeadingTags.H2}
    size={useDevice() === DeviceType.Mobile ? HeadingSize.H3 : HeadingSize.H2}
    isHoverable={props.isHoverable}
  >
    {props.children}
  </Heading>
);

export const H3: React.FC<IHProps> = (props: IHProps) => (
  <Heading
    tag={HeadingTags.H3}
    size={useDevice() === DeviceType.Mobile ? HeadingSize.H4 : HeadingSize.H3}
    isHoverable={props.isHoverable}
  >
    {props.children}
  </Heading>
);

export const H4: React.FC<IHProps> = (props: IHProps) => (
  <Heading
    tag={HeadingTags.H4}
    size={HeadingSize.H4}
    isHoverable={props.isHoverable}
  >
    {props.children}
  </Heading>
);

export const H5: React.FC<IHProps> = (props: IHProps) => (
  <Heading
    tag={HeadingTags.H5}
    size={HeadingSize.H5}
    isHoverable={props.isHoverable}
  >
    {props.children}
  </Heading>
);

export const H6: React.FC<IHProps> = (props: IHProps) => (
  <Heading
    tag={HeadingTags.H6}
    size={HeadingSize.H6}
    isHoverable={props.isHoverable}
  >
    {props.children}
  </Heading>
);
