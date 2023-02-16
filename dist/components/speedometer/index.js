import React, { useState } from 'react';
import { maskValue } from '../../utils/fn';
import * as s from './styles';
export function Speedometer({ children, title, needleValue, needleRotateValue = -1, speedFillValue, needleBgColor = '#78706F', speedFillColor, speedCoverColor, metaValue, totalFillValue, loading = false }) {
    const [styleShowEdit, setStyleShowEdit] = useState({
        transform: 'translateX(73%)'
    });
    const [showMeta, setShowMeta] = useState(false);
    const [showFillValue, setShowFillValue] = useState(false);
    return (React.createElement(s.Wrapper, { "aria-label": "Speedometer component" },
        React.createElement("div", { className: "speedometerHeader" },
            React.createElement("h4", { className: "speedometerTitle" }, title),
            React.createElement("div", { className: "speedometerChangeMetric", onMouseEnter: e => {
                    setStyleShowEdit({ transform: 'translateX(0)' });
                }, onMouseLeave: e => {
                    setStyleShowEdit({ transform: 'translateX(73%)' });
                } },
                React.createElement("div", { className: "editButton", style: styleShowEdit, onClick: () => {
                        // set action to open modal
                    } },
                    React.createElement("img", { src: "./Icons/ChangeOptions/index.svg", alt: "" }),
                    React.createElement("span", { className: "editLabel" }, "Editar")))),
        React.createElement("div", { className: "speedometerWrapper" },
            React.createElement("div", { className: "speedometerContainer" },
                React.createElement("div", { className: "speedometerContent" },
                    React.createElement(React.Fragment, null,
                        React.createElement("div", { className: "speedometerFill", style: {
                                backgroundColor: `${speedFillColor}`,
                                transform: `rotate(${speedFillValue}turn)`
                            }, onMouseEnter: e => {
                                setShowFillValue(true);
                            }, onMouseLeave: e => {
                                setShowFillValue(false);
                            } }),
                        React.createElement("div", { className: "speedometerDivider" }),
                        React.createElement("div", { className: "speedometerCover", style: { backgroundColor: `${speedCoverColor}` } }, needleValue === null || needleValue === void 0 ? void 0 : needleValue.toLocaleString('pt-BR', {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1,
                            currency: 'BRL'
                        })),
                        React.createElement("div", { className: "speedometerNeedle", style: {
                                backgroundColor: `${needleBgColor}`,
                                transform: `rotate(${needleRotateValue}deg)`
                            }, onMouseEnter: e => {
                                setShowMeta(true);
                            }, onMouseLeave: e => {
                                setShowMeta(false);
                            } })))),
            showMeta ? (React.createElement("div", { className: "tooltipNeedleValue" },
                React.createElement("span", null,
                    "Valor da meta:",
                    React.createElement("b", { className: "number" },
                        " ",
                        metaValue,
                        " ")))) : null,
            showFillValue ? (React.createElement("div", { className: "tooltipFillValue" },
                React.createElement("span", null,
                    "Total de registros:",
                    React.createElement("b", { className: "number" },
                        ' ',
                        maskValue(Number(totalFillValue), 0, 0),
                        ' ')))) : null),
        children));
}
;
export default Speedometer;
