import { WineAttribute } from "./types";

// Fetching data from json file
export async function fetchWineData() {
  let res = await fetch("./data/Wine-Data.json");
  let jsonData = await res.json();
  return jsonData.map((item: any) => {
    return {
        Alcohol: parseInt(item.Alcohol),
        Ash: parseFloat(item.Ash),
        Magnesium: parseFloat(item.Magnesium),
        Flavanoids: parseFloat(item.Flavanoids),
        Hue: parseFloat(item.Hue),
    }
  }) as WineAttribute[];
}

