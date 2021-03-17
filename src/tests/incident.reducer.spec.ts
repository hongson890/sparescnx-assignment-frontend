import { incidentReducer, initialState } from "../contexts/incident/incident.reducers";
import { CREATE_INCIDENT_SUCCESS, SEARCH_INCIDENT_SUCCESS } from "../contexts/incident/incident.constants";
import incidentData from "./mocks/incident-data.json"

describe('incidentReducer', () => {
    it('handles SEARCH_INCIDENT_SUCCESS action', () => {
        // @ts-ignore
        const {rows} = incidentData
        const expectedState = {
            ...initialState,
            incidentList: rows,
            isLoading: false,
            message: null,
            isError: false,
            // ts-ignore
            totalRow: rows.length
        };

        const actualState = incidentReducer(initialState, {
                type: SEARCH_INCIDENT_SUCCESS,
                incidentList: rows,
                isLoading: false,
                isError: false,
                totalRow: rows.length
            }
        )

        expect(expectedState).toEqual(actualState);
    });

    it('handles CREATE_INCIDENT_SUCCESS action', () => {
        const expectedState = {
            ...initialState,
            isLoading: false,
            isError: false,
        };
        const actualState = incidentReducer(initialState, {
                type: CREATE_INCIDENT_SUCCESS,
            }
        )

        expect(expectedState).toEqual(actualState);
    });
});
