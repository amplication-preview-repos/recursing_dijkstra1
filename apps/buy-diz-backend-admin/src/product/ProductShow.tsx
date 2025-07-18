import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { PRODUCT_TITLE_FIELD } from "./ProductTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="imageUrl" source="imageUrl" />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="Retailer" source="retailer" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Order" target="productId" label="Orders">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="amount" source="amount" />
            <TextField label="Client" source="client" />
            <DateField source="createdAt" label="Created At" />
            <BooleanField label="escrowReleased" source="escrowReleased" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Video" target="productId" label="Videos">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="caption" source="caption" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Retailer" source="retailer" />
            <TextField label="thumbnailUrl" source="thumbnailUrl" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="videoUrl" source="videoUrl" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
