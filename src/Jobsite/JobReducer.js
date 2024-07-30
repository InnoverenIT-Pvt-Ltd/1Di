import * as types from "./JobActionType";
import moment from "moment";

const initialState = {
  viewType: "jobtalent",

  fetchingSectors: false,
  fetchingSectorsError: false,
  sectors: [],

  addingCandidate: false,
  addingCandidateError: false,
  candidateMessage:{},

  addCandidateApply: false,

  fetchingLibrarys: false,
  fetchingLibrarysError: false,
  librarys: [],

  fetchingIdProofs: false,
  fetchingIdProofsError: false,
  idProofs: [],

  fetchingDesignations: false,
  fetchingDesignationsError: false,
  designations: [],

  fetchingDepartments: false,
  fetchingDepartmentsError: false,
  departments: [],

  fetchingRoles: false,
  fetchingRolesError: false,
  roles: [],

  fetchingRolesName: false, 
  fetchingRolesNameError: false,
  rolesname:[],

  parseData:{},

  fetchingCurrency: false,
  fetchingCurrencyError: false,
  currencies: [],

  fetchingCountries: false,
  fetchingCountriesError: false,
  countries: [],

  addingPartner: false,
  addingPartnerError:false,
  partnerMessage:{},


  addingEmail: false,
  addingEmailError: false,
  emailData:{},
  addEmailformModal:false,

  fetchingJobCardDetails: false, 
  fetchingJobCardDetailsError: false,
  jobData:[],

  setEditingCard:{},
  addingCandidateProcess: false,
  addingCandidateProcessError: false,

  addingCustomerDetails:false,
  addingCustomerDetailsError:false,

  preferedLanguage:"Dutch"
};

export const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_JOB_VIEW_TYPE:
      return { ...state, viewType: action.payload };

    case types.GET_SECTORS_REQUEST:
      return { ...state, fetchingSectors: true };
    case types.GET_SECTORS_SUCCESS:
      return {
        ...state,
        fetchingSectors: false,
        sectors: action.payload,
      };
    case types.GET_SECTORS_FAILURE:
      return {
        ...state,
        fetchingSectors: false,
        fetchingSectorsError: true,
      };

    case types.ADD_CANDIDATE_REQUEST:
      return { ...state, addingCandidate: true };
    case types.ADD_CANDIDATE_SUCCESS:
      return { ...state, addingCandidate: false,
        candidateMessage:action.payload, };
    case types.ADD_CANDIDATE_FAILURE:
      return { ...state, addingCandidate: false, addingCandidateError: true };

    case types.HANDLE_CANDIDATE_APPLY_MODAL:
      return { ...state, addCandidateApply: action.payload };

    case types.GET_LIBRARYS_REQUEST:
      return { ...state, fetchingLibrarys: true };
    case types.GET_LIBRARYS_SUCCESS:
      return { ...state, fetchingLibrarys: false, librarys: action.payload };
    case types.GET_LIBRARYS_FAILURE:
      return { ...state, fetchingLibrarys: false, fetchingLibrarysError: true };

    case types.GET_PROOFS_REQUEST:
      return { ...state, fetchingLibrarys: true };
    case types.GET_PROOFS_SUCCESS:
      return { ...state, fetchingIdProofs: false, idProofs: action.payload };
    case types.GET_PROOFS_FAILURE:
      return { ...state, fetchingIdProofs: false, fetchingIdProofsError: true };

    case types.GET_DESIGNATIONS_REQUEST:
      return { ...state, fetchingDesignations: true };
    case types.GET_DESIGNATIONS_SUCCESS:
      return {
        ...state,
        fetchingDesignations: false,
        designations: action.payload,
      };
    case types.GET_DESIGNATIONS_FAILURE:
      return {
        ...state,
        fetchingDesignations: false,
        fetchingDesignationsError: true,
      };

    case types.GET_DEPARTMENTS_REQUEST:
      return { ...state, fetchingDepartments: true };
    case types.GET_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        fetchingDepartments: false,
        departments: action.payload,
      };
    case types.GET_DEPARTMENTS_FAILURE:
      return {
        ...state,
        fetchingDepartments: false,
        fetchingDepartmentsError: true,
      };

    case types.GET_ROLES_REQUEST:
      return { ...state, fetchingRoles: true };
    case types.GET_ROLES_SUCCESS:
      return { ...state, fetchingRoles: false, roles: action.payload };
    case types.GET_ROLES_FAILURE:
      return { ...state, fetchingRoles: false, fetchingRolesError: true };

      case types.GET_CURRENCY_REQUEST:
        return { ...state, fetchingCurrency: true };
      case types.GET_CURRENCY_SUCCESS:
        return { ...state, fetchingCurrency: false, currencies: action.payload };
      case types.GET_CURRENCY_FAILURE:
        return {
          ...state,
          fetchingCurrency: false,
          fetchingCurrencyError: true,
        };

        case types.GET_COUNTRIES_SUCCESS:
          return { ...state, fetchingCountries: false, countries: action.payload };
        case types.GET_COUNTRIES_FAILURE:
          return {
            ...state,
            fetchingCountries: false,
            fetchingCountriesError: true,
          };

    case types.ADD_PARTNER_REQUEST:
      return { ...state, addingPartner: true };
    case types.ADD_PARTNER_SUCCESS:
      return {
        ...state,
        addingPartner: false,
        partnerMessage:action.payload,
      };
    case types.ADD_PARTNER_FAILURE:
      return {
        ...state,
        addingPartner: false,
        addingPartnerError: true
      };

      case types.ADD_EMAIL_REQUEST:
        return { ...state, addingEmail: true };
      case types.ADD_EMAIL_SUCCESS:
        return { ...state, 
          addingEmail: false,
          emailData:action.payload, };
      case types.ADD_EMAIL_FAILURE:
        return { ...state, addingEmail: false, addingEmailError: true };   
        
        case types.HANDLE_EMAIL_FORM_MODAL:
          return { ...state, addEmailformModal: action.payload };

          case types.GET_JOB_CARD_REQUEST:
            return { ...state, fetchingJobCardDetails: true };
          case types.GET_JOB_CARD_SUCCESS:
            return { ...state, fetchingJobCardDetails: false, jobData: action.payload };
          case types.GET_JOB_CARD_FAILURE:
            return { ...state, fetchingJobCardDetails: false, fetchingJobCardDetailsError: true }; 
            
            case types.SET_CARD_DATA:
              return { ...state, setEditingCard: action.payload };
             
   case types.ADD_CANDIDATE_PROCESS_REQUEST:
      return { ...state, addingCandidateProcess: true };
   case types.ADD_CANDIDATE_PROCESS_SUCCESS:
       return { ...state, addingCandidateProcess: false, addCandidateApply: false };
   case types.ADD_CANDIDATE_PROCESS_FAILURE:
       return { ...state, addingCandidateProcess: false, addingCandidateProcessError: true };

  case types.ADD_CUSTOMER_DETAILS_REQUEST:
    return {...state,addingCustomerDetails:true};
  case types.ADD_CUSTOMER_DETAILS_SUCCESS:
    return {...state,addingCustomerDetails:false};
  case types.ADD_CUSTOMER_DETAILS_FAILURE:
    return {...state,addingCustomerDetails:false,addingCustomerDetailsError:true}
   

    case types.GET_ROLES_NAME_REQUEST:
      return { ...state, fetchingRolesName: true };
    case types.GET_ROLES_NAME_SUCCESS:
      return { ...state, fetchingRolesName: false, rolesname: action.payload };
    case types.GET_ROLES_NAME_FAILURE:
      return { ...state, 
        fetchingRolesName: false, 
        fetchingRolesNameError: true };




        case types.ADD_APPLY_REQUEST:
          return { ...state, addingApply: true };
        case types.ADD_APPLY_SUCCESS:
          return {
            ...state,
            addingApplyError: false,
            // addOpportunityModal: false,
            // opportunityByUserId:[action.payload,...state.opportunityByUserId]
            // clearbit: null,
          };
        case types.ADD_APPLY_FAILURE:
          return {
            ...state,
            addingApply: false,
            addingApplyError: true,
            // addOpportunityModal: false,
          };

          case types.GET_PARSE_SUCCESS:
            return { ...state, parseData: action.payload };

    default:
      return state;
  }
};
