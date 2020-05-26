import { LandingConfig } from '../config/LandingConfig';

export const getRandomInt = (max: number, min: number = 0): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const setIntervalX = (
  callback: () => void,
  delay: number,
  repetitions: number,
) => {
  var x = 0;
  var intervalID = window.setInterval(function () {
    callback();

    if (++x === repetitions) {
      window.clearInterval(intervalID);
    }
  }, delay);
};

const getDirection = (): [number, number] => {
  return [getRandomInt(3), getRandomInt(3)];
};

export const chaos = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  delay: number,
  repetitions: number,
  lineWidth: number,
  megaChaos: boolean = false,
) => {
  setIntervalX(
    () => {
      for (let i = 0; i < LandingConfig.numberOfLines; i++) {
        const coordinates = linesArray[i].coordinates;
        const hue = linesArray[i].color.hue;
        const saturation = linesArray[i].color.saturation;
        const lightness = linesArray[i].color.lightness;
        const opacity = linesArray[i].color.opacity;

        const directionX = linesArray[i].initialDirection[0];
        const directionY = linesArray[i].initialDirection[1];

        const hsla = `hsla(${hue},${saturation}%,${lightness}%,${opacity})`;
        context.strokeStyle = hsla;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(coordinates[0], coordinates[1]);

        linesArray[i].color.hue = linesArray[i].color.hue - 8;
        if (linesArray[i].color.hue < 0) {
          linesArray[i].color.hue = linesArray[i].color.hue + 16;
        }

        if (megaChaos) {
          linesArray[i].initialDirection = getDirection();
        }

        if (directionX === 0 && directionY === 0) {
          if (
            linesArray[i].twistCounter % getRandomInt(4) === 0 ||
            linesArray[i].twistCounter % getRandomInt(4) === 0
          ) {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] + getRandomInt(3);
            linesArray[i].coordinates[1] =
              linesArray[i].coordinates[1] + getRandomInt(3);
          } else {
            linesArray[i].coordinates[1] =
              linesArray[i].coordinates[1] + getRandomInt(3);
          }
        }
        if (directionX === 0 && directionY === 1) {
          if (
            linesArray[i].twistCounter % getRandomInt(4) === 0 ||
            linesArray[i].twistCounter % getRandomInt(4) === 0
          ) {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] - getRandomInt(3);
            linesArray[i].coordinates[1] =
              linesArray[i].coordinates[1] + getRandomInt(3);
          } else {
            linesArray[i].coordinates[1] =
              linesArray[i].coordinates[1] + getRandomInt(3);
          }
        }
        if (directionX === 0 && directionY === 2) {
          if (
            linesArray[i].twistCounter % getRandomInt(4) === 0 ||
            linesArray[i].twistCounter % getRandomInt(4) === 0
          ) {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] - getRandomInt(3);
            linesArray[i].coordinates[1] =
              linesArray[i].coordinates[1] - getRandomInt(3);
          } else {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] - getRandomInt(3);
          }
        }
        if (directionX === 1 && directionY === 0) {
          if (
            linesArray[i].twistCounter % getRandomInt(4) === 0 ||
            linesArray[i].twistCounter % getRandomInt(4) === 0
          ) {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] - getRandomInt(3);
            linesArray[i].coordinates[1] =
              linesArray[i].coordinates[1] - getRandomInt(3);
          } else {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] + getRandomInt(3);
          }
        }
        if (directionX === 1 && directionY === 1) {
          if (
            linesArray[i].twistCounter % getRandomInt(4) === 0 ||
            linesArray[i].twistCounter % getRandomInt(4) === 0
          ) {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] + getRandomInt(3);
            linesArray[i].coordinates[1] =
              linesArray[i].coordinates[1] - getRandomInt(3);
          } else {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] + getRandomInt(3);
          }
        }
        if (directionX === 1 && directionY === 2) {
          if (
            linesArray[i].twistCounter % getRandomInt(4) === 0 ||
            linesArray[i].twistCounter % getRandomInt(4) === 0
          ) {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] + getRandomInt(3);
            linesArray[i].coordinates[1] =
              linesArray[i].coordinates[1] - getRandomInt(3);
          } else {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] - getRandomInt(3);
          }
        }
        if (directionX === 2 && directionY === 0) {
          if (
            linesArray[i].twistCounter % getRandomInt(4) === 0 ||
            linesArray[i].twistCounter % getRandomInt(4) === 0
          ) {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] + getRandomInt(3);
            linesArray[i].coordinates[1] =
              linesArray[i].coordinates[1] + getRandomInt(3);
          } else {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] - getRandomInt(3);
          }
        }
        if (directionX === 2 && directionY === 1) {
          if (
            linesArray[i].twistCounter % getRandomInt(4) === 0 ||
            linesArray[i].twistCounter % getRandomInt(4) === 0
          ) {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] - getRandomInt(3);
            linesArray[i].coordinates[1] =
              linesArray[i].coordinates[1] + getRandomInt(3);
          } else {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] - getRandomInt(3);
          }
        }
        if (directionX === 2 && directionY === 2) {
          if (
            linesArray[i].twistCounter % getRandomInt(4) === 0 ||
            linesArray[i].twistCounter % getRandomInt(4) === 0
          ) {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] + getRandomInt(3);
            linesArray[i].coordinates[1] =
              linesArray[i].coordinates[1] + getRandomInt(3);
          } else {
            linesArray[i].coordinates[0] =
              linesArray[i].coordinates[0] + getRandomInt(3);
          }
        }

        linesArray[i].twistCounter++;

        context.lineTo(coordinates[0], coordinates[1]);
        context.stroke();
      }
    },
    delay,
    repetitions,
  );
};

export const megaChaos = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  delay: number,
  repetitions: number,
  lineWidth: number,
) => {
  chaos(context, linesArray, delay, repetitions, lineWidth, true);
};

export const ohThoseLines = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  delay: number,
  repetitions: number,
  lineWidth: number,
) => {
  setIntervalX(
    () => {
      for (let i = 0; i < LandingConfig.numberOfLines; i++) {
        const coordinates = linesArray[i].coordinates;
        const hue = linesArray[i].color.hue;
        const saturation = linesArray[i].color.saturation;
        const lightness = linesArray[i].color.lightness;
        const opacity = linesArray[i].color.opacity;

        const directionX = linesArray[i].initialDirection[0];
        const directionY = linesArray[i].initialDirection[1];

        const hsla = `hsla(${hue},${saturation}%,${lightness}%,${opacity})`;
        context.strokeStyle = hsla;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(coordinates[0], coordinates[1]);

        linesArray[i].color.hue = linesArray[i].color.hue - 8;
        if (linesArray[i].color.hue < 0) {
          linesArray[i].color.hue = linesArray[i].color.hue + 16;
        }

        if (directionX === 0 && directionY === 0) {
          linesArray[i].coordinates[1] = linesArray[i].coordinates[1] + 1;
        }
        if (directionX === 0 && directionY === 1) {
          linesArray[i].coordinates[0] = linesArray[i].coordinates[0] + 1;
          linesArray[i].coordinates[1] = linesArray[i].coordinates[1] + 1;
        }
        if (directionX === 0 && directionY === 2) {
          linesArray[i].coordinates[0] = linesArray[i].coordinates[0] + 1;
        }
        if (directionX === 1 && directionY === 0) {
          linesArray[i].coordinates[0] = linesArray[i].coordinates[0] + 1;
          linesArray[i].coordinates[1] = linesArray[i].coordinates[1] - 1;
        }
        if (directionX === 1 && directionY === 1) {
          linesArray[i].coordinates[1] = linesArray[i].coordinates[1] - 1;
        }
        if (directionX === 1 && directionY === 2) {
          linesArray[i].coordinates[0] = linesArray[i].coordinates[0] - 1;
          linesArray[i].coordinates[1] = linesArray[i].coordinates[1] - 1;
        }
        if (directionX === 2 && directionY === 0) {
          linesArray[i].coordinates[0] = linesArray[i].coordinates[0] - 1;
        }
        if (directionX === 2 && directionY === 1) {
          linesArray[i].coordinates[0] = linesArray[i].coordinates[0] - 1;
          linesArray[i].coordinates[1] = linesArray[i].coordinates[1] + 1;
        }
        if (directionX === 2 && directionY === 2) {
          linesArray[i].coordinates[0] = linesArray[i].coordinates[0] - 1;
          linesArray[i].coordinates[1] = linesArray[i].coordinates[1] - 1;
        }

        context.lineTo(coordinates[0], coordinates[1]);
        context.stroke();
      }
    },
    delay,
    repetitions,
  );
};

export const slightlyCurved = (
  context: CanvasRenderingContext2D,
  linesArray: any,
  delay: number,
  repetitions: number,
  lineWidth: number,
) => {
  setIntervalX(
    () => {
      for (let i = 0; i < LandingConfig.numberOfLines; i++) {
        const coordinates = linesArray[i].coordinates;
        const hue = linesArray[i].color.hue;
        const saturation = linesArray[i].color.saturation;
        const lightness = linesArray[i].color.lightness;
        const opacity = linesArray[i].color.opacity;

        const directionX = linesArray[i].initialDirection[0];
        const directionY = linesArray[i].initialDirection[1];

        const hsla = `hsla(${hue},${saturation}%,${lightness}%,${opacity})`;
        context.strokeStyle = hsla;
        context.lineWidth = lineWidth;
        context.beginPath();
        context.moveTo(coordinates[0], coordinates[1]);

        linesArray[i].color.hue = linesArray[i].color.hue - 8;
        if (linesArray[i].color.hue < 0) {
          linesArray[i].color.hue = linesArray[i].color.hue + 16;
        }

        if (directionX === 0 && directionY === 0) {
          if (
            linesArray[i].twistCounter % 2 === 0 ||
            linesArray[i].twistCounter % 3 === 0
          ) {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] + 1;
            linesArray[i].coordinates[1] = linesArray[i].coordinates[1] + 1;
          } else {
            linesArray[i].coordinates[1] = linesArray[i].coordinates[1] + 1;
          }
        }
        if (directionX === 0 && directionY === 1) {
          if (
            linesArray[i].twistCounter % 2 === 0 ||
            linesArray[i].twistCounter % 3 === 0
          ) {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] - 1;
            linesArray[i].coordinates[1] = linesArray[i].coordinates[1] + 1;
          } else {
            linesArray[i].coordinates[1] = linesArray[i].coordinates[1] + 1;
          }
        }
        if (directionX === 0 && directionY === 2) {
          if (
            linesArray[i].twistCounter % 2 === 0 ||
            linesArray[i].twistCounter % 3 === 0
          ) {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] - 1;
            linesArray[i].coordinates[1] = linesArray[i].coordinates[1] - 1;
          } else {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] - 1;
          }
        }
        if (directionX === 1 && directionY === 0) {
          if (
            linesArray[i].twistCounter % 2 === 0 ||
            linesArray[i].twistCounter % 3 === 0
          ) {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] - 1;
            linesArray[i].coordinates[1] = linesArray[i].coordinates[1] - 1;
          } else {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] + 1;
          }
        }
        if (directionX === 1 && directionY === 1) {
          if (
            linesArray[i].twistCounter % 2 === 0 ||
            linesArray[i].twistCounter % 3 === 0
          ) {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] + 1;
            linesArray[i].coordinates[1] = linesArray[i].coordinates[1] - 1;
          } else {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] + 1;
          }
        }
        if (directionX === 1 && directionY === 2) {
          if (
            linesArray[i].twistCounter % 2 === 0 ||
            linesArray[i].twistCounter % 3 === 0
          ) {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] + 1;
            linesArray[i].coordinates[1] = linesArray[i].coordinates[1] - 1;
          } else {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] - 1;
          }
        }
        if (directionX === 2 && directionY === 0) {
          if (
            linesArray[i].twistCounter % 4 === 0 ||
            linesArray[i].twistCounter % 5 === 0
          ) {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] + 1;
            linesArray[i].coordinates[1] = linesArray[i].coordinates[1] + 1;
          } else {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] - 1;
          }
        }
        if (directionX === 2 && directionY === 1) {
          if (
            linesArray[i].twistCounter % 4 === 0 ||
            linesArray[i].twistCounter % 5 === 0
          ) {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] - 1;
            linesArray[i].coordinates[1] = linesArray[i].coordinates[1] + 1;
          } else {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] - 1;
          }
        }
        if (directionX === 2 && directionY === 2) {
          if (
            linesArray[i].twistCounter % 4 === 0 ||
            linesArray[i].twistCounter % 5 === 0
          ) {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] + 1;
            linesArray[i].coordinates[1] = linesArray[i].coordinates[1] + 1;
          } else {
            linesArray[i].coordinates[0] = linesArray[i].coordinates[0] + 1;
          }
        }

        linesArray[i].twistCounter++;

        context.lineTo(coordinates[0], coordinates[1]);
        context.stroke();
      }
    },
    delay,
    repetitions,
  );
};
