import Joi from '@hapi/joi';

export const newGroupValidator = (req, res, next) => {
  const schema = Joi.object({
    groupName: Joi.string().required()
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
