/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */


import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from '~/config/environment'
let trelloDatabaseInstance = null

// Khởi tạo 1 đối tượng mongoClientInstance để connect tới MongoDB
const mongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

// Kết nối tới database
export const CONNECT_DB = async () => {
  // Gọi kết nối tới MongoDB Atlats với URI đã khai báo trong thân của mongoClientInstance
  await mongoClientInstance.connect()

  // Kết nối thành công thì lấy ra Database và gán ngược nó lại vào biến trelloDatabaseInstance ở trên của chúng ta
  trelloDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME)
}

// Function GET_DB (ko async) này có nhiệm vụ export ra cái Trello Database Instance sau khi đã connect thành công 
// tới MongoDB để chúng ta sử dụng ở nhiều nơi khác nhau trong code

// LƯu ý phải đảm bảo chỉ luôn gọi cái GET_DB này sau khi đã kết nối thành công tới MongoDB
export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database first!!')
  return trelloDatabaseInstance
}

// Đóng kết nối tới Database khi cần
export const CLOSE_DB = async () => {
  await mongoClientInstance.close()
}