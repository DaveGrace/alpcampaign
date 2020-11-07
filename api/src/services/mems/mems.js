import { db } from 'src/lib/db'

export const mems = () => {
  return db.mem.findMany()
}

export const mem = ({ id }) => {
  return db.mem.findOne({
    where: { id },
  })
}

export const createMem = ({ input }) => {
  return db.mem.create({
    data: input,
  })
}

export const updateMem = ({ id, input }) => {
  return db.mem.update({
    data: input,
    where: { id },
  })
}

export const deleteMem = ({ id }) => {
  return db.mem.delete({
    where: { id },
  })
}
