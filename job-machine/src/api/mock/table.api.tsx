import { Priority } from "@/constants/enums/priorities";


export interface Tag {
  value: string;
  priority: Priority;
}

export interface BasicTableRow {
  key: number;
  name: string | JSX.Element;
  age: number;
  address: string;
  tags?: Tag[];
}

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export interface BasicTableData {
  data: BasicTableRow[];
  pagination: Pagination;
}

export interface TreeTableRow extends BasicTableRow {
  children?: TreeTableRow[];
}

export interface TreeTableData extends BasicTableData {
  data: TreeTableRow[];
}

export interface EditableTableData extends BasicTableData {
  data: BasicTableRow[];
}

export const getBasicTableData = (pagination: Pagination): Promise<BasicTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: [
              { value: 'Architect', priority: Priority.LOW },
              { value: 'Engineer', priority: Priority.MEDIUM },
            ],
          },
          {
            key: 2,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: [{ value: 'Doctor', priority: Priority.HIGH }],
          },
          {
            key: 3,
            name: 'Joe Black',
            age: 32,
            address: 'Dancer',
            tags: [
              { value: 'Professor', priority: Priority.INFO },
              { value: 'Architect', priority: Priority.LOW },
            ],
          },
          {
            key: 4,
            name: 'Pavel Green',
            age: 30,
            address: 'New York No. 1 Lake Park',
            tags: [
              { value: 'Engineer', priority: Priority.MEDIUM },
              { value: 'Architect', priority: Priority.LOW },
            ],
          },
          {
            key: 5,
            name: 'Alex Brown',
            age: 26,
            address: 'Minsk',
            tags: [{ value: 'Engineer', priority: Priority.MEDIUM }],
          },
          {
            key: 6,
            name: 'Josh Black',
            age: 21,
            address: 'New York No. 1 Lake Park',
            tags: [
              { value: 'Teacher', priority: Priority.INFO },
              { value: 'Architect', priority: Priority.LOW },
            ],
          },
          {
            key: 7,
            name: 'Cris Green',
            age: 22,
            address: 'Dancer',
            tags: [{ value: 'Architect', priority: Priority.LOW }],
          },
          {
            key: 8,
            name: 'Jaime Black',
            age: 23,
            address: 'New York No. 1 Lake Park',
            tags: [{ value: 'Engineer', priority: Priority.MEDIUM }],
          },
          {
            key: 9,
            name: 'Alina Brown',
            age: 19,
            address: 'Minsk',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 10,
            name: 'Cris Brown',
            age: 25,
            address: 'London',
            tags: [
              { value: 'Engineer', priority: Priority.MEDIUM },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 11,
            name: 'Alina Fens',
            age: 19,
            address: 'Minsk',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 12,
            name: 'Alex Snak',
            age: 28,
            address: 'Brest',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Doctor', priority: Priority.HIGH },
            ],
          },
          {
            key: 13,
            name: 'Pavel Dubrouski',
            age: 26,
            address: 'Minsk',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Doctor', priority: Priority.HIGH },
              { value: 'Teacher', priority: Priority.INFO },
              { value: 'Engineer', priority: Priority.MEDIUM },
            ],
          },
          {
            key: 14,
            name: 'Jack Donald',
            age: 24,
            address: 'New York',
            tags: [{ value: 'Professor', priority: Priority.LOW }],
          },
          {
            key: 15,
            name: 'Nik Nest',
            age: 34,
            address: 'London',
            tags: [
              { value: 'Doctor', priority: Priority.HIGH },
              { value: 'Engineer', priority: Priority.MEDIUM },
            ],
          },
          {
            key: 16,
            name: 'Zak Nikls',
            age: 32,
            address: 'Minsk',
            tags: [
              { value: 'Doctor', priority: Priority.HIGH },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 17,
            name: 'Petr Dan',
            age: 29,
            address: 'Gomel',
            tags: [
              { value: 'Engineer', priority: Priority.MEDIUM },
              { value: 'Teacher', priority: Priority.INFO },
            ],
          },
          {
            key: 18,
            name: 'Alexa Pirs',
            age: 19,
            address: 'Moscow',
            tags: [
              { value: 'Professor', priority: Priority.LOW },
              { value: 'Doctor', priority: Priority.HIGH },
            ],
          },
          {
            key: 19,
            name: 'Mark Brown',
            age: 25,
            address: 'London',
            tags: [
              { value: 'Teacher', priority: Priority.INFO },
              { value: 'Doctor', priority: Priority.HIGH },
            ],
          },
          {
            key: 20,
            name: 'Alex Brons',
            age: 45,
            address: 'Bronx',
            tags: [{ value: 'Professor', priority: Priority.LOW }],
          },
        ],
        pagination: { ...pagination, total: 20 },
      });
    }, 1000);
  });
};

export const getTreeTableData = (pagination: Pagination): Promise<TreeTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            age: 60,
            address: 'Vloger',
          },
          {
            key: 200,
            name: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            age: 32,
            address: 'Dancer',
  
          },
          {
            key: 300,
            name: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            age: 22,
            address: 'Dancer',
            
          },
          {
            key: 400,
            name: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            age: 26,
            address: 'Designer',
            
          },
          {
            key: 500,
            name: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            age: 45,
            address: 'Designer',
            
          },
          {
            key: 600,
            name: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            age: 45,
            address: 'Designer',
           
          },
          {
            key: 700,
            name: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            age: 26,
            address: 'Designer',
            
          },
          {
            key: 800,
            name: <img src="https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=600" alt="User" style={{ maxWidth: "100%", height: "auto" }}/>,
            age: 26,
            address: 'Designer',
            
          },
        ],
        pagination: { ...pagination, total: 8 },
      });
    }, 1000);
  });
};

export const getEditableTableData = (pagination: Pagination): Promise<EditableTableData> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        data: [
          {
            key: 1,
            name: `Edward`,
            age: 32,
            address: `London Park no.1`,
          },
          {
            key: 2,
            name: `Alex`,
            age: 45,
            address: `London Park no.2`,
          },
          {
            key: 3,
            name: `Niko`,
            age: 21,
            address: `London Park no.3`,
          },
          {
            key: 4,
            name: `Josh`,
            age: 18,
            address: `London Park no.4`,
          },
          {
            key: 5,
            name: `Jo`,
            age: 15,
            address: `Minsk Park no.1`,
          },
          {
            key: 6,
            name: `Jaimi`,
            age: 18,
            address: `London Park no.2`,
          },
          {
            key: 7,
            name: `Alexa`,
            age: 24,
            address: `London Park no.6`,
          },
          {
            key: 8,
            name: `Donald`,
            age: 27,
            address: `London Park no.7`,
          },
          {
            key: 9,
            name: `Pavel`,
            age: 17,
            address: `London Park no.9`,
          },
          {
            key: 10,
            name: `Nick`,
            age: 18,
            address: `London Park no.1`,
          },
          {
            key: 11,
            name: `Dasha`,
            age: 25,
            address: `London Park no.2`,
          },
          {
            key: 12,
            name: `Alex`,
            age: 27,
            address: `London Park no.3`,
          },
          {
            key: 13,
            name: `Vic`,
            age: 29,
            address: `London Park no.2`,
          },
          {
            key: 14,
            name: `Natalia`,
            age: 25,
            address: `London Park no.4`,
          },
          {
            key: 15,
            name: `Zack`,
            age: 27,
            address: `London Park no.1`,
          },
          {
            key: 16,
            name: `Jack`,
            age: 31,
            address: `London Park no.4`,
          },
        ],
        pagination: { ...pagination, total: 16 },
      });
    }, 1000);
  });
};
