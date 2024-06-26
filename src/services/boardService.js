/* eslint-disable no-useless-catch */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { slugify } from '~/utils/formatter'

const createNew = async (reqBody) => {

  try {
    // Xử lý logic dữ liệu tuỳ đặc thù dự án
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    // Trả kết quả về, trong service luôn phải có return, nếu ko thì request chết
    return newBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew,
}
