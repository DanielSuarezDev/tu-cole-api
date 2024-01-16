import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/firebase.guard';
import { CreateParentDto } from '@contracts';

@Controller('parent')
export class ParentController {
  constructor(private serviceParent: ParentService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Req() request, @Body() data: CreateParentDto): Promise<any> {
    const parentId = request.user.user_id;

    console.log('request', request);

    return this.serviceParent.parentStudentToParent(parentId, data.studentCode);
  }
}
