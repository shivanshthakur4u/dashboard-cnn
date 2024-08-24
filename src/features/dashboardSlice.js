import { createSlice } from "@reduxjs/toolkit";

// initial states for category and search

const initialState = {
  categories: [
    {
      id: "cspm_executive_dashboard",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "cloud_accounts",
          name: "Cloud Accounts",
          selected: true,
          content: "No Graph data available!",
        },
        {
          id: "cloud_account_risk_assessment",
          name: "Cloud Account Risk Assessment",
          selected: true,
          content: "No Graph data available!",
        },
      ],
    },
    {
      id: "cwpp_dashboard",
      name: "CWPP Dashboard",

      widgets: [
        {
          id: "top_5_namespace_specific_alerts",
          name: "Top 5 Namespace Specific Alerts",
          selected: true,
          content: "No Graph data available!",
        },
        {
          id: "workload_alerts",
          name: "Workload Alerts",
          selected: true,
          content: "No Graph data available!",
        },
      ],
    },
  ],
  searchTerm: "",
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload;
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) {
        category.widgets.push({ ...widget, selected: true });
      }
    },
    toggleWidgetVisibility: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) {
        const widget = category.widgets.find((w) => w.id === widgetId);
        if (widget) {
          widget.selected = !widget.selected;
        }
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter((w) => w.id !== widgetId);
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addWidget, removeWidget, setSearchTerm, toggleWidgetVisibility } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
