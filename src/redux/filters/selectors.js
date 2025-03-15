import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filters.name;

//селектори залишено у відповідному файлі за логікою саме конспекту замість ТЗ
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return (
      contacts.length > 0 &&
      contacts.filter((contact) => {
        return (
          contact.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
          contact.number.includes(nameFilter.toLowerCase())
        );
      })
    );
  }
);
