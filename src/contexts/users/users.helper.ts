// eslint-disable-next-line import/no-extraneous-dependencies
import { cloneDeep } from 'lodash'

export function sortUserList(
  users: any[],
  orderBy: string,
  orderDirection: string,
) {
  const usersClone = cloneDeep(users)
  if (!orderBy || !orderDirection) {
    return usersClone
  }
  return orderDirection === 'asc'
    ? usersClone.sort(dynamicSortComparator(orderBy, false))
    : usersClone.sort(dynamicSortComparator(orderBy, true))
}

function dynamicSortComparator(property: string, isDesc?: boolean) {
  const sortOrder = isDesc ? -1 : 1
  return (a: any, b: any) => {
    if (property === 'fullName') {
      // eslint-disable-next-line no-nested-ternary
      let result = 0
      if (getFullName(a) < getFullName(b)) {
        result = -1
      }
      if (getFullName(a) > getFullName(b)) {
        result = 1
      }
      return result * sortOrder
    }

    if (property === 'username') {
      let result = 0
      if (a.login.username < b.login.username) {
        result = -1
      }
      if (a.login.username > b.login.username) {
        result = 1
      }
      return result * sortOrder
    }

    return 1
  }
}

export function getFullName(user: any): string {
  return `${user.name.title} ${user.name.first} ${user.name.last}`
}
