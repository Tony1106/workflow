export const SUPPRESSED_PROPERTY_IDS = [
  "14732000", // Test suppressed property, an alias property for 15344106
  "2723553",
  "2464144",
  "8803423",
  "1139758",
  "8929153",
  "985785",
  "6460966",
  "782095",
  "11031909",
  "5158863",
  "6549186",
  "7001434",
  "20176333",
  "8611233",
  "9446529",
  "6420569",
  "1540589",
  "10503879",
  "3553907",
  "9622209",
 $propertyId];

export const isPropertySuppressed = (propertyId: string): boolean => SUPPRESSED_PROPERTY_IDS.includes(propertyId);