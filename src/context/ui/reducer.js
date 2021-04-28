import * as actionTypes from "./types";

export const initialState = {
  count: 0,
  isModalOpen: false,
  isPanelCollapsed: false,
  isBoxCollapsed: false,
};

export function contextReducer(state, action) {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    case actionTypes.OPEN_PANEL:
      return {
        ...state,
        isPanelCollapsed: false,
      };
    case actionTypes.CLOSE_PANEL:
      return {
        ...state,
        isPanelCollapsed: true,
      };
    case actionTypes.COLLAPSE_PANEL:
      return {
        ...state,
        isPanelCollapsed: !state.isPanelCollapsed,
      };
    case actionTypes.OPEN_BOX:
      return {
        ...state,
        isBoxCollapsed: true,
      };
    case actionTypes.CLOSE_BOX:
      return {
        ...state,
        isBoxCollapsed: false,
      };
    case actionTypes.COLLAPSE_BOX:
      return {
        ...state,
        isBoxCollapsed: !state.isBoxCollapsed,
      };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}