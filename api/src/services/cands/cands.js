import { db } from 'src/lib/db'

export const cands = () => {
  return db.cand.findMany()
}

export const cand = ({ id }) => {
  return db.cand.findOne({
    where: { id },
  })
}

export const createCand = ({ input }) => {
  return db.cand.create({
    data: input,
  })
}

export const updateCand = ({ id, input }) => {
  return db.cand.update({
    data: input,
    where: { id },
  })
}

export const deleteCand = ({ id }) => {
  return db.cand.delete({
    where: { id },
  })
}
