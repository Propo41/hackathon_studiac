const VIEW_USER_BY_EMAIL = `
    query ViewUserByEmail($email: String!, $role: String!) {
        User(where: {role: {_eq: $role}, email: {_eq: $email}}) {
        email
        id
        username
        password
        }
    }
`;

export { VIEW_USER_BY_EMAIL };
