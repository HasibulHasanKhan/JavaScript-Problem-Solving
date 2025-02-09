function formatBangladeshiPhoneNumber(phoneNumber) {
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Ensure the number is a valid Bangladeshi mobile number
  const regex = /^(?:\+?880|0)1[3-9]\d{8}$/;

  if (!regex.test(cleaned)) {
    return "Invalid Bangladeshi phone number";
  }

  if (cleaned.startWith("880")) {
    return `+${cleaned}`;
  } else if (cleaned.startWith("0")) {
    return `+88${cleaned.substring(1)}`;
  }

  return `+880{cleaned}`;
}
