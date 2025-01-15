import React from "react";
import Banner from "../../components/services/Banner";

import DevOpsServices from "../../components/services/DevOpsServices";
import ToolsTechnologies from "../../components/services/ToolsTechnologies";

const Services = () => (
  <div>
    <div>
      <Banner />
    </div>

    <div>
      <DevOpsServices />
    </div>
    <div>
      <ToolsTechnologies />
    </div>
  </div>
);

export default Services;
