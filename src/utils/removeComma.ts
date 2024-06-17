export const renderAddressText = (vendor: any) =>
  vendor?.streetAddress && vendor?.state
    ? `${vendor.streetAddress}, ${vendor.state}`
    : vendor?.streetAddress
    ? vendor.streetAddress
    : vendor?.state
    ? vendor.state
    : "";
