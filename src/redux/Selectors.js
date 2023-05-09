export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.filter;
export const getToken = state => state.auth.token;
export const isLogged = state => state.auth.isLoggedIn;
