
//selectors
export const getAllTables = state => state.tables;
export const getTableById = (state, id) => state.tables.find(table => table.id === id);
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const updateTable = payload => ({ type: UPDATE_TABLE, payload });

export const updateTableOnServer = (id, updatedTable) => {
  return async (dispatch) => {
    const tableToUpdate = {
      id: updatedTable.id,
      status: updatedTable.status,
      peopleAmount: updatedTable.peopleAmount,
      maxPeopleAmount: updatedTable.maxPeopleAmount,
      bill: updatedTable.bill
    };

    try {
      const res = await fetch(`http://localhost:3131/api/tables/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tableToUpdate),
      });
      if (!res.ok) {
        throw new Error('Failed to update table');
      }
      const updatedTable = await res.json();
      dispatch(updateTable(updatedTable));
    } catch (error) {
      console.error('Error updating table:', error);
    }
      
  }  
}

export const fetchTables = () => {
  return async (dispatch) => {
    const res = await fetch('http://localhost:3131/api/tables');
    const tables = await res.json();
    return dispatch(updateTables(tables));
  };
};
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload];
    case UPDATE_TABLE:
      return statePart.map(table => table.id === action.payload.id ? { ...table, ...action.payload } : table);
    default:
      return statePart;
  };
};
export default tablesReducer;