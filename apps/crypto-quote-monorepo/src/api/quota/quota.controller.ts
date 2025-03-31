import { Quota } from '@monorepo/core-domain';
import { CreateQuotaUseCase, GetQuotaUseCase } from '@monorepo/core-use-cases';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../guards/jwt-auth.guard';
import { CreateQuoteDto } from './dtos/quota.dto';

@ApiTags('Quotations')
@ApiBearerAuth()
@Controller('quota')
export class QuotaController {
  constructor(private readonly createQuotaUseCase: CreateQuotaUseCase, private readonly getQuotaUseCase: GetQuotaUseCase) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a new cryptocurrency quote' })
  @ApiResponse({
    status: 201,
    description: 'Quote created successfully',
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: 'e4cdce04-921b-4dc2-94ab-e77bda6c37f7',
          description: 'Unique identifier of the created quote',
        },
        from: {
          type: 'string',
          example: 'BTC',
          description: 'Source cryptocurrency code',
        },
        to: {
          type: 'string',
          example: 'CLP',
          description: 'Target currency code',
        },
        amount: {
          type: 'string',
          example: '40000000',
          description: 'Quoted amount in target currency',
        },
        created_at: {
          type: 'string',
          example: '2024-03-30T23:59:59Z',
          description: 'Quote creation timestamp',
        },
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - Invalid input data',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or expired token',
  })
  public async create(@Body() createQuoteDto: CreateQuoteDto): Promise<Quota> {
    return await this.createQuotaUseCase.execute(createQuoteDto);
  }

  @Get('/:id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get quote by ID' })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'Unique identifier of the quote to retrieve',
    example: 'e4cdce04-921b-4dc2-94ab-e77bda6c37f7',
  })
  @ApiResponse({
    status: 200,
    description: 'Quote retrieved successfully',
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: 'e4cdce04-921b-4dc2-94ab-e77bda6c37f7',
          description: 'Unique identifier of the quote',
        },
        from: {
          type: 'string',
          example: 'BTC',
          description: 'Source cryptocurrency code',
        },
        to: {
          type: 'string',
          example: 'CLP',
          description: 'Target currency code',
        },
        amount: {
          type: 'string',
          example: '40000000',
          description: 'Quoted amount in target currency',
        },
        created_at: {
          type: 'string',
          example: '2024-03-30T23:59:59Z',
          description: 'Quote creation timestamp',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Invalid or expired token',
  })
  @ApiResponse({
    status: 404,
    description: 'Quote not found',
  })
  public async get(@Param('id') id: string): Promise<Quota> {
    return await this.getQuotaUseCase.execute(id);
  }
}
