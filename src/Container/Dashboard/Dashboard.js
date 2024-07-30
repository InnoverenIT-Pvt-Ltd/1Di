import React, {useEffect,useState, lazy, Suspense } from "react";
import DashboardJumpStart from './DashboardJumpStart';
import { BundleLoader } from "../../Components/Placeholder";
import { connect } from 'react-redux';

const MyOrder =lazy(()=> import('../MyOrder/MyOrder'));
const CompleteOrdersTable = lazy(() => import("./CompleteOrdersTable"));
const CancelledOrdersTable = lazy(() => import("./CancelledOrdersTable"));

function Dashboard  (props)  {
  const [activeTable, setActiveTable] = useState('open');

  const handleOrderOpenDrawer = (table) => {
    setActiveTable(table);
    console.log("Active Table:", table);
  };

  return (
    <div>
      <DashboardJumpStart 
      activeTable={activeTable}
      handleOrderOpenDrawer={handleOrderOpenDrawer}
      />
      <div class="mt-2"></div>
      <Suspense fallback={<BundleLoader />}>
      {activeTable === 'open' && <MyOrder/>}
      {activeTable === 'complete' && <CompleteOrdersTable />}
      {activeTable === 'cancelled' && <CancelledOrdersTable />}
</Suspense>
    </div>
  )
}

const mapStateToProps = ({ myorder, auth }) => ({

  userId: auth.userDetails.userId,
});

const mapDispatchToProps = (dispatch) => ({
//   getOrderCount: (userId) => dispatch(getOrderCount(userId)
// ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
