// // 定義
export const MenuEnum = {
    Plan: {
      id: '001',
      name: 'スプリントプランニング',
      viewName: 'Plan',
      viewNameLowercase: 'plan',
      path: '/plan'
    }, 
    Board: {
      id: '002',
      name: 'タスクボード',
      viewName: 'Board',
      viewNameLowercase: 'board',
      path: '/board'
    },
    Assessment: {
      id: '003',
      name: 'スプリントプロスペクティブ',
      viewName: 'Assessment',
      viewNameLowercase: 'assessment',
      path: '/assessment'
    }, 
    Maintenance: {
      id: '004',
      name: 'マスタメンテ',
      viewName: 'Maintenance',
      viewNameLowercase: 'maintenance',
      path: '/maintenance'
    },

    getAllItem: function() {
        return [this.Plan, this.Board, this.Assessment, this.Maintenance];
    }
  };