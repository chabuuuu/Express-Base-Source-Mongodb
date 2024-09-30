import { ErrorCode } from '@/enums/error-code.enums';
import shoppingCartRouter from '@/routes/shopping_cart.route';
import studentRouter from '@/routes/student.route';
import BaseError from '@/utils/error/base.error';

export function route(app: any) {
  app.use('/student', studentRouter);
  app.use('/cart', shoppingCartRouter);

  app.all('*', (req: any, res: any, next: any) => {
    const err = new BaseError(ErrorCode.API_NOT_EXISTS, 'API Not Exists');
    next(err);
  });
}
