export const ValidateEmail = (email: any) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return 'Email is required.';
  } else if (!emailRegex.test(email)) {
    return 'Please enter a valid email address.';
  } else {
    return '';
  }
};
export const ValidatePassword = (password: any) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!password) {
    return 'Password is required.';
  } else if (!passwordRegex.test(password)) {
    return 'Password must be at least 8 characters long and contain at least one letter and one number.';
  } else {
    return '';
  }
};

// Confirm Password validation
export const ValidateConfirmPassword = (password: any, confirmPass: any) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!confirmPass) {
    return 'Please confirm your password.';
  } else if (password !== confirmPass) {
    return 'Confirm password should be match with password.';
  } else {
    return '';
  }
};

// Mobile Number validation
export const ValidateMobile = (mobileNum: any) => {
  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileNum) {
    return 'Mobile number is required.';
  } else if (!mobileRegex.test(mobileNum)) {
    return 'Please enter a valid 10-digit mobile number.';
  } else {
    return '';
  }
};

// Address validation
export const validateAddress = (address: any) => {
  const addressRegex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
  if (!address) {
    return 'Address is required.';
  } else if (!addressRegex.test(address.trim())) {
    return 'Please enter a valid address.';
  }
  return '';
};

export const validateName = (name: any) => {
  const nameRegex = /^[a-zA-Z\s]+$/;
  const trimmedName = name.trim();

  if (!trimmedName) {
    return 'Name is required.';
  } else if (!nameRegex.test(trimmedName)) {
    return 'Name must contain only letters and spaces, and no special characters.';
  } else if (trimmedName.split(' ').length === 1) {
    return 'Please enter both first and last names.';
  }

  return '';
};
