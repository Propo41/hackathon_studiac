import gql from "graphql-tag";

const VIEW_USERS = gql`
  query ViewUsers {
    User {
      email
      id
      username
      role
      createdat: created_at
      isVerified: is_verified
    }
  }
`;

const VIEW_CONTRIBUTORS = gql`
  query ViewContributor {
    Contributor {
      id
      name
      designation
      biography
      experience
    }
  }
`;

const VIEW_SUBJECTS = gql`
  query ViewSubjects {
    Subject(where: { is_active: { _eq: true } }) {
      id
      title
      Class {
        name
      }
    }
  }
`;

const VIEW_RECEIPTS = gql`
  query ViewReceipts {
    Reciept {
      id
      user_id
      class_id
      raw_price
      discount
      total
      is_processed
      subscription_date
      Payment {
        payment_gateway
        transaction_id
        phone_number
      }
      Class {
        name
        color_code
      }
    }
  }
`;

const VIEW_ENROLLMENTS = gql`
  query Enrollments {
    Enrollment {
      id
      user_id
      subscription_date
      status: is_active
      class_id
      User {
        username
        id
      }
    }
  }
`;

const VIEW_CLASSES = gql`
  query ViewClasses {
    Class {
      name
      id
      color_code
    }
  }
`;

export {
  VIEW_USERS,
  VIEW_CONTRIBUTORS,
  VIEW_SUBJECTS,
  VIEW_RECEIPTS,
  VIEW_ENROLLMENTS,
  VIEW_CLASSES,
};
