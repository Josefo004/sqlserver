
export interface AdmisionPersona {
  IdPersona:               string;
  IdLugarEmision:          number;
  Paterno:                 string;
  Materno:                 string;
  Nombres:                 string;
  FechaNacimiento:         Date;
  Sexo:                    string;
  EstadoCivil:             string;
  Direccion:               string;
  Celular:                 string;
  Telefono:                string;
  Email:                   string;
  IdLugarNacimiento:       number;
  CodigoRueColegio:        string;
  AnnioEgresoColegio:      string;
  NombreCompletoApoderado: string;
  CelularApoderado:        string;
  DireccionApoderado:      string;
  Password:                string;
  Verificado:              boolean;
  CodigoNacionalidad:      string;
  FechaHoraRegistro:       Date;
}

export interface Admision {
  totalFilas: number | any;
  personas: AdmisionPersona[] | any[];
}

export interface ComercioPersona {
  CodigoUsuario:          string;
  Login:                  string;
  IdPersona:              string;
  NombreCompleto:         string;
  Email:                  string;
  AuthKey:                string;
  PasswordHash:           string;
  PasswordResetToken:     null;
  Estado:                 string;
  EsAdmin:                null;
  FechaHoraRegistro:      Date;
  FechaHoraActualizacion: Date;
  VerificationToken:      string;
}

export interface Comercio {
  totalFilas: number | any;
  personas: AdmisionPersona[] | any[];
}

export interface DdjjPersona {
  id_persona:          string;
  apellido_paterno:    string;
  apellido_materno:    string;
  nombres:             string;
  lugar_emision:       string;
  fecha_nacimiento:    Date;
  codigo_nacionalidad: string;
  id_lugar:            number;
  estado_civil:        string;
  sexo:                string;
  direccion:           string;
  telefono:            number;
  celular:             number;
  email:               string;
  discapacidad:        string;
}

export interface Ddjj {
  totalFilas: number | any;
  personas: AdmisionPersona[] | any[];
}
