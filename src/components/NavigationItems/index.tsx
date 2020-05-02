import * as React from 'react';
import { Link } from 'react-router-dom';
import { underlineOnHover } from '../../styles/css/textHover';
import { css } from 'emotion';
import { ThemeContext } from '../ThemeContext';

interface INavigationItemsProps {
  isMobile?: boolean;
}

const navigationItemCss = (theme: any, isMobile: boolean) => css`
  position: relative;
  color: ${theme.textColor};
  display: ${isMobile ? 'flex' : 'block'};
  justify-content: center;
  height: ${isMobile ? '32px' : 'auto'};

  ${underlineOnHover(theme)};
`;

const NavigationItems: React.FC<INavigationItemsProps> = (
  props: INavigationItemsProps,
) => {
  const { isMobile = false } = props;

  const theme = React.useContext(ThemeContext);

  return (
    <>
      <Link to="/" className={navigationItemCss(theme, isMobile)}>
        Das Haus
      </Link>
      <Link to="timeline" className={navigationItemCss(theme, isMobile)}>
        Timeline
      </Link>
      <Link to="about" className={navigationItemCss(theme, isMobile)}>
        About who?
      </Link>
      <Link to="blog" className={navigationItemCss(theme, isMobile)}>
        Blog
      </Link>
    </>
  );
};

export default NavigationItems;