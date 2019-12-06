import * as types from "./LeadTypes";

const INIT_STATE = {
  leadList: {
    nowShowing: "All Leads",
    options: ["All Leads", "Open Leads", "Hot Leads", "Cold Leads"],
    action: false,
    loading: false,
    tableData: []
  },
  leadSummary: {
    summary: [],
    loading: false
  },
  leadToView: {
    loading: false,
    lead: null,
    sectionLoading: false
  },
  leadForm: {
    loading: false,
    fields: {
      leadSource: [],
      leadStatus: [],
      industry: [],
      leadInterest: [],
      users: []
    }
  },
  leadToConvert: {
    modal: {
      count: 0,
      data: [],
      loading: false,
      show: false
    },
    successMsg: {
      show: false,
      newDeal: null,
      newCust: {},
      newAcct: {}
    }
  }
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.GET_ALL_LEAD:
    case types.GET_MY_LEAD:
    case types.GET_OPEN_LEAD:
    case types.GET_HOT_LEAD:
    case types.GET_COLD_LEAD:
      return {
        ...state,
        leadList: { ...state.leadList, loading: true }
      };
    case types.GET_LEAD_SUCCESS:
      // sort by createdAt
      var defaultSort = action.payload.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      return {
        ...state,
        leadList: {
          ...state.leadList,
          loading: false,
          tableData: defaultSort
        }
      };

    default:
      return { ...state };
  }
};
