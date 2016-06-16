import {Action} from "@ngrx/store";
import {CollapsableSidebarContainerState} from "../../state/ContainersState";
export function collapsableSidebarReducer(state: CollapsableSidebarContainerState = {isCollapsed: false},
                                          action: Action = null): CollapsableSidebarContainerState {
    switch (action.type) {
        default:
            return state;
    }
};