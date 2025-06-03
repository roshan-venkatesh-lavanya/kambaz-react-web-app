// src/Kambaz/Courses/reducer.ts
import { createSlice } from "@reduxjs/toolkit";
import * as db from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  courses: [...db.courses], // Create a mutable copy
  course: {
    _id: "",
    name: "",
    number: "",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    department: "",
    credits: 0,
    description: "",
    author: "",
    image: "/images/reactjs.jpg",
  },
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload }) => {
      const newCourse = {
        _id: payload._id || uuidv4(),
        name: payload.name,
        number: payload.number || "New Number",
        startDate: payload.startDate || "2023-09-10",
        endDate: payload.endDate || "2023-12-15",
        department: payload.department || "",
        credits: payload.credits ?? 0,
        description: payload.description,
        author: payload.author || "",
        image: payload.image || "/images/reactjs.jpg",
      };
      
      // Add to Redux state
      state.courses.push(newCourse);
      
      // Also add to database for persistence
      db.courses.push(newCourse);
      
      // Reset form
      state.course = {
        _id: "",
        name: "",
        number: "",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        department: "",
        credits: 0,
        description: "",
        author: "",
        image: "/images/reactjs.jpg",
      };
    },
    
    deleteCourse: (state, { payload }) => {
      // Remove from Redux state
      state.courses = state.courses.filter((c) => c._id !== payload);
      
      // Also remove from database
      const courseIndex = db.courses.findIndex((c: any) => c._id === payload);
      if (courseIndex > -1) {
        db.courses.splice(courseIndex, 1);
      }
    },
    
    updateCourse: (state, { payload }) => {
      // Update in Redux state
      state.courses = state.courses.map((c) =>
        c._id === payload._id ? payload : c
      );
      
      // Also update in database
      const courseIndex = db.courses.findIndex((c: any) => c._id === payload._id);
      if (courseIndex > -1) {
        db.courses[courseIndex] = payload;
      }
      
      // Reset form after update
      state.course = {
        _id: "",
        name: "",
        number: "",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        department: "",
        credits: 0,
        description: "",
        author: "",
        image: "/images/reactjs.jpg",
      };
    },
    
    setCourse: (state, { payload }) => {
      state.course = payload;
    },
    
    resetCourse: (state) => {
      state.course = {
        _id: "",
        name: "",
        number: "",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        department: "",
        credits: 0,
        description: "",
        author: "",
        image: "/images/reactjs.jpg",
      };
    },
    
    editCourse: (state, { payload }) => {
      state.courses = state.courses.map((c) =>
        c._id === payload ? { ...c, editing: true } : c
      );
    },
  },
});

export const {
  addCourse,
  deleteCourse,
  updateCourse,
  setCourse,
  resetCourse,
  editCourse,
} = coursesSlice.actions;

export default coursesSlice.reducer;