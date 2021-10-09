import gql from "graphql-tag";

const LANDING_PAGE = gql`
  query LandingPage {
    Subject(where: { is_active: { _eq: true } }, limit: 3) {
      id
      image
      title
      body: short_description
      Class {
        labelColor: color_code
        category: name
      }
    }
    Contributor {
      id
      title: name
      image
      body: biography
    }
  }
`;

const GET_STUDENT_CHAPTER_LESSONS = gql`
  query getStudentChapterLessons($chapterId: Int!) {
    Chapter(where: { id: { _eq: $chapterId } }) {
      id
      chapterNumber: number
      title
      description
      Lessons(order_by: { number: asc }) {
        id
        number
        title
        description
        type
        Video {
          preview
          url
          duration
        }
        Material {
          url
          fileType
        }
      }
    }
  }
`;

const VIEW_NAVBAR_CONTENT = gql`
  query ViewNavbar {
    User {
      email
      name: username
      profile: UserProfile {
        image: profile_picture_url
      }
    }
  }
`;

const STUDENT_HOMEPAGE = gql`
  query LandingPage {
    Subject(where: { is_active: { _eq: true } }) {
      id
      image
      title
      body: short_description
      Class {
        labelColor: color_code
        category: name
      }
    }
  }
`;

const CONTRIBUTOR_PROFILE = gql`
  query ViewContributorById($id: String!) {
    Contributor_by_pk(id: $id) {
      bio: biography
      designation
      experience
      name
      image
      id
      SubjectContributors(limit: 5) {
        Subject {
          image
          title
        }
      }
    }
  }
`;

const SUBJECT_DETAILS = gql`
  query ViewSubjectById($subjectId: Int!) {
    Subject_by_pk(id: $subjectId) {
      id
      image
      title
      shortDescription: short_description
      Class {
        id
        color: color_code
        name
        SubscriptionFee {
          fee
          discount
        }
        Subjects(where: { is_active: { _eq: true } }) {
          image
          title
          shortDescription: short_description
          id
        }
      }
      subject_code
      overview
      SubjectContributors {
        Contributor {
          id
          name
          image
          bio: biography
          designation
        }
      }
      Chapters(order_by: { number: asc }) {
        title
        number
        Lessons(order_by: { number: asc }) {
          type
          name: title
          number
        }
      }
    }
  }
`;

const STUDENT_SUBJECTS = gql`
  query getStudentSubjects {
    Enrollment {
      Class {
        id
        name
        color_code
        Subjects {
          id
          image
          title
          short_description
        }
      }
    }
  }
`;

const CHECKOUT_CLASS = gql`
  query CheckoutClass($id: Int!) {
    Class_by_pk(id: $id) {
      id
      name
      color_code
      SubscriptionFee {
        fee
        discount
      }
      Subjects(where: { is_active: { _eq: true } }) {
        id
        image
        title
        shortDescription: short_description
      }
    }
  }
`;

export {
  LANDING_PAGE,
  CONTRIBUTOR_PROFILE,
  SUBJECT_DETAILS,
  STUDENT_HOMEPAGE,
  CHECKOUT_CLASS,
  STUDENT_SUBJECTS,
  GET_STUDENT_CHAPTER_LESSONS,
  VIEW_NAVBAR_CONTENT,
};
