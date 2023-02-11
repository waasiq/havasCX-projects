export default {
  routes: [
    {
     method: 'GET',
     path: '/data',
     handler: 'data.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
