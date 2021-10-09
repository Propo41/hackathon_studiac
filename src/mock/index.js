const contributors = [
  {
    id: "1",
    title: "Mia Malkova",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
    image:
      "https://img.mensxp.com/media/content/2017/Nov/image-4-pinterest-1510066942.jpg",
  },
  {
    id: "2",
    title: "Danny Daniels",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
    image:
      "https://www.allkpop.com/upload/2021/09/content/301504/1633028697-untitled-1.jpg",
  },
  {
    id: "3",
    title: "Soung Pho",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/squid-game-1632309278.jpg",
  },
  {
    id: "4",
    title: "Min Mu",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
    image: "https://pbs.twimg.com/media/FAela2EVUAImJks.jpg",
  },
];

const subjects = [
  {
    id: "1",
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image:
      "https://img.mensxp.com/media/content/2017/Nov/image-2-pinterest-1510066907.jpg",
    Class: {
      labelColor: "#00C890",
      category: "Программирование",
    },
  },
  {
    id: "2",
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image:
      "https://media1.popsugar-assets.com/files/thumbor/JwAe7HTE4uBssC4-b9jHtKeVojg/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/09/25/543/n/2589278/346f343e5baa23c0ad0f38.84693216_/i/Who-Jodie-Comer.jpg",
    Class: {
      labelColor: "#00C890",
      category: "Программирование",
    },
  },
  {
    id: "3",
    title: "Программирование",
    body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDM2ZGU3NDgtZDUwNi00NjNmLTlkYjktNWU2ZTZmOTM3MjVlXkEyXkFqcGdeQWpnYW1i._V1_.jpg",
    Class: {
      labelColor: "#00C890",
      category: "Программирование",
    },
  },
];

const tiers = [
  {
    title: "Demonstration",
    description: [
      "Demonstration ",
      "of the practical  ",
      "experiments mentioned in your books",
    ],
    buttonText: "Learn More",
    buttonVariant: "outlined",
    icon: "https://avatars.dicebear.com/api/gridy/6655.svg",
    navigateUrl: "/learn-more",
  },
  {
    title: "Relevance",
    subheader: "Most popular",
    description: [
      "Other subjects are ",
      "connected with the topic you ",
      "are reading to help ",
      "you understand concepts better",
    ],
    buttonText: "Get Started",
    icon: "https://avatars.dicebear.com/api/gridy/61.svg",
    buttonVariant: "contained",
    navigateUrl: "/sign-up",
  },
  {
    title: "DIY",
    description: [
      "Instructions for conducting ",
      "experiments with ",
      "homemade stuff are ",
      "there too!",
    ],
    icon: "https://avatars.dicebear.com/api/gridy/523.svg",
    buttonText: "Contact Us",
    buttonVariant: "outlined",
    navigateUrl: "/contact-us",
  },
];

const header = {
  title: "Welcome to Studiac!",
  subtitle: `With Studiac, you will be able to learn your subjects differently by the help of practical experiments and STEAM learning. 
  Come and set sail for your amazing journey!`,
  image: "./assets/landing_page_asset1.svg",
};

const community = [
  {
    title: "Sadman Ahammed (Class 5)",
    image: "https://avatars.dicebear.com/api/avataaars/5.svg",
    body: "Studiac has helped me develop a strong base on the subjects which seemed a bit problematic for me in the beginning such as General Science. The way the instructors conducted the experiments helped me gain more depth in theories mentioned in the books and I also got inspired to learn more on the topics of the books.",
    category: "Category 1",
    labelColor: "#162874",
  },
  {
    title: "Sumaiya Kabir Auntika (Class 7)",
    image: "https://avatars.dicebear.com/api/avataaars/10.svg",
    body: "STUDIAC has been vital in helping me understand the topic of the books from different perspectives and angles, something which I think is absent in our day to day classes. My critical thinking skills are surely developing. Thanks STUDIAC!",
    category: "Category 1",
    labelColor: "#162874",
  },
];

var subjectDetails = {
  id: "3",
  title: "Программирование",
  shortDescription:
    "Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work",
  overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida dui, fermentum suspendisse nibh. Sagittis sagittis hendrerit porttitor est in sit in risus. Adipiscing tortor morbi aliquet sed lacus. Nibh scelerisque porta ut donec. Pulvinar cursus convallis egestas in eleifend. Porta pellentesque dapibus eu euismod. Vestibulum dui nibh non convallis rhoncus. Sociis ullamcorper ut tincidunt massa dignissim nisi massa nunc. Posuere netus pharetra tristique nisl, suspendisse et. Sem purus sed donec odio id nam quam metus et. Commodo, aliquet risus a, eget. Ac tristique in varius et ipsum id velit. `,
  image: "https://picsum.photos/seed/picsum/200/300",
  rating: 3,
  Class: {
    name: "Class 1",
    color: "#ff0000",
    Subjects: [
      {
        id: 13,
        title: "Chemistry",
        image: "https://picsum.photos/seed/picsum/200/300",
        shortDescription:
          "in blandit dolor. Amet, nunc, donec lectus consequat metus, tortor in odio sed. Turpis et massa, nascetur et vulputate etiam vivamus blandit. Nulla lacinia magnis dapibus nunc, eget pretium quis imperdiet. Ac sed arcu nunc iaculis. Viverra praesent volutpat lorem venenatis. Habitasse cras ipsum ornare non mi ut tellus netus. Felis nec semper tempor viverra nec facilisi ultrices gravida",
      },
      {
        id: 14,
        title: "Chemistry",
        image: "https://picsum.photos/seed/picsum/200/300",
        shortDescription:
          "in blandit dolor. Amet, nunc, donec lectus consequat metus, tortor in odio sed. Turpis et massa, nascetur et vulputate etiam vivamus blandit. Nulla lacinia magnis dapibus nunc, eget pretium quis imperdiet. Ac sed arcu nunc iaculis. Viverra praesent volutpat lorem venenatis. Habitasse cras ipsum ornare non mi ut tellus netus. Felis nec semper tempor viverra nec facilisi ultrices gravida",
      },
      {
        id: 14,
        title: "Chemistry",
        image: "https://picsum.photos/seed/picsum/200/300",
        shortDescription:
          "in blandit dolor. Amet, nunc, donec lectus consequat metus, tortor in odio sed. Turpis et massa, nascetur et vulputate etiam vivamus blandit. Nulla lacinia magnis dapibus nunc, eget pretium quis imperdiet. Ac sed arcu nunc iaculis. Viverra praesent volutpat lorem venenatis. Habitasse cras ipsum ornare non mi ut tellus netus. Felis nec semper tempor viverra nec facilisi ultrices gravida",
      },
      {
        id: 15,
        title: "Chemistry",
        image: "https://picsum.photos/seed/picsum/200/300",
        shortDescription:
          "in blandit dolor. Amet, nunc, donec lectus consequat metus, tortor in odio sed. Turpis et massa, nascetur et vulputate etiam vivamus blandit. Nulla lacinia magnis dapibus nunc, eget pretium quis imperdiet. Ac sed arcu nunc iaculis. Viverra praesent volutpat lorem venenatis. Habitasse cras ipsum ornare non mi ut tellus netus. Felis nec semper tempor viverra nec facilisi ultrices gravida",
      },
    ],
  },
  SubscriptionFee: {
    fee: 100,
    discount: 50,
  },
  Chapters: [
    {
      title: "Программирование",
      Lessons: [
        { type: "video", name: "Frozen yoghurt" },
        { type: "video", name: "Frozen yoghurt" },
        { type: "material", name: "Frozen yoghurt" },
        { type: "video", name: "Frozen yoghurt" },
      ],
    },

    {
      title: "Программирование",
      Lessons: [
        { type: "video", name: "Frozen yoghurt" },
        { type: "video", name: "Frozen yoghurt" },
        { type: "material", name: "Frozen yoghurt" },
        { type: "video", name: "Frozen yoghurt" },
      ],
    },

    {
      title: "Программирование",
      Lessons: [
        { type: "video", name: "Frozen yoghurt" },
        { type: "video", name: "Frozen yoghurt" },
        { type: "material", name: "Frozen yoghurt" },
        { type: "video", name: "Frozen yoghurt" },
      ],
    },
    {
      title: "Программирование",
      Lessons: [
        { type: "video", name: "Frozen yoghurt" },
        { type: "video", name: "Frozen yoghurt" },
        { type: "material", name: "Frozen yoghurt" },
        { type: "video", name: "Frozen yoghurt" },
      ],
    },
  ],
  SubjectContributors: [
    {
      Contributor: {
        id: "Програfммированиеs",
        name: "Программирование",
        image: "https://picsum.photos/seed/picsum/200/300",
        bio: "asdasd",
        designation: "Instructor",
      },
    },
    {
      Contributor: {
        id: "Програfммированиеs",
        name: "Программирование",
        image: "https://picsum.photos/seed/picsum/200/300",
        bio: "asdasd",
        designation: "Instructor",
      },
    },
    {
      Contributor: {
        id: "Програfммированиеs",
        name: "Программирование",
        image: "https://picsum.photos/seed/picsum/200/300",
        bio: "asdasd",
        designation: "Instructor",
      },
    },
  ],
};

var otherSubjects = [
  {
    title: "Программирование",
    shortDescription:
      "Blockquotes can contain other Markdown formatted elements. Not all elements can be",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    title: "Программирование",
    shortDescription:
      "Blockquotes can contain other Markdown formatted elements. Not all elements can be",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    title: "Программирование",
    shortDescription:
      "Blockquotes can contain other Markdown formatted elements. Not all elements can be",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    title: "Программирование",
    shortDescription:
      "Blockquotes can contain other Markdown formatted elements. Not all elements can be",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
];

const studentSubject = {
  id: "1",
  title: "Mathematics",
  description:
    "Mathematics is the study of topics such as quantity, structure, space, and change.",
  subjectChapters: [
    {
      id: "1",
      chapter: "1",
      title: "Программирование",
      body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
      image: "https://picsum.photos/200/300",
      progress: 40,
    },
    {
      id: "2",
      chapter: "2",
      title: "Программирование",
      body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
      image: "https://picsum.photos/200/300",
      progress: 50,
    },
    {
      id: "3",
      chapter: "3",
      title: "Программирование",
      body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
      image: "https://picsum.photos/200/300",
      progress: 40,
    },
    {
      id: "4",
      chapter: "4",
      title: "Программирование",
      body: "Программирование — это наука построения программного обеспечения для обеспечения взаимодействия программного обеспечения с физическими средствами взаимодействия.",
      image: "https://picsum.photos/200/300",
      progress: 10,
    },
  ],
};

var orderSummary = {
  subscription: "Class 1",
  price: "300",
  discounts: "150",
};

export {
  contributors,
  subjects,
  tiers,
  header,
  community,
  subjectDetails,
  orderSummary,
  otherSubjects,
  studentSubject,
};
