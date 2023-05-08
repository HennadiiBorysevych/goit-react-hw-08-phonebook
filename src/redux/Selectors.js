export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.filter;
const getToken = state => state.auth.token;
const getIsAuthenticated = state => state.auth.isAuthenticated;