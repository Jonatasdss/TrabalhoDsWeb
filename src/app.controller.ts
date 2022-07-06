import {
  Get,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Controller('pacientes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll() {
    return this.appService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const paciente = this.appService.get(id);

    return paciente;
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.appService.insert(createPacienteDto);
  }

  @Put()
  @UsePipes(new ValidationPipe({ transform: true }))
  update(
    @Param('id') id: string,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ) {
    this.appService.update(id, updatePacienteDto);
  }
}
