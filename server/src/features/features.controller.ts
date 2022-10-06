import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FeaturesService } from './features.service';
import { CreateFeatureDto } from './dto/create-feature.dto';

@Controller('Features')
export class FeaturesController {
  constructor(private readonly FeaturesService: FeaturesService) {}

  @Post()
  create(@Body() createFeatureDto: CreateFeatureDto) {
    return this.FeaturesService.create(createFeatureDto);
  }

  @Get()
  findAll() {
    return this.FeaturesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.FeaturesService.findOne(+id);
  }
}
