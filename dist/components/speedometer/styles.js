import styled, { css } from 'styled-components';
import { media } from '../../media';
export const Wrapper = styled.div `
  ${({ needleBgColor, speedFillColor, speedCoverColor }) => css `
    display: flex;
      align-items: left;
      flex-direction: column;
      width: 100%;
      border: 1px solid #c2cfe0;
      border-radius: 6px;
      background-color: #ffffff;
      padding: 1.2rem 1rem 0 1.2rem ;
    .speedometerHeader{
      display: flex;
      justify-content: space-between;
      .speedometerTitle {
        text-align: left;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: bold;
        color: #333333;
      }
      .speedometerChangeMetric{
        cursor: pointer;
        overflow: hidden;
        .editButton{
          display: flex;
          flex-direction: row;
          align-items: center;
          transition-timing-function: ease-in-out;
          transition: 0.50s;
          transform: translateX(73%);

          & [aria-label="IconBase component"] {
            padding: 0;
            & svg{
              width: 1.4rem;
              height: 1.4rem;
            }
          }

          &:ChangeOptionsIcon{
            padding: 0;
          }
          .editLabel{
            font-size: 1rem;
        font-weight: bold;
            text-transform: uppercase;
            margin-left: 0;
            color: #333333;
          }
        }
      }

    }
    .speedometerWrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      align-content: left;
      justify-content: left;
      width: 100%;
      position relative;
      .speedometerContainer {
        width: 100%;
        max-width: 180px;
        display: flex;
        align-items: center;
        align-content: center;
        ${() => media.greaterThan('hd') `
          max-width: 190px;
        `};

        ${() => media.greaterThan('ultrahd') `
          max-width: 280px;
        `};
        .speedometerContent {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: #e7e7e7;
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        background: #E7E7E7;
        position: relative;
        border-top-left-radius: 100% 200%;
        border-top-right-radius: 100% 200%;
        overflow: hidden;
        display: flex ;

        .speedometerFill {
          position: absolute;
          top: 100%;
          left: 0;
          width: inherit;
          height: 100%;
          background: ${speedFillColor ? speedFillColor : '#78706F'};
          transform-origin: center top;
          transition: transform 0.2s ease-out;
          cursor: pointer;
        }
        .speedometerCover {
          width: 56%;
          height: 112%;
          background: ${speedCoverColor ? speedCoverColor : '#78706F'};
          border-radius: 50%;
          position: absolute;
          top: 48%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 4;
          /* Text */
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 35%;
          box-sizing: border-box;
          color: #ffffff;
          font-size: 1.7rem ;
          font-weight: bold ;
          padding-top: 1.4rem;
          ${() => media.greaterThan('hd') `
              font-size: 2rem ;
              padding-top: 2rem;

          `};

          ${() => media.greaterThan('ultrahd') `
            font-size: 2.5rem ;
            padding-top: 2rem;
          `};
          
        }
        .speedometerDivider {
          background: #ffffff;
          z-index: 3;
          width: 70%;
          height: 140%;
          background: #ffffff;
          border-radius: 50%;
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translateX(-50%);
          /* Text */
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 25%;
          box-sizing: border-box;
        }
        .speedometerNeedle {
          width: 90px;
          height: 6px;
          background: ${needleBgColor ? needleBgColor : '#78706F'} ;
          border-bottom-left-radius: 100%;
          border-bottom-right-radius: 5px;
          border-top-left-radius: 100%;
          border-top-right-radius: 5px;
          position: absolute;
          bottom: 0;
          left: 0;
          transform-origin: 100% 4px;
          transform: rotate(150deg);
          z-index: 2;
          animation: speed .2s ease-in-out ;
          cursor: pointer;
          ${() => media.greaterThan('ultrahd') `
          width: 140px;
          height: 10px;
          `};
        }
        @-webkit-keyframes speed {
          0% {
            transform: rotate(0);
          }

          40% {
            transform: rotate(180deg);
          }

          55% {
            transform: rotate(170deg);
          }

          75% {
            transform: rotate(180deg);
          }
        }
      }
    }
    .tooltipNeedleValue, .tooltipFillValue{
      background: #e7e7e7;
      border-radius: .5rem;
      padding: 1rem;
      position: absolute;
      z-index:10;
      top: -50px;
      border: 1px solid #333;
      color:#333;
      span{
        .number{
          color:#333;
        }
      }
    }
  `}
`;
