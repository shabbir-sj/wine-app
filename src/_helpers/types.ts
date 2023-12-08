export interface WineAttribute {
  Alcohol: number;
  Ash: number;
  Magnesium: number;
  Flavanoids: number;
  Hue: number;
}

export interface GroupWineAttribute {
    name: number;
    data: WineAttribute[]
}
