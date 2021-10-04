import { gql } from "@apollo/client";

export const CREATE_CONTACT = gql`
  mutation (
    $name: String
    $email: String
    $phone: String
    $company: String
    $address: String
    $message: String
  ) {
    createContact(
      data: {
        name: $name
        email: $email
        phone: $phone
        company: $company
        address: $address
        message: $message
      }
    ) {
      id
    }
  }
`;
