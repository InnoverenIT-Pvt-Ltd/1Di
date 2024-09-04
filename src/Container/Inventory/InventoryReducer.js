import * as types from "./InventoryActionType";
import moment from "moment";
const initialState = {
    fetchingProducts: false,
    fetchingProductsError: false,
    products: [
      // {
      // categoryName:"adnskj",
      // subCategoryName:"rtretre",
      // name:"rtyyyy",

      // }
    ],

    fetchingAllProductsCategory: false, 
    fetchingAllProductsCategoryError: false,
    allproductsCategory:[],

    fetchingAllSuppliesCategory: false, 
    fetchingAllSuppliesCategoryError: false,
    allSuppliesCategory:[],

    fetchingStrpieInd: false,
    fetchingStrpieIndError: false,
    stripeNo:{},

    uploadInvodrwr:false,

    uploadingInventoryDocs: false,
    uploadingInventoryDocsError:false,

    linkingInventoryItem: false,
    linkingInventoryItemError:false,
    linkInvntoryItems:{},

    fetchingInventoryCartItems: false,
    fetchingInventoryCartItemsError:false,
    invencartItem:{},
    
    addingInventoryDeliveryInfo: false, addingInventoryDeliveryInfoError:false,

    addingInventoryPaymentId: false,
    paymentInventoryDetails:{},
    addingInventoryPaymentIdError: false,

    addingMakeInventoryPayment: false,
    addingMakeInventoryPaymentError: false,
    confirmedInvnPayment: {},

    addiNVEStripeModal:false,

    fetchingInventoryCartItemCount: false,
    invencartItemCount:{productCount:""},
    fetchingInventoryCartItemCountError:false,

    updatingPlusCart: false,
    updatingPlusCartError: false,
    
    fetchingDeletedCartItem: false,
    fetchingDeletedCartItemError:false,

    addingCODinventory: false, 
    addingCODinventoryError: false,
    codInventryorDr:{},
    
    fetchingInventorySupplierItems: false,
    allInventorySupplierItems: [],
    fetchingInventorySupplierItemsError:false,

    fetchingSupplierItems: false,
    fetchingSupplierItemsError:false,
    allSupplierItems:[],

    fetchingPurchaseList: false,
    fetchingPurchaseListError: false,
    purchaseList:[],

    fetchingSuplrInventorylist: false,
    fetchingSuplrInventorylistError: false,
    suplrInventoryList:[],

    updatingCartItemdate: false,
    updatingCartItemdateError:false,

    addSuplrInventoryDrwr:false,

    addingSuplrInventory: false,
    addingSuplrInventoryError:false,

    fetchingBrand: false,
    fetchingBrandError: false,
    brand:[],
    fetchingModel: false,
    fetchingModelError: false.valueOf,
    model:[],

    fetchingAllProductList: false,
    fetchingAllProductListError: false,
    allProduct: [],

  fetchingLocationList: false,
  fetchingLocationListError: false,
  locationlist: [],

  fetchingSaleCurrency: false,
  fetchingSaleCurrencyError: true,
  saleCurrencies: [],

  productDetailsDrawr:false,

  suppliesDetailsDrawr:false,

  fetchingProductsByProductId: false,
  fetchingProductsByProductIdError: false,
  productsByproductId: {},

  fetchingFeaturedMaterials: true, fetchingFeaturedMaterialsError: false,
  featuredMaterials:[],
  
  fetchingMaterialRecommendeds: false,
  fetchingMaterialRecommendedsError:false,
  materialRecommendeds:[],

  generatingQuotation: false,
  generatedQuotation:{},
  generatingQuotationError:false,
};

  export const inventoryReducer = (state = initialState, action) => {
    switch (action.type) {


        case types.GET_PROFESSIONALDUCTS_REQUEST:
            return { ...state, fetchingProducts: true, fetchingProductsError: false };
          case types.GET_PROFESSIONALDUCTS_SUCCESS:
            return { ...state, fetchingProducts: false, products: action.payload };
          case types.GET_PROFESSIONALDUCTS_FAILURE:
            return { ...state, fetchingProducts: false, fetchingProductsError: true };
      
            case types.GET_ALL_PRODUCT_CATEGORY_REQUEST:
              return { ...state, fetchingAllProductsCategory: true, fetchingAllProductsCategoryError: false };
            case types.GET_ALL_PRODUCT_CATEGORY_SUCCESS:
              return { ...state, fetchingAllProductsCategory: false, allproductsCategory: action.payload };
            case types.GET_ALL_PRODUCT_CATEGORY_FAILURE:
              return { ...state, fetchingAllProductsCategory: false, fetchingAllProductsCategoryError: true };

              case types.GET_ALL_SUPPLIES_CATEGORY_REQUEST:
                return { ...state, fetchingAllSuppliesCategory: true, fetchingAllSuppliesCategoryError: false };
              case types.GET_ALL_SUPPLIES_CATEGORY_SUCCESS:
                return { ...state, fetchingAllSuppliesCategory: false, allSuppliesCategory: action.payload };
              case types.GET_ALL_SUPPLIES_CATEGORY_FAILURE:
                return { ...state, fetchingAllSuppliesCategory: false, 
                  fetchingAllSuppliesCategoryError: true };
        
              case types.HANDLE_UPLOAD_INVENTORY_DRAWER:
                return { ...state, uploadInvodrwr: action.payload };
          
                case types.UPLOAD_UPLOAD_INVENTORY_REQUEST:
                  return { ...state, uploadingInventoryDocs: true };
                case types.UPLOAD_UPLOAD_INVENTORY_SUCCESS:
                  return {
                    ...state,
                    uploadingInventoryDocs: false,
                    uploadInvodrwr: false,
                  };
                case types.UPLOAD_UPLOAD_INVENTORY_FAILURE:
                  return {
                    ...state,
                    uploadingInventoryDocs: false,
                    uploadingInventoryDocsError: true,
                  };

                  case types.LINK_INVENTORY_ITEM_REQUEST:
                    return {
                      ...state,
                      linkingInventoryItem: true,
                    };

                  case types.LINK_INVENTORY_ITEM_SUCCESS:
                    return {
                      ...state,
                      linkingInventoryItem: false,
                      linkInvntoryItems:action.payload,
                     };
                  case types.LINK_INVENTORY_ITEM_FAILURE:
                    return {
                      ...state,
                      // addRecruiterModal:false,
                      linkingInventoryItem: false,
                      linkingInventoryItemError: true,
                    };

                    case types.GET_INVENTORY_CART_ITEMS_REQUEST:
                      return { ...state, fetchingInventoryCartItems: true };
                    case types.GET_INVENTORY_CART_ITEMS_SUCCESS:
                      return {
                        ...state,
                        fetchingInventoryCartItems: false,
                        invencartItem: action.payload,
                      };
                    case types.GET_INVENTORY_CART_ITEMS_FAILURE:
                      return {
                        ...state,
                        fetchingInventoryCartItems: false,
                        fetchingInventoryCartItemsError: true,
                      };

                      case types.GET_STRIPE_IND_REQUEST:
                        return { ...state, fetchingStrpieInd: true };
                      case types.GET_STRIPE_IND_SUCCESS:
                        return {
                          ...state,
                          fetchingStrpieInd: false,
                          stripeNo: action.payload,
                        };
                      case types.GET_STRIPE_IND_FAILURE:
                        return {
                          ...state,
                          fetchingStrpieInd: false,
                          fetchingStrpieIndError: true,
                        };
  

                    case types.ADD_INVENTORY_DELIVERY_INFO_REQUEST:
                      return { ...state, addingInventoryDeliveryInfo: true };
                    case types.ADD_INVENTORY_DELIVERY_INFO_SUCCESS:
                      return { ...state, addingInventoryDeliveryInfo: false };
                    case types.ADD_INVENTORY_DELIVERY_INFO_FAILURE:
                      return { ...state, addingInventoryDeliveryInfo: false, addingInventoryDeliveryInfoError: true };

                      case types.HANDLE_INVENTORY_STRIPE_MODAL:
                        return { ...state, addiNVEStripeModal: action.payload };
                  


                      case types.ADD_INVENTORY_PAYMENT_ID_REQUEST:
                        return { ...state, addingInventoryPaymentId: true };
                      case types.ADD_INVENTORY_PAYMENT_ID_SUCCESS:
                        return {
                          ...state,
                          addingInventoryPaymentId: false,
                          paymentInventoryDetails: action.payload
                        };
                      case types.ADD_INVENTORY_PAYMENT_ID_FAILURE:
                        return { ...state, addingInventoryPaymentId: false, addingInventoryPaymentIdError: true };

                        case types.MAKE_INVENTORY_PAYMENT_REQUEST:
                          return { ...state, addingMakeInventoryPayment: true };
                        case types.MAKE_INVENTORY_PAYMENT_SUCCESS:
                          return {
                            ...state,
                            addingMakeInventoryPayment: false,
                            addiNVEStripeModal:false,
                            confirmedInvnPayment: action.payload
                          };
                        case types.MAKE_INVENTORY_PAYMENT_FAILURE:
                          return {
                            ...state,
                            addingMakeInventoryPayment: false,
                            addingMakeInventoryPaymentError: true
                          };

                          case types.GET_INVENTORY_CART_ITEMS_COUNT_REQUEST:
                            return { ...state, fetchingInventoryCartItemCount: true };
                          case types.GET_INVENTORY_CART_ITEMS_COUNT_SUCCESS:
                            return {
                              ...state,
                              fetchingInventoryCartItemCount: false,
                              invencartItemCount: action.payload,
                            };
                          case types.GET_INVENTORY_CART_ITEMS_COUNT_FAILURE:
                            return {
                              ...state,
                              fetchingInventoryCartItemCount: false,
                              fetchingInventoryCartItemCountError: true,
                            };

                            case types.UPDATE_CART_PLUS_REQUEST:
                              return {
                                ...state,
                                updatingPlusCart: true,
                              };
                            case types.UPDATE_CART_PLUS_SUCCESS:
                              return {
                                ...state,
                                updatingPlusCart: false,
                                invencartItem: action.payload,
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
                            case types.UPDATE_CART_PLUS_FAILURE:
                              return {
                                ...state,
                                // addRecruiterModal:false,
                                updatingPlusCart: false,
                                updatingPlusCartError: true,
                              };

                              
                                case types.DELETE_CART_ITEM_REQUEST:
                                  return { ...state, fetchingDeletedCartItem: true };
                                case types.DELETE_CART_ITEM_SUCCESS:
                                  const updatedCartItems = state.invencartItem.cartItems.filter(item => item.cartItemId !== action.payload);
                                  return {
                                    ...state,
                                    fetchingDeletedCartItem: false,
                                    invencartItem: action.payload,
                                    invencartItem: {
                                      ...state.invencartItem,
                                      cartItems: updatedCartItems,
                                    }
                                  };
                                case types.DELETE_CART_ITEM_FAILURE:
                                  return {
                                    ...state,
                                    fetchingDeletedCartItem: false,
                                    fetchingDeletedCartItemError: true,
                                  };

                                  case types.ADD_COD_INVENTORY_REQUEST:
                                    return { ...state, addingCODinventory: true };
                                  case types.ADD_COD_INVENTORY_SUCCESS:
                                    return { ...state, addingCODinventory: false, codInventryorDr: action.payload };
                                  case types.ADD_COD_INVENTORY_FAILURE:
                                    return { ...state, addingCODinventory: false, addingCODinventoryError: true };

                                    case types.GET_ALL_INVENTORY_SUPPLIER_ITEMS_REQUEST:
                                      return { ...state, fetchingInventorySupplierItems: true };
                                    case types.GET_ALL_INVENTORY_SUPPLIER_ITEMS_SUCCESS:
                                      return {
                                        ...state,
                                        fetchingInventorySupplierItems: false,
                                        allInventorySupplierItems: action.payload,
                                      };
                                    case types.GET_ALL_INVENTORY_SUPPLIER_ITEMS_FAILURE:
                                      return {
                                        ...state,
                                        fetchingInventorySupplierItems: false,
                                        fetchingInventorySupplierItemsError: true,
                                      };          
                                      
                                      case types.GET_ALL_SUPPLIER_ITEMS_REQUEST:
                                      return { ...state, fetchingSupplierItems: true };
                                    case types.GET_ALL_SUPPLIER_ITEMS_SUCCESS:
                                      return {
                                        ...state,
                                        fetchingSupplierItems: false,
                                        allSupplierItems: action.payload,
                                      };
                                    case types.GET_ALL_SUPPLIER_ITEMS_FAILURE:
                                      return {
                                        ...state,
                                        fetchingSupplierItems: false,
                                        fetchingSupplierItemsError: true,
                                      };   

                                      case types.GET_SUPPLIES_LIST_REQUEST:
                                        return { ...state, fetchingPurchaseList: true };
                                    case types.GET_SUPPLIES_LIST_SUCCESS:
                                        return {
                                            ...state,
                                            fetchingPurchaseList: false,
                                            // purchaseList: action.payload,
                                            purchaseList: [...state.purchaseList, ...action.payload],
                                           
                                        };
                                    case types.GET_SUPPLIES_LIST_FAILURE:
                                        return {
                                            ...state,
                                            fetchingPurchaseList: false,
                                            fetchingPurchaseListError: true,
                                        };

                                        case types.GET_SUPLR_INVENTORY_LIST_REQUEST:
                                          return { ...state, fetchingSuplrInventorylist: true };
                                        case types.GET_SUPLR_INVENTORY_LIST_SUCCESS:
                                          return {
                                            ...state,
                                            fetchingSuplrInventorylist: false,
                                            suplrInventoryList: action.payload,
                                          };
                                        case types.GET_SUPLR_INVENTORY_LIST_FAILURE:
                                          return {
                                            ...state,
                                            fetchingSuplrInventorylist: false,
                                            fetchingSuplrInventorylistError: true,
                                          };

                                          case types.UPDATE_CART_ITEM_DATE_REQUEST:
                                            return {
                                              ...state,
                                              updatingCartItemdate: true,
                                            };

                                          case types.UPDATE_CART_ITEM_DATE_SUCCESS:
                                            return {
                                              ...state,
                                              updatingCartItemdate: false,
                                              invencartItem: action.payload,
                                            };
                                          case types.UPDATE_CART_ITEM_DATE_FAILURE:
                                            return {
                                              ...state,
                                              updatingCartItemdate: false,
                                              updatingCartItemdateError: true,
                                            };

                                            case types.HANDLE_ADD_SUPLR_INVENTORY_DRAWER:
                                              return { ...state, addSuplrInventoryDrwr: action.payload };

                                              case types.ADD_SUPLR_INVENTORY_REQUEST:
                                                return { ...state, addingSuplrInventory: true };
                                              case types.ADD_SUPLR_INVENTORY_SUCCESS:
                                                return {
                                                  ...state,
                                                  addingSuplrInventory: false,
                                                  addSuplrInventoryDrwr: false,
                                                  // inventoryList: [...action.payload, ...state.inventoryList],
                                         
                                                };
                                              case types.ADD_SUPLR_INVENTORY_FAILURE:
                                                return {
                                                  ...state,
                                                   addingSuplrInventory: false,
                                                   addingSuplrInventoryError:true,
                                                  
                                                };

 case types.GET_BRAND_REQUEST:
        return { ...state, fetchingBrand: true };
    case types.GET_BRAND_SUCCESS:
        return { ...state, fetchingBrand: false, brand: action.payload };
    case types.GET_BRAND_FAILURE:
        return { ...state, fetchingBrand: false, fetchingBrandError: true };

        case types.GET_MODEL_REQUEST:
          return { ...state, fetchingModel: true };
      case types.GET_MODEL_SUCCESS:
          return { ...state, fetchingModel: false, model: action.payload };
      case types.GET_MODEL_FAILURE:
          return { ...state, fetchingModel: false, fetchingModelError: true };

          case types.GET_ALL_PRODUCT_LIST_REQUEST:
            return { ...state, fetchingAllProductList: true };
          case types.GET_ALL_PRODUCT_LIST_SUCCESS:
            return {
              ...state, fetchingAllProductList: false,
              allProduct: action.payload
            };
          case types.GET_ALL_PRODUCT_LIST_FAILURE:
            return {
              ...state,
              fetchingAllProductList: false,
              fetchingAllProductListError: true,
            };

            case types.GET_LOCATION_LIST_REQUEST:
      return { ...state, fetchingLocationList: true };
    case types.GET_LOCATION_LIST_SUCCESS:
      return {
        ...state,
        fetchingLocationList: false,
        locationlist: action.payload,
      };
    case types.GET_LOCATION_LIST_FAILURE:
      return {
        ...state,
        fetchingLocationList: false,
        fetchingLocationListError: true,
      };

      case types.GET_SALE_CURRENCY_REQUEST:
        return { ...state, fetchingSaleCurrency: true };
      case types.GET_SALE_CURRENCY_SUCCESS:
        return { ...state, fetchingSaleCurrency: false, saleCurrencies: action.payload };
      case types.GET_SALE_CURRENCY_FAILURE:
        return {
          ...state,
          fetchingSaleCurrency: false,
          fetchingSaleCurrencyError: true,
        };

        case types.HANDLE_PRODUCTS_DETAILS_DRAWER:
            return { ...state, productDetailsDrawr: action.payload };

            case types.HANDLE_SUPPLIES_DETAILS_DRAWER:
              return { ...state, suppliesDetailsDrawr: action.payload };

            case types.GET_PRODUCTS_BY_PRODUCTID_REQUEST:
              return {
                ...state,
                fetchingProductsByProductId: true,
                fetchingProductsByProductIdError: false,
              };
            case types.GET_PRODUCTS_BY_PRODUCTID_SUCCESS:
              return {
                ...state,
                fetchingProductsByProductId: false,
                productsByproductId: action.payload,
              };
            case types.GET_PRODUCTS_BY_PRODUCTID_FAILURE:
              return {
                ...state,
                fetchingProductsByProductId: false,
                fetchingProductsByProductIdError: true,
              };

              case types.GET_FEATURED_MATERIALS_REQUEST:
                return { ...state, fetchingFeaturedMaterials: true, fetchingFeaturedMaterialsError: false };
              case types.GET_FEATURED_MATERIALS_SUCCESS:
                return { ...state, fetchingFeaturedMaterials: false,
                  featuredMaterials: [...state.featuredMaterials, ...action.payload],
                };
              case types.GET_FEATURED_MATERIALS_FAILURE:
                return { ...state, fetchingFeaturedMaterials: false, fetchingFeaturedMaterialsError: true };


                case types.GET_MATERIAL_RECOMMEND_REQUEST:
                  return { ...state, fetchingMaterialRecommendeds: true };
              case types.GET_MATERIAL_RECOMMEND_SUCCESS:
                  return {
                      ...state,
                      fetchingMaterialRecommendeds: false,
                      materialRecommendeds: [...state.materialRecommendeds, ...action.payload],
                     
                  };
              case types.GET_MATERIAL_RECOMMEND_FAILURE:
                  return {
                      ...state,
                      fetchingMaterialRecommendeds: false,
                      fetchingMaterialRecommendedsError: true,
                  };

                  case types.GENERATE_QUOTATION_REQUEST:
                    return { ...state, generatingQuotation: true };
                  case types.GENERATE_QUOTATION_SUCCESS:
                    return { ...state, generatingQuotation: false, generatedQuotation: action.payload };
                  case types.GENERATE_QUOTATION_FAILURE:
                    return { ...state, generatingQuotation: false, generatingQuotationError: true };



                          default:
            return state;
        }
      };