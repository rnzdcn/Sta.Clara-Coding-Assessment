import React from 'react'

export type Children = {
  children: React.ReactNode
}

export type Coordinates = {
  // Assuming this contains latitude and longitude, define appropriate types
  latitude: number;
  longitude: number;
}

export type Employment = {
  title: string;
  key_skill: string;
}

export type Address = {
  city: string;
  street_name: string;
  street_address: string;
  zip_code: string;
  state: string;
  country: string;
  coordinates: Coordinates[];
}

export type CreditCard = {
  cc_number: string;
}

export type Subscription = {
  plan: string;
  status: string;
  payment_method: string;
  term: string;
}

export type User = {
  id: number;
  uid: string;
  password: string;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  avatar: string;
  gender: string;
  phone_number: string;
  social_insurance_number: string;
  date_of_birth: string;
  employment: Employment;
  address: Address;
  credit_card: CreditCard;
  subscription: Subscription;
}
