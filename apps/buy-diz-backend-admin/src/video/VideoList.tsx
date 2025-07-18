import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const VideoList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Videos"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="caption" source="caption" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Retailer" source="retailer" />
        <TextField label="thumbnailUrl" source="thumbnailUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="videoUrl" source="videoUrl" />{" "}
      </Datagrid>
    </List>
  );
};
