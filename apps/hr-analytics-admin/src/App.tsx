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
import { UserDataList } from "./userData/UserDataList";
import { UserDataCreate } from "./userData/UserDataCreate";
import { UserDataEdit } from "./userData/UserDataEdit";
import { UserDataShow } from "./userData/UserDataShow";
import { SurveyDataList } from "./surveyData/SurveyDataList";
import { SurveyDataCreate } from "./surveyData/SurveyDataCreate";
import { SurveyDataEdit } from "./surveyData/SurveyDataEdit";
import { SurveyDataShow } from "./surveyData/SurveyDataShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"HR Analytics"}
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
        <Resource
          name="UserData"
          list={UserDataList}
          edit={UserDataEdit}
          create={UserDataCreate}
          show={UserDataShow}
        />
        <Resource
          name="SurveyData"
          list={SurveyDataList}
          edit={SurveyDataEdit}
          create={SurveyDataCreate}
          show={SurveyDataShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
