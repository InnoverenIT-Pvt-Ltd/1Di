import * as types from "./CustomerActionTypes";

const initialState = {

    fetchingCancelOrder:false,
    fetchingCancelOrderError:false,
    cancelOrder:[],

    fetchingCountryName:false,
    fetchingCountryNameError:false,
    countriesname:[],

    fetchingWitoutPrice: false,
    fetchingWitoutPriceError: false,
    witoutPrice:[],

    fetchingInvestorSearchData: false,
    fetchingInvestorSearchDataError: false,
    investorSerachedData:[],

    fetchingCustomerProductInputSearchData: false,
    fetchingCustomerProductInputSearchDataError: false,
    inputData: [],

    addingDeliveryInfo: false,
    addingDeliveryInfoError: false,

    trackingOrder:false,
    trackingOrderError:false,
    trackingOrderData:[],

    fetchingTrackedOrderList:false,
    fetchingTrackedOrderListError:false,
    trackedOrder:[],

    linkingProductInfo: false,
    linkingProductInfoError: false,

    fetchingCustomerList:false,
    fetchingCustomerListError:false,
    customer:[
      // {
      // productName:"Apple",
      // categoryName:"Fruits",
      // subCategoryName:"Apss",
      // description:"nice",
      // },
      // {
      //   productName:"Banana",
      //   categoryName:"Fruits",
      //   subCategoryName:"Banay",
      //   description:"Good",
      //   },
      //   {
      //     productName:"Strabery",
      //     categoryName:"Fruits",
      //     subCategoryName:"Stry",
      //     description:"Sweet",
      //     },
      //     {
      //       productName:"Grapes",
      //       categoryName:"Fruits",
      //       subCategoryName:"Ggrpss",
      //       description:"Hisst",
      //       },
      //       {
      //         productName:"Strabery",
      //         categoryName:"Fruits",
      //         subCategoryName:"Stry",
      //         description:"Sweet",
      //         },
      //         {
      //           productName:"Grapes",
      //           categoryName:"Fruits",
      //           subCategoryName:"Ggrpss",
      //           description:"Hisst",
      //           },

    ],

    fetchingCartItems: false,
    fetchingCartItemsError: false,
    cart:[],

    catagoryDetailsDrawr:false,

    fetchingShopImage: false,
    fetchingShopImageError: false,
    shopImage: [],

    fetchingProductbyId: false,
    fetchingProductbyIdError: false,
    productsByID:{},

    fetchingCategories: false,
    fetchingCategoriesError:false,
    categoriesPrds:[],
    
    addingContact: false,
    addingContactError:false,

    fetchingSources: false,
    fetchingSourcesError: false,
    sources: [],
    clearbit: {},

    addStripeModal:false,

    addingPaymentId:false,
    addingPaymentIdError:false,
    paymentDetails:{},

    fetchingProductsByCategoryId: false,
    fetchingProductsByCategoryIdError: false,
    productsbyCategoryId:[
      // {
      // productName:"Apple",
      // categoryName:"Fruits",
      // subCategoryName:"Apss",
      // description:"nice",
      // categoryId:"PCD19536618797282024"
      // },
      // {
      //   productName:"Banana",
      //   categoryName:"Fruits",
      //   subCategoryName:"Banay",
      //   description:"Good",
      //   categoryId:"PCD19536618797282024"
      //   },
      //   {
      //     productName:"Strabery",
      //     categoryName:"Fruits",
      //     subCategoryName:"Stry",
      //     description:"tst",
      //     categoryId:"PCD19536618797282024"
      //     },
      //     {
      //       productName:"Grapes",
      //       categoryName:"Fruits",
      //       subCategoryName:"Ggrpss",
      //       description:"Hisst",
      //       categoryId:"PCD8213713670282024"
      //       },
      //       {
      //         productName:"Strabery",
      //         categoryName:"Fruits",
      //         subCategoryName:"Stry",
      //         description:"Sweet",
      //         categoryId:"PCD8213713670282024"
      //         },
      //         {
      //           productName:"Grapes",
      //           categoryName:"Fruits",
      //           subCategoryName:"Ggrpss",
      //           description:"gosd",
      //           categoryId:"PCD8213713670282024"
      //           },
      ],

      fetchingPurchaseListC: false,
      fetchingPurchaseListCError: false,
      purchaseListC:[],

      fetchingInventorySupplierItemsC: false,
              fetchingInventorySupplierItemsCError:false,
              allInventorySupplierItemsC:[],

              fetchingSupplierItemsC: false,
              fetchingSupplierItemsCError:false,
              allSupplierItemsC:[],

};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.GET_CANCEL_ORDER_REQUEST:
      return { ...state, fetchingCancelOrder: true };
    case types.GET_CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        fatchingCancelOrder: false,
        cancelOrder: action.payload,
      };
    case types.GET_CANCEL_ORDER_FAILURE:
      return { ...state, fetchingCancelOrder: false };


      case types.GET_COUNTRY_NAME_REQUEST:
      return { ...state, fetchingCountryName: true };
    case types.GET_COUNTRY_NAME_SUCCESS:
      return {
        ...state,
        fatchingCountryName: false,
        countriesname: action.payload,
      };
    case types.GET_COUNTRY_NAME_FAILURE:
      return { ...state, fetchingCountryName: false };

      
    
//FillDeliveryInformation post
      case types.ADD_DELIVERY_INFO_REQUEST:
        return { ...state, addingDeliveryInfo: true };
      case types.ADD_DELIVERY_INFO_SUCCESS:
        return { ...state, addingDeliveryInfo: false };
      case types.ADD_DELIVERY_INFO_FAILURE:
        return { ...state, addingDeliveryInfo: false, addingDeliveryInfoError: true };

        case types.TRACK_ORDER_STATUS_REQUEST:
          return { ...state, trackingOrder: true };
        case types.TRACK_ORDER_STATUS_SUCCESS:
          return { ...state, trackingOrder: false,trackingOrderData:action.payload };
        case types.TRACK_ORDER_STATUS_FAILURE:
          return { ...state, trackingOrder: false, trackingOrderError: true };
         
          case types.GET_ORDER_STATUS_REQUEST:
            return { ...state, fetchingCancelOrder: true };
          case types.GET_ORDER_STATUS_SUCCESS:
            return {
              ...state,
              fatchingCancelOrder: false,
              cancelOrder: action.payload,
            };
          case types.GET_ORDER_STATUS_FAILURE:
            return { ...state, fetchingCancelOrder: false };


            case types.GET_CUSTOMER_LIST_REQUEST:
              return { ...state, fetchingCustomerList: true };
            case types.GET_CUSTOMER_LIST_SUCCESS:
              return {
                ...state,
                fetchingCustomerList: false,
                customer: action.payload,
              };
            case types.GET_CUSTOMER_LIST_FAILURE:
              return {
                ...state,
                fetchingCustimerList: false,
                fetchingCustomerListError: true,
              };

              case types.INPUT_CUSTOMER_PRODUCT_SEARCH_DATA_REQUSET:
      return { ...state, fetchingCustomerProductInputSearchData: true };
    case types.INPUT_CUSTOMER_PRODUCT_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingCustomerProductInputSearchData: false,
        customerProduct: action.payload,
        // serachedData: action.payload,
      };

              case types.INPUT_CUSTOMER_PRODUCT_SEARCH_DATA_FAILURE:
                return { ...state, fetchingCustomerProductInputSearchDataError: true };


                case types.LINK_PRODUCT_INFO_REQUEST:
                  return {
                    ...state,
                    linkingProductInfo: true,
                  };
                case types.LINK_PRODUCT_INFO_SUCCESS:
                  return {
                    ...state,
                    linkingProductInfo: false,
                  //   addRecruiterModal:false,
                  //   recruitByOpportunityId: state.recruitByOpportunityId.map(
                  //     (recruit, i) => {
                  //       if (recruit.profileId === action.payload.profileId) {
                  //         return action.payload;
                  //       } else {
                  //         return recruit;
                  //       }
                  //     }
                  //   ),
                   };
                case types.LINK_PRODUCT_INFO_FAILURE:
                  return {
                    ...state,
                    // addRecruiterModal:false,
                    linkingProductInfo: false,
                    linkingProductInfoError: true,
                  };

      case types.GET_CART_ITEMS_REQUEST:
                    return { ...state, fetchingCartItems: true };
                  case types.GET_CART_ITEMS_SUCCESS:
                    return {
                      ...state,
                      fetchingCartItems: false,
                      cart: action.payload,
                    };
                  case types.GET_CART_ITEMS_FAILURE:
                    return {
                      ...state,
                      fetchingCartItems: false,
                      fetchingCartItemsError: true,
                    };

                    case types.GET_SHOP_IMAGE_REQUEST:
                      return { ...state, fetchingShopImage: true };
                    case types.GET_SHOP_IMAGE_SUCCESS:
                      return {
                        ...state,
                        fetchingShopImage: false,
                        shopImage: action.payload,
                      };
                    case types.GET_SHOP_IMAGE_FAILURE:
                      return {
                        ...state,
                        fetchingShopImage: false,
                        fetchingShopImageError: true,
                      }; 

                      case types.GET_PRODUCT_BY_ID_REQUEST:
                        return { ...state, fetchingProductbyId: true };
                      case types.GET_PRODUCT_BY_ID_SUCCESS:
                        return {
                          ...state,
                          fetchingProductbyId: false,
                          productsByID: action.payload,
                        };
                      case types.GET_PRODUCT_BY_ID_FAILURE:
                        return {
                          ...state,
                          fetchingProductbyId: false,
                          fetchingProductbyIdError: true,
                        }; 

                        case types.GET_CATEGORIES_REQUEST:
                          return { ...state, fetchingCategories: true };
                        case types.GET_CATEGORIES_SUCCESS:
                          return {
                            ...state,
                            fetchingCategories: false,
                            categoriesPrds: action.payload,
                          };
                        case types.GET_CATEGORIES_FAILURE:
                          return {
                            ...state,
                            fetchingCategories: false,
                            fetchingCategoriesError: true,
                          }; 
                           
        case types.ADD_CONTACT_DETAILS_REQUEST:
          return { ...state, addingContact: true };
        case types.ADD_CONTACT_DETAILS_SUCCESS:
          return { ...state, addingContact: false,
               };
        case types.ADD_CONTACT_DETAILS_FAILURE:
          return { ...state,
               addingContact: false,
               addingContactError: true 
              };

              case types.GET_SOURCE_REQUEST:
                return { ...state, fetchingSources: true };
              case types.GET_SOURCE_SUCCESS:
                return {
                  ...state,
                  fetchingSources: false,
                  sources: action.payload,
                };
              case types.GET_SOURCE_FAILURE:
                return {
                  ...state,
                  fetchingSources: false,
                  fetchingSourcesError: true,
                };

                case types.SET_CLEARBIT_DATA:
                  return { ...state, clearbit: action.payload };

                  case types.HANDLE_STRIPE_MODAL:
                    return { ...state, addStripeModal: action.payload };

              case types.GET_PAYMENT_ID_REQUEST:
      return { ...state, addingPaymentId: true };
    case types.GET_PAYMENT_ID_SUCCESS:
      return {
        ...state,
        addingPaymentId: false,
        paymentDetails: action.payload
      };
    case types.GET_PAYMENT_ID_FAILURE:
      return { ...state, addingPaymentId: false, addingPaymentIdError: true };
      

      case types.GET_PRODUCT_BY_CATEGORY_ID_REQUEST:
        return { ...state, fetchingProductsByCategoryId: true };
      case types.GET_PRODUCT_BY_CATEGORY_ID_SUCCESS:
        return {
          ...state,
          fetchingProductsByCategoryId: false,
          productsbyCategoryId: action.payload,
        };
      case types.GET_PRODUCT_BY_CATEGORY_ID_FAILURE:
        return {
          ...state,
          fetchingProductsByCategoryId: false,
          fetchingProductsByCategoryIdError: true,
        };

        case types.GET_SUPPLIES_LIST_C_REQUEST:
          return { ...state, fetchingPurchaseListC: true };
      case types.GET_SUPPLIES_LIST_C_SUCCESS:
          return {
              ...state,
              fetchingPurchaseListC: false,
              purchaseListC: action.payload,
          };
      case types.GET_SUPPLIES_LIST_C_FAILURE:
          return {
              ...state,
              fetchingPurchaseListC: false,
              fetchingPurchaseListCError: true,
          };

          case types.GET_ALL_INVENTORY_SUPPLIER_ITEMS_C_REQUEST:
            return { ...state, fetchingInventorySupplierItemsC: true };
          case types.GET_ALL_INVENTORY_SUPPLIER_ITEMS_C_SUCCESS:
            return {
              ...state,
              fetchingInventorySupplierItemsC: false,
              allInventorySupplierItemsC: action.payload,
            };
          case types.GET_ALL_INVENTORY_SUPPLIER_ITEMS_C_FAILURE:
            return {
              ...state,
              fetchingInventorySupplierItemsC: false,
              fetchingInventorySupplierItemsCError: true,
            };          
            
            case types.GET_ALL_SUPPLIER_ITEMS_C_REQUEST:
            return { ...state, fetchingSupplierItemsC: true };
          case types.GET_ALL_SUPPLIER_ITEMS_C_SUCCESS:
            return {
              ...state,
              fetchingSupplierItemsC: false,
              allSupplierItemsC: action.payload,
            };
          case types.GET_ALL_SUPPLIER_ITEMS_C_FAILURE:
            return {
              ...state,
              fetchingSupplierItemsC: false,
              fetchingSupplierItemsCError: true,
            };  

            case types.GET_WITHOUT_PRICE_REQUEST:
              return { ...state, fetchingWitoutPrice: true };
            case types.GET_WITHOUT_PRICE_SUCCESS:
              return {
                ...state,
                fetchingWitoutPrice: false,
                witoutPrice: action.payload,
              };
            case types.GET_WITHOUT_PRICE_FAILURE:
              return {
                ...state,
                fetchingWitoutPrice: false,
                fetchingWitoutPriceError: true,
              };  

            case types.HANDLE_CATAGORY_DETAILS_DRAWER:
            return { ...state, catagoryDetailsDrawr: action.payload };

            case types.HANDLE_CLAER_REDUCER_DATA_INVESTOR:
              return { ...state, 
                investorSerachedData: [], 
              };

              case types.GET_INVESTOR_SEARCH_REQUEST:
                return { ...state, fetchingInvestorSearchData: true };
              case types.GET_INVESTOR_SEARCH_SUCCESS:
                return {
                  ...state,
                  fetchingInvestorSearchData: false,              
                   investorSerachedData: action.payload,
                };
              case types.GET_INVESTOR_SEARCH_FAILURE:
                return { ...state, fetchingInvestorSearchDataError: true };
            
    default:
        return state;
    }
  };