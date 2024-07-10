import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserDataList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserDataItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
        <TextField label="email" source="email" />
        <TextField label="telegramId" source="telegramId" />
        <TextField label="role" source="role" />
        <TextField label="department" source="department" />
        <TextField label="location" source="location" />
        <TextField label="company" source="company" />
        <TextField label="languagePreference" source="languagePreference" />
        <TextField label="personalProfile" source="personalProfile" />
      </Datagrid>
    </List>
  );
};
