import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class AppService {
  private pacientes = [];

  get(id: string): any {
    return this.pacientes.find((paciente) => paciente.id === id);
  }

  getAll(): any[] {
    return this.pacientes;
  }

  insert(paciente: CreatePacienteDto) {
    this.pacientes.push(paciente);

    return paciente;
  }

  update(id: string, paciente: UpdatePacienteDto) {
    const pacienteIndex = this.pacientes.findIndex((p) => p.id === paciente.id);

    if (pacienteIndex >= 0) {
      this.pacientes[pacienteIndex] = paciente;
    }

    return paciente;
  }
}
