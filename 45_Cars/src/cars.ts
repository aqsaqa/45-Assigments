import { features } from "process";

function storecarInfo(manufacture: string, modelName: string, ...extraoption: { [key : string]: any } [] ):
object {

    const carInfo = {
        manufacture,
        modelName,
        ...Object.assign({}, ...extraoption)
    }

    return carInfo;
};

let answer = storecarInfo('honda','civic',{color:'black'},{features: ['navigation','power window']})

console.log(answer);