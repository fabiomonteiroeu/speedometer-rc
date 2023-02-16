import React, { useState } from 'react';
import {  maskValue } from '../../utils/fn';
import * as s from './styles';

export type SpeedometerProps = {
  children?: React.ReactNode;
  title?: string;
  needleValue?: number;
  needleRotateValue?: number | string;
  needleBgColor?: number | string;
  speedFillValue?: number | string;
  speedFillColor?: number | string;
  speedCoverColor?: number | string;
  loading?: boolean;
  metaValue?: number;
  totalFillValue?: number;
};

export function Speedometer ({
  children,
  title,
  needleValue,
  needleRotateValue = -1,
  speedFillValue,
  needleBgColor = '#78706F',
  speedFillColor,
  speedCoverColor,
  metaValue,
  totalFillValue,
  loading = false
}: SpeedometerProps) {
  const [styleShowEdit, setStyleShowEdit] = useState({
    transform: 'translateX(73%)'
  });
  const [showMeta, setShowMeta] = useState(false);
  const [showFillValue, setShowFillValue] = useState(false);

  return (
    <s.Wrapper aria-label="Speedometer component">
      <div className="speedometerHeader">
          <h4 className="speedometerTitle">{title}</h4>
        <div
          className="speedometerChangeMetric"
          onMouseEnter={e => {
            setStyleShowEdit({ transform: 'translateX(0)' });
          }}
          onMouseLeave={e => {
            setStyleShowEdit({ transform: 'translateX(73%)' });
          }}
        >
         
            <div
              className="editButton"
              style={styleShowEdit}
              onClick={() => {
                // set action to open modal
              }}
            >
              <img width="3x" height="15px" src="../../assest/Icons/ChangeOptions/index.svg" alt="" />
              <span className="editLabel">
                Editar
              </span>
            </div>
        
        </div>
      </div>

      <div className="speedometerWrapper">
        <div className="speedometerContainer">
          <div className="speedometerContent">
           
              <>
                <div
                  className="speedometerFill"
                  style={{
                    backgroundColor: `${speedFillColor}`,
                    transform: `rotate(${speedFillValue}turn)`
                  }}
                  onMouseEnter={e => {
                    setShowFillValue(true);
                  }}
                  onMouseLeave={e => {
                    setShowFillValue(false);
                  }}
                ></div>
                <div className="speedometerDivider"></div>
                <div
                  className="speedometerCover"
                  style={{ backgroundColor: `${speedCoverColor}` }}
                >
                  {needleValue?.toLocaleString('pt-BR', {
                    minimumFractionDigits: 1,
                    maximumFractionDigits: 1,
                    currency: 'BRL'
                  })}
                </div>
                <div
                  className="speedometerNeedle"
                  style={{
                    backgroundColor: `${needleBgColor}`,
                    transform: `rotate(${needleRotateValue}deg)`
                  }}
                  onMouseEnter={e => {
                    setShowMeta(true);
                  }}
                  onMouseLeave={e => {
                    setShowMeta(false);
                  }}
                ></div>
              </>
           
          </div>
        </div>

        {showMeta ? (
          <div className="tooltipNeedleValue">
            <span>
            Valor da meta:
              <b className="number"> {metaValue} </b>
            </span>
          </div>
        ) : null}

        {showFillValue ? (
          <div className="tooltipFillValue">
            <span>
            Total de registros:
              <b className="number">
                {' '}
                {maskValue(Number(totalFillValue), 0, 0)}{' '}
              </b>
            </span>
          </div>
        ) : null}
      </div>

      {children}
    </s.Wrapper>
  );
};

export default Speedometer;
