import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AnalyticsDataList } from "./analyticsData/AnalyticsDataList";
import { AnalyticsDataCreate } from "./analyticsData/AnalyticsDataCreate";
import { AnalyticsDataEdit } from "./analyticsData/AnalyticsDataEdit";
import { AnalyticsDataShow } from "./analyticsData/AnalyticsDataShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Analytics"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AnalyticsData"
          list={AnalyticsDataList}
          edit={AnalyticsDataEdit}
          create={AnalyticsDataCreate}
          show={AnalyticsDataShow}
        />
      </Admin>
    </div>
  );
};

export default App;
