import { createSlice, createSelector } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: 'people',
    initialState: [],
    reducers: {
        peopleSliceAddAllPeople(state, action) {
            return action.payload
        },
        peopleSliceAddPeople(state, action) {
            state.push(action.payload)
        },
        peopleSliceRemovePeople(state, action) {
            state.splice(action.payload, 1);
        },
        peopleSliceUpdatePeople(state, action) {
            const updatedPerson = action.payload;
            const index = state.findIndex(person => person.id === updatedPerson.id);
            state[index] = updatedPerson;
        },
    }
})
export const selectPeopleById = (personId) =>
    createSelector(
        (state) => state.allPeople, // Accessing the allPeople slice from the Redux store
        (people) => people.find((singlePeople) => singlePeople.id === personId)
    );

export { peopleSlice }

export const { peopleSliceAddPeople, peopleSliceRemovePeople, peopleSliceUpdatePeople, peopleSliceAddAllPeople } = peopleSlice.actions