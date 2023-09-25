
export interface tbodyItem {
  tb_name: string | any;
  colSpan: number;
  rowSpan: number;
  rowIndex: number;
}


export interface ITBody {
  bodyItem: any[];
}

export interface theadItem {
  th_name: string | any;
  colSpan: number;
  rowSpan: number;
  rowIndex: number;
}

export interface IThead {
  headers: {
      rows: number;
      theads: theadItem[];
  };
}

export interface ITableProps {
    headers: {
      rows: number;
      theads: theadItem[];
    },
    tbody: any;
    tfoot: any;
}
export interface tfootItem {
  tb_name: string;
  colSpan: number;
  rowSpan: number;
  rowIndex: number;
}


export interface ITFoot {
  footItem: any[];
}
