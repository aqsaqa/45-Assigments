"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storecarInfo(manufacture, modelName, ...extraoption) {
    const carInfo = Object.assign({ manufacture,
        modelName }, Object.assign({}, ...extraoption));
    return carInfo;
}
;
let answer = storecarInfo('honda', 'civic', { color: 'black' }, { features: ['navigation', 'power window'] });
console.log(answer);
