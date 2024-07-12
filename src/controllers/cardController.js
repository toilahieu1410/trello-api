/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { StatusCodes } from 'http-status-codes'
import { cardService } from '~/services/cardService'

const createNew = async (req, res, next) => {
  try {

    //Điều hướng dữ liệu sang tầng Service
    const createdCard = await cardService.createNew(req.body)

    // Có kết quả thì trả về phía Client
    res.status(StatusCodes.CREATED).json(createdCard)
  } catch (error) {
    next(error)
    // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //   errors: error.message
    // })
  }
}

export const cardController = {
  createNew,
}