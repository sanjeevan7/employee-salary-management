import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  TopToolbar,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

// Change this import to: from "employee-salary-management"
import { ImportButton } from "./build-watch";

const ListActions = (props) => {
  const {
    className,
    basePath,
    total,
    resource,
    currentSort,
    filterValues,
    exporter,
  } = props;
  const config = {
    logging: true,
    validateRow: async (row) => {
      if (row.id) {
      }
    },
    postCommitCallback: reportItems => {
      console.log('reportItems', {reportItems});
    },
    // disableImportNew: true,
    // disableImportOverwrite: true,
    // disableGetMany: true,
  };
  return (
    <TopToolbar className={className}>
      <ImportButton {...props} {...config} parseConfig={{dynamicTyping: true}}/>
    </TopToolbar>
  );
};

export const EmployeeList = (props) => (
  <List {...props} actions={<ListActions />}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="fullName" />
      <TextField source="salary" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const EmployeeShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="fullName" />
      <TextField source="salary" />
    </SimpleShowLayout>
  </Show>
);

export const EmployeeCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="title" />
      <TextInput source="fullName" />
      <TextInput source="salary" />
    </SimpleForm>
  </Create>
);

export const EmployeeEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="title" />
      <TextInput source="fullName" />
      <TextInput source="salary" />
    </SimpleForm>
  </Edit>
);
