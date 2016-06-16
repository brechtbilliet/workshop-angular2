import {Action} from "@ngrx/store";
import {EditStockContainerState} from "../../state/ContainersState";
import {CONTAINER_EDITSTOCKPAGE_SET_WINE, CONTAINER_EDITSTOCKPAGE_CLEAR_WINE} from "../../actionTypes";
export function editStockReducer(state: EditStockContainerState = {wine: null}, action: Action = null): EditStockContainerState {
    switch (action.type) {
        case CONTAINER_EDITSTOCKPAGE_SET_WINE:
            return <EditStockContainerState> Object.assign({}, state, {
                wine: action.payload
            });
        case CONTAINER_EDITSTOCKPAGE_CLEAR_WINE:
            return <EditStockContainerState> Object.assign({}, state, {
                wine: null
            });
        default:
            return state;
    }
};