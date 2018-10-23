var singleTable = ['category']
module.exports = app => {
  const { router, controller } = app
  
  // 单表的CRUD
  singleTable.forEach(tableName => {
    addCRUD(tableName, router, controller.common.index)
  })
  
  // 多表的CRUD
  router.get(`/api/item/list`, controller.item.item.list)
  router.get(`/api/item/detail/:id`, controller.item.item.detail)
  router.get(`/api/item/add`, controller.common.index.add)

  
}

function addCRUD(tableName, router, commonController) {
  router.get(`/api/${tableName}/detail/:id`, commonController.detail)
  router.get(`/api/${tableName}/list`, commonController.list)
  router.post(`/api/${tableName}/add`, commonController.add)
  router.post(`/api/${tableName}/edit`, commonController.edit)
  router.post(`/api/${tableName}/del/:id`, commonController.del)
}