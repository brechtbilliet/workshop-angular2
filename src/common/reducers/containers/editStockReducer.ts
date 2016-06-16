import {Action} from "@ngrx/store";
import {EditStockContainerState} from "../../state/ContainersState";
export function editStockReducer(state: EditStockContainerState = {wine: null}, action: Action = null): EditStockContainerState {
    switch (action.type) {
        default:
            return state;
    }
};