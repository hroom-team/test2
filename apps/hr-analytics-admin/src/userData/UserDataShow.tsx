import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserDataShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
