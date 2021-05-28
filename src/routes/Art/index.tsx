import React, { useState } from 'react';
import { css } from 'emotion';
import { trackEvent } from '../../util/metrics';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../styles';

import { H1 } from '../../components/core/Heading';

import RouteContainer from '../../components/RouteContainer';
import IndentContainer from '../../components/IndentContainer';
import VerticalSpacing from '../../components/VerticalSpacing';
import AbstractArt from '../../components/AbstractArt';

import { VerticalSpacingHeight } from '../../enums/VerticalSpacingHeight';

import { t } from '../../translations/t';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';
import { ILogoDiving } from '../../components/HeaderDesktop';

interface IArtProps {
  setIsLogoDiving: Dispatch<SetStateAction<ILogoDiving>>;
}

const artCss = (isArtEnabled: boolean) => css`
  display: block;

  ${isArtEnabled ? 'overflow: hidden;' : ''};
  ${isArtEnabled ? 'opacity: 0;' : ''};
  transition: opacity 0.5s ease-in-out;

  ${isArtEnabled ? 'pointer-events: none;' : ''};
`;

const artButtonCss = (theme: Theme) => css`
  display: block;

  margin: 0 8px 0 auto;
  padding: 2px;
  border-radius: 2px;

  font-size: 20px;
  color: ${theme.hyperlinkColor};

  background-color: ${theme.hyperlinkBackgroundColor};

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

function Art(props: IArtProps) {
  const [isArtEnabled, setIsArtEnabled] = useState<boolean>(false);
  const [artStartTime, setArtStartTime] = useState<number>(0);

  const theme = React.useContext(ThemeContext);

  const { setIsLogoDiving } = props;

  const launchDiving = () => {
    setIsLogoDiving({
      isMoving: true,
      isJumping: false,
      isOriginalVisible: false,
    });
    setTimeout(
      () =>
        setIsLogoDiving({
          isMoving: true,
          isJumping: true,
          isOriginalVisible: false,
        }),
      700,
    );
    setTimeout(
      () =>
        setIsLogoDiving({
          isMoving: false,
          isJumping: false,
          isOriginalVisible: false,
        }),
      1650,
    );
    setTimeout(
      () =>
        setIsLogoDiving({
          isMoving: false,
          isJumping: false,
          isOriginalVisible: true,
        }),
      2000,
    );
    setTimeout(() => {
      setIsArtEnabled(true);
      setArtStartTime(Date.now());
    }, 1700);
  };

  return (
    <RouteContainer isNormalizeHeaderHeightEnabled={true}>
      {isArtEnabled ? (
        <AbstractArt
          isRandomArtEnabled={true}
          onClick={() => {
            setIsArtEnabled(false);
            setIsLogoDiving({
              isMoving: false,
              isJumping: false,
              isOriginalVisible: true,
            });
            trackEvent(
              'Art Close',
              'Random art closed',
              Math.round((Date.now() - artStartTime - 1000) / 1000),
            );
          }}
        />
      ) : (
        <></>
      )}

      <div className={artCss(isArtEnabled)}>
        <H1>{t.art.title}</H1>

        <VerticalSpacing height={VerticalSpacingHeight.Giant} />

        <IndentContainer>
          <button
            className={artButtonCss(theme)}
            onClick={() => {
              launchDiving();
              // setIsArtEnabled(true);
              // setArtStartTime(Date.now());
            }}
          >
            {t.art.actionButton}
          </button>
        </IndentContainer>
      </div>
    </RouteContainer>
  );
}

export default Art;
