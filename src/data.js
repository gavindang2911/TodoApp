const List = {
  list: [
    {
      id: 1,
      title: 'todo1',
      description: 'body1',
      completed: true,
      dueDate: 'Nov 1st',
    },
    {
      id: 2,
      title: 'todo2',
      description: 'body2',
      completed: false,
      dueDate: 'Nov 2st',
    },
    {
      id: 3,
      title: 'todo3',
      description: 'body3',
      completed: false,
      // status: {
      //   todo: true,
      //   inProgress: false,
      //   completed: false,
      // },
      dueDate: 'Nov 3st',
    },
  ],
  getList: function () {
    return (
      (localStorage.getItem('theList') &&
        JSON.parse(localStorage.getItem('theList'))) ||
      this.list
    );
  },
  saveList: (list) => {
    localStorage.setItem('theList', JSON.stringify(list));
  },
};

export default List;
