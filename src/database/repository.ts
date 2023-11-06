import {
  Document,
  Model,
  UpdateQuery,
  _FilterQuery,
  QueryOptions,
  UpdateWithAggregationPipeline,
} from 'mongoose';
import { v4 as uuid } from 'uuid';

export class Repository<T extends Document> {
  constructor(private model: Model<T>) {}

  findOne(f?: _FilterQuery<T>): Promise<T> {
    return this.model.findOne(f as _FilterQuery<T>).exec();
  }

  findAll(f?: _FilterQuery<T>, opts?: QueryOptions): Promise<T[]> {
    return this.model.find(f as _FilterQuery<T>, null, opts).exec();
  }

  findById(id: string): Promise<T> {
    return this.model.findOne({ id }).exec();
  }

  create(d: Partial<T>): Promise<T> {
    const created = new this.model({
      id: d.id ?? uuid(),
      ...d,
    });
    return created.save();
  }

  async delete(id: string): Promise<void> {
    await this.model
      .findOneAndRemove({
        id,
      })
      .exec();
  }

  async update(
    id: string,
    data: UpdateWithAggregationPipeline | UpdateQuery<T> | Partial<T>,
  ): Promise<T> {
    await this.model
      .updateOne(
        {
          id,
        },
        data,
      )
      .exec();
    return this.findById(id);
  }
}
