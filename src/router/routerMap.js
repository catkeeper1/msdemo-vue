export default [
  {
    name: 'userAccount',
    path: '/User',
    needAccessRights: ['admin']
  }
  ,
  {
    name: 'test1',
    path: 'test1',
    children: [{
      name: 'test3',
      path: '/test3'      
    }]
  },
  {
    name: 'test2',
    path: '/test2',
    // children: [{}]
  }
]