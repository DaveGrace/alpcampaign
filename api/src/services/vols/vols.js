import { db } from 'src/lib/db'

export const vols = () => {
  return db.vol.findMany()
}

export const createVol =({input}) => {
  return db.vol.create({data: input})
}
