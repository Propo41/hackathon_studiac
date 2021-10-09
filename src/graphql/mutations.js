import gql from "graphql-tag";

const CREATE_USER = gql`
  mutation CreateUser($objects: [User_insert_input!]!) {
    insert_User(objects: $objects) {
      affected_rows
    }
  }
`;

const CREATE_CONTRIBUTOR = gql`
  mutation CreateContributor($object: Contributor_insert_input!) {
    insert_Contributor_one(object: $object) {
      id
    }
  }
`;
/* 
# this is called after admin verifies the transactionID 
# the admin will then proceed on to verify this transaction
# and insert the user into the Enrollment table */

const PROCESS_USER_TRANSACTION = gql`
  mutation processUserTransaction(
    $enrollment: Enrollment_insert_input!
    $receipt_id: Int!
  ) {
    insert_Enrollment_one(object: $enrollment) {
      created_at
    }
    update_Reciept_by_pk(
      pk_columns: { id: $receipt_id }
      _set: { is_processed: true }
    ) {
      is_processed
      id
    }
  }
`;

const CREATE_SUBJECT = gql`
  mutation CreateSubjectOne($object: Subject_insert_input!) {
    insert_Subject_one(object: $object) {
      created_at
    }
  }
`;

export {
  CREATE_SUBJECT,
  CREATE_USER,
  CREATE_CONTRIBUTOR,
  PROCESS_USER_TRANSACTION,
};
