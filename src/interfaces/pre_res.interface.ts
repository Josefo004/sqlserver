
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


export interface ComisionElement {
  IdComision:        number;
  FechaHoraRegistro: Date;
  CostoComision:     number;
}

export interface Comision {
  comision: ComisionElement[] | any[];
}

export interface tOrden {
  IdOrden:                    number;
  CodigoEstado:               string;
  TotalOrden:                 number;
  CodigoUsuarioCreacion:      string;
  FechaCreacion:              Date;
  CodigoUsuarioActualizacion: null;
  FechaActualizacion:         null;
  Observacion:                null;
  Email:                      string;
  Celular:                    string;
  NombreCompleto:             string;
  CostoComision:              number;
  CodigoPago:                 string;
}

export interface tDetalleOrden {
    IdOrden:         number;
    IdProductoTalla: number;
    Cantidad: number;
}

// Define las propiedades del modelo
export interface ProductoTallasAttributes {
  IdProductoTalla: number;
  IdProducto: number;
  IdTalla: number;
  Cantidad: number;
  FechaCreacion: Date;
  FechaModificacion: Date;
  CantidadVendida: number;
}

export interface Tdeposito {
  NroDocumento: string | any;
  gestion: number;
  FechaDepositoBancario: Date | any;
  TipoCuenta: number;
  Monto: number | any;
  CodigoEstado: string;
  CodigoUsuario: string;
  FechaHoraRegistro: Date | any;
  CodigoTipoTransaccion: string;
  Observaciones: string;
  CodigoPago: string | any;
  CostoComision: number;
}
