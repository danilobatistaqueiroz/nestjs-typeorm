import { Entity, Column } from 'typeorm';

@Entity({ name: 'usuarios' })
export class UsuarioEntity {
  id: string;
  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;
  
  email: string;
  senha: string;
}
