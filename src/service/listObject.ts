import {ListType} from '../types'

const LIST_NAME = 'list'

class ListObject {
  objList: ListType[]

  constructor(list: ListType[]) {
    this.objList = list
  }

  setList() {
    localStorage.setItem(LIST_NAME, JSON.stringify(this.objList))
  }

  async getList() {
    const list = await localStorage.getItem(LIST_NAME)

    if (list && list.length > 0) {
      return await JSON.parse(list)
    } else {
      return []
    }
  }

  clearList() {
    localStorage.removeItem(LIST_NAME)
  }
}

export const ListObjectService = new ListObject([])