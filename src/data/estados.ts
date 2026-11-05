// Claves de los 32 estados. Coinciden con los `id` de los trazos en mapa-mexico.svg.
export const ESTADOS = {
  AGS: 'Aguascalientes',
  BCN: 'Baja California',
  BCS: 'Baja California Sur',
  CAM: 'Campeche',
  CHP: 'Chiapas',
  CHI: 'Chihuahua',
  CMX: 'Ciudad de México',
  COA: 'Coahuila',
  COL: 'Colima',
  DUR: 'Durango',
  GTO: 'Guanajuato',
  GRO: 'Guerrero',
  HGO: 'Hidalgo',
  JAL: 'Jalisco',
  MEX: 'Estado de México',
  MIC: 'Michoacán',
  MOR: 'Morelos',
  NAY: 'Nayarit',
  NLE: 'Nuevo León',
  OAX: 'Oaxaca',
  PUE: 'Puebla',
  QRO: 'Querétaro',
  ROO: 'Quintana Roo',
  SLP: 'San Luis Potosí',
  SIN: 'Sinaloa',
  SON: 'Sonora',
  TAB: 'Tabasco',
  TAM: 'Tamaulipas',
  TLA: 'Tlaxcala',
  VER: 'Veracruz',
  YUC: 'Yucatán',
  ZAC: 'Zacatecas',
} as const;

export type ClaveEstado = keyof typeof ESTADOS;

export const CLAVES_ESTADO = Object.keys(ESTADOS) as [ClaveEstado, ...ClaveEstado[]];
