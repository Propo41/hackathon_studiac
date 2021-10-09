const VIEW_USER_BY_EMAIL = `
    query ViewUserByEmail($email: String!, $role: String!) {
        User(where: {role: {_eq: $role}, email: {_eq: $email}}) {
        email
        id
        role
        username
        password
     }
    }
`;

const GET_ENROLLMENT_DATE = `
    query FindEnrollment($userId: String!, $subjectId: Int!) {
        Enrollment(where: {_and: {user_id: {_eq: $userId}, Class: {Subjects: {id: {_eq: $subjectId}}}}}) {
        subscription_date
        id
        }
    }
`;

const GET_STUDENT_CHAPTERS = `
    query GetStudentSubjectChapters($subjectId: Int!, $limit: Int = 1) {
        Subject(where: {id: {_eq: $subjectId}}) {
        id
        title
        description:overview
        Chapters(order_by: {number: asc}, limit: $limit) {
            id
            title
            image
            body:description
            chapter:number
        }
        }
    }
`;

const CHECK_PROFILE_COMPLETION = `
query CheckIfProfileCompleted {
    UserProfile {
     full_name
    }
  }
  
`;

export {
  VIEW_USER_BY_EMAIL,
  GET_ENROLLMENT_DATE,
  GET_STUDENT_CHAPTERS,
  CHECK_PROFILE_COMPLETION,
};
