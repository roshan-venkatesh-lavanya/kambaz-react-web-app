import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: db.assignments,
  assignment: {
    _id: "",
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
    course: "",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload }) => {
      const newAssignment = {
        _id: uuidv4(),
        title: payload.title,
        course: payload.course,
        description: payload.description,
        points: payload.points,
        group: payload.group ?? "",
        displayGrade: payload.displayGrade ?? "",
        submissionType: payload.submissionType ?? "",
        assignTo: payload.assignTo ?? "",
        dueDate: payload.dueDate,
        availableFrom: payload.availableFromDate ?? "",
        availableUntil: payload.availableUntilDate ?? "",
      };
      state.assignments.push(newAssignment);
      state.assignment = initialState.assignment;
    },
    deleteAssignment: (state, { payload }) => {
      state.assignments = state.assignments.filter((a) => a._id !== payload);
    },
    updateAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === payload._id ? payload : a
      );
      state.assignment = initialState.assignment;
    },
    setAssignment: (state, { payload }) => {
      state.assignment = payload;
    },
    resetAssignment: (state) => {
      state.assignment = initialState.assignment;
    },
    editAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === payload ? { ...a, editing: true } : a
      );
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  resetAssignment,
  editAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
