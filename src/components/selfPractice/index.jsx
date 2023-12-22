import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";

import FixedPrice from "./FixedPricePage";
import CoderDetail from "./CoderDetailPage";
import { DetailPage } from "./JobDetailPage";
import { DetailHeader, CoderHeader, PaymentHeader } from "./JobDetailHeader";
import "./index.css";

const JobDetailTab = () => {
  const [activeTab, setActiveTab] = useState(0);
  // const [activeHeader, setActiveHeader] = useState(<DetailHeader />);

  const handleChange = (newValue) => {
    setActiveTab(newValue);
  };

  const renderTabContent = () => {
    // let component;
    switch (activeTab) {
      case 0:
        return (
          <>
            {" "}
            <DetailHeader />
            <DetailPage />
          </>
        );
      // component = <DetailPage />;
      // setActiveHeader(<DetailHeader />);
      case 1:
        return (
          <>
            {" "}
            <CoderHeader />
            <CoderDetail />
          </>
        );
      // component = <CoderDetail />;
      // setActiveHeader(<CoderHeader />);
      case 2:
        return (
          <>
            {" "}
            <PaymentHeader />
            <FixedPrice />
          </>
        );
      // component = <FixedPrice />;
      // setActiveHeader(<PaymentHeader />);
      default:
        // component = null;
        return null;
    }
    // return { component, activeHeader };
  };

  // const { component, activeHeader } = renderTabContent();
  return (
    <>
      {/* {activeHeader} */}
      <Box className="job-detail-tab-box">
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab className="job-detail-tab-style" label="Details" />
          <Tab className="job-detail-tab-style" label="Coders" />
          <Tab className="job-detail-tab-style" label="Payments" />
        </Tabs>
      </Box>

      <Box>{renderTabContent()}</Box>
      {/* {component} */}
    </>
  );
};

export default JobDetailTab;
