import React from 'react';
import Typography from "@material-ui/core/Typography";

interface Props {
  hq_address: string;
  country: string;
  phone: string;
}

const AddressComponent = ({ 
  hq_address,
  country,
  phone
}: Props) => (
  <>
    <Typography variant="body2">{hq_address}</Typography>
    <Typography variant="body2" style={{ textTransform: "uppercase" }}>
      {country}
    </Typography>
    <Typography variant="body2">{phone}</Typography>
  </>
);

export default AddressComponent;