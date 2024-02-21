
export interface TResultado {
  total_filas: number;
  predios:     TPredio[];
}

export interface TPredio {
  OBJECTID:                     number;
  referencia_catastral:         string;
  referencia_catastral_antigua: string;
  last_edited_date:             Date;
  geometria:                    string;
  centroide:                    string;
}

export interface TRPredio {
  OBJECTID:                     number;
  referencia_catastral:         string;
  referencia_catastral_antigua: null | string;
  last_edited_date:             Date;
  tipo_forma:                   string;
  coordenadas_geograficas:      Array<Array<number[] | number>>;
  centroide:                    Array<Array<number[] | number>>;        
}

export interface UnPredio {
  predio: CCPredio;
}

export interface CCPredio {
  objectid:                     number;
  referencia_catastral:         string;
  referencia_catastral_antigua: string;
  created_user:                 string;
  created_date:                 Date;
  last_edited_user:             string;
  last_edited_date:             Date;
  tep_id:                       number;
  cep_id:                       number;
  tuc_id:                       number;
  geometria:                    string;
  centroide:                    string;
}

export interface TTPredio {
  objectid:                     number;
  referencia_catastral:         string;
  referencia_catastral_antigua: string;
  created_user:                 string;
  created_date:                 Date;
  last_edited_user:             string;
  last_edited_date:             Date;
  tep_id:                       number;
  cep_id:                       number;
  tuc_id:                       number;
  tipo_forma:                   string;
  coordenadas_geograficas:      Array<Array<number[] | number>>;
  centroide:                    Array<Array<number[] | number>>; 
}
