import { GroupWineAttribute, WineAttribute } from "./types";


// Get data group by their Alcohol class
export function getDataByClasses(data: WineAttribute[]): GroupWineAttribute[] {
    let lookup: Record<number, GroupWineAttribute> = {};
    let classes: GroupWineAttribute[] = [];
    data.forEach((item) => {
        let grp = lookup[item.Alcohol];
        if (!grp) {
            lookup[item.Alcohol] = {
                name: item.Alcohol,
                data: []
            };
            grp = lookup[item.Alcohol];
            classes.push(grp);
        }
        grp.data.push(item)
    });
    return classes;
}


// Common Functions (Mean, Median, Mode)
function round(num: number): number {
    return parseFloat(num.toFixed(3));
}

function calculateMean(data: number[]): number {
    let sum = data.reduce((acc, item) => (acc + item), 0);
    return round(sum / data.length);
}

function calculateMedian(data: number[]): number {
    if (!data.length) return 0;

    const sorted = Array.from(data).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return round((sorted[middle - 1] + sorted[middle]) / 2);
    }

    return round(sorted[middle]);
}

function calculateMode(data: number[]): number {
    const mode: Record<number, number> = {};
    let max = 0, count = 0;
    data.forEach((item) => {
        if(mode[item]) mode[item]++; else mode[item] = 1;
      
        if(count < mode[item]) {
            max = item;
            count = mode[item];
        }
    });

    return round(max);
  }


// Flavanoids Functions
export function calculateFlavanoidsMean(data: WineAttribute[]) {
    return calculateMean(data.map((item) => item.Flavanoids));
}

export function calculateFlavanoidsMedian(data: WineAttribute[]) {
    return calculateMedian(data.map((item) => item.Flavanoids));
}

export function calculateFlavanoidsMode(data: WineAttribute[]) {
    return calculateMode(data.map((item) => item.Flavanoids));
}


// Gamma Functions
function calculateGamma(item: WineAttribute): number {
    return ((item.Ash * item.Hue) / item.Magnesium);
}

export function calculateGammaMean(data: WineAttribute[]) {
    return calculateMean(data.map((item) => calculateGamma(item)));
}

export function calculateGammaMedian(data: WineAttribute[]) {
    return calculateMedian(data.map((item) => calculateGamma(item)));
}

export function calculateGammaMode(data: WineAttribute[]) {
    return calculateMode(data.map((item) => calculateGamma(item)));
}
