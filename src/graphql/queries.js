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

export { LANDING_PAGE, CONTRIBUTOR_PROFILE, SUBJECT_DETAILS };
