import { DataTypes } from 'sequelize';
import { db3 } from '../../database/conexion';

const ProductoTallas = db3.define('ProductoTallas', {
  IdProductoTalla: { type: DataTypes.INTEGER, primaryKey: true },
  IdProducto: { type: DataTypes.INTEGER },
  IdTalla: { type: DataTypes.INTEGER },
  Cantidad: { type: DataTypes.INTEGER },
  FechaCreacion: { type: DataTypes.DATE },
  FechaModificacion: { type: DataTypes.DATE },
  CantidadVendida: { type: DataTypes.INTEGER }
}, {
  timestamps: false,
  tableName: 'ProductoTallas'
});

export default ProductoTallas;
