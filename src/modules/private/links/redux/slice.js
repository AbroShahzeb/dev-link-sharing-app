import { createSlice } from "@reduxjs/toolkit";

const linksSlice = createSlice({
  name: "links",
  initialState: [],
  reducers: {
    addLink: (state, action) => {
      state.push(action.payload);
    },
    updateLink: (state, action) => {
      const { id, newLink } = action.payload;
      const index = state.findIndex((link) => link.id === id);
      if (index !== -1) {
        state[index] = newLink;
      }
    },
    updateLinkPlatform: (state, action) => {
      const { linkId, newPlatform, label } = action.payload;
      const link = state.find((link) => link.id === linkId);
      if (link) {
        link.platform = newPlatform; // Update the platform
        link.label = label; // Optionally update the label
      }
    },
    updateLinkText: (state, action) => {
      const { linkId, linkText } = action.payload;
      const link = state.find((link) => link.id === linkId);
      if (link) {
        link.link = linkText; // Update the `link` property (URL)
      }
    },
    removeLink: (state, action) => {
      return state.filter((link) => link.id !== action.payload);
    },
    reorderLinks: (state, action) => {
      const { dragId, dropId } = action.payload;
      const dragIndex = state.findIndex((link) => link.id === dragId);
      const dropIndex = state.findIndex((link) => link.id === dropId);

      if (dragIndex === -1 || dropIndex === -1) return; // Invalid indices

      const [draggedItem] = state.splice(dragIndex, 1); // Remove the dragged item
      state.splice(dropIndex, 0, draggedItem); // Insert it at the drop position
    },
    updateLinks: (state, action) => {
      return action.payload;
    },
  },
});

export const {
  addLink,
  updateLink,
  removeLink,
  updateLinks,
  reorderLinks,
  updateLinkText,
  updateLinkPlatform,
} = linksSlice.actions;

export default linksSlice.reducer;
