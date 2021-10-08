const CREATE_USER = `
  mutation CreateUser($objects: [User_insert_input!]!) {
    insert_User(objects: $objects) {
      affected_rows
    }
  }
`;

const CREATE_USER_PROFILE = `
  mutation MyMutation($profile: UserProfile_insert_input!) {
    insert_UserProfile_one(object: $profile) {
     full_name
    }
  }
  
`;

const SUBSCRIBE_TO_CLASS = `
    mutation SubscribeClass($object: Reciept_insert_input!) {
        insert_Reciept_one(object: $object) {
            id
            is_processed
        }
    }
  
`;
export { CREATE_USER, CREATE_USER_PROFILE, SUBSCRIBE_TO_CLASS };
