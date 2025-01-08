import Joi from '@hapi/joi';

export const newAddressValidator = (req, res, next) => {
  const schema = Joi.object({
    addressType: Joi.string().required(),
    details: Joi.string().required(),
    UserId: Joi.number()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        code: HttpStatus.UNPROCESSABLE_ENTITY,
        message: `${error}`
      });
  } else {
    next();
  }
};