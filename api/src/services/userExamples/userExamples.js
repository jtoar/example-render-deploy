import { db } from 'src/lib/db'

export const userExamples = () => {
  return db.userExample.findMany()
}

export const userExample = ({ id }) => {
  return db.userExample.findUnique({
    where: { id },
  })
}

export const createUserExample = ({ input }) => {
  return db.userExample.create({
    data: input,
  })
}

export const updateUserExample = ({ id, input }) => {
  return db.userExample.update({
    data: input,
    where: { id },
  })
}

export const deleteUserExample = ({ id }) => {
  return db.userExample.delete({
    where: { id },
  })
}
