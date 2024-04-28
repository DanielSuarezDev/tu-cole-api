import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RankingService } from './ranking.service';
import { CreateRankingDto } from '@Common/contracts/ranking.dto';
import { Ranking } from '@entities';

@ApiTags('ranking')
@Controller('ranking')
export class RankingController {
  constructor(private service: RankingService) {}

  @Get('by-user')
  async getRankingByUser(): Promise<any> {
    return this.service.findAll();
  }

  @Get()
  async getRanking(): Promise<any> {
    return this.service.findAll();
  }

  @Post()
  async createOrUpdateRanking(
    @Body() data: CreateRankingDto,
  ): Promise<Ranking> {
    return this.service.createOrUpdateRanking(data);
  }
}
