/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { StatusCodes } from "http-status-codes";
import ApiError from "~/utils/ApiError";

const createNew = async (req, res, next) => {
  try {
    //Điều hướng dữ liệu sang tầng Service
    throw new ApiError('minhhieu test error')
    // Có kết quả thì trả về phía Client
    //res.status(StatusCodes.CREATED).json({message: `POST from Validation: API create new board`})
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: error.message
    })
  }
}

export const boardController = {
  createNew
}