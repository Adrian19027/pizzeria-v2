
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
  return (dispatch) => {
    const tableToUpdate = {
      id: updatedTable.id,
      status: updatedTable.status || "Free",
      peopleAmount: updatedTable.peopleAmount || 0,
      maxPeopleAmount: updatedTable.maxPeopleAmount || 0,
      bill: updatedTable.bill || 0,
    };

    fetch(`http://localhost:3131/api/tables/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tableToUpdate),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to update table');
      }
        return res.json()
      })
      .then((updatedTable) => {
        dispatch(updateTable(updatedTable));
      })
      .catch((error) => {
        console.error('Error updating table:', error);
      });
      
  }  
}

export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)));
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