import { filter } from "lodash";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Card,
  Stack,
  Container,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
} from "@material-ui/core";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import { makeStyles } from "@material-ui/styles";
// components
import AddChaptersForm from "../components/CreateNewSubjectForm/AddChaptersForm";
import AddContributorForm from "../components/CreateNewSubjectForm/AddContributorForm";
import ConfirmSubjectForm from "../components/CreateNewSubjectForm/ConfirmSubjectForm";
import AddSubjectDetailsForm from "../components/CreateNewSubjectForm/AddSubjectDetailsForm";

import { DELETE_AUTH, GET, GET_AUTH } from "../api/api";
import { useQuery } from "@apollo/client";
import { VIEW_CLASS_CONTRIBUTOR_LIST } from "../graphql/queries";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    width: "10%",
  },
}));

function getSteps() {
  return [
    "Add Subject Details",
    "Add Chapters",
    "Add Subject Contributors",
    "Confirm Subject Creation",
  ];
}

export default function CreateNewSubject(props) {
  const classes = useStyles();
  const [subjectInfo, setSubjectInfo] = useState(null);
  const [contributorInfo, setContributorInfo] = useState(null);
  const [chapters, setChapters] = useState(null);

  const methods = useForm({
    defaultValues: {},
  });
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const { loading, error, data } = useQuery(VIEW_CLASS_CONTRIBUTOR_LIST);

  if (loading) return <div>Loading</div>;
  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  console.log(data);
  const classList = data.Class;
  const classContributors = data.Contributor;

  const onSubmitClick = () => {
    console.log("clicked!!");
    console.log(subjectInfo);
    console.log(chapters);
    console.log(contributorInfo);

    const chaptersList = [];

    /* 

      {
              number: 1,
              title: "Introduction to Chemistry",
              image: "https://picsum.photos/200/300",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
              Lessons: {
                data: [
                  {
                    number: 4,
                    title: "Lesson 4",
                    description:
                      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norma",
                    type: "video",
                    Video: {
                      data: {
                        preview:
                          "https://www.cheatsheet.com/wp-content/uploads/2020/10/victoria_pedretti.jpg",
                        url: "https://youtu.be/4y33h81phKU",
                      },
                    },
                  },
                ],
              },
            },
    
    */

    const formatChapterLessons = (lessons) => {
      const lessonList = []
      lessons.forEach(lesson => {
        lessonList.push({
          number: lesson.number,
          title: lesson.title,
          description: lesson.description,
          type: lesson.type,
          Video: {
            data: {
              preview: lesson.preview,
              url: lesson.url,
            },
          },
        })
      })


    };

    chapters.forEach((chapter) => {
      chaptersList.push({
        title: chapter.info.title,
        description: chapter.info.description,
        number: parseInt(chapter.info.number),
        image: chapter.info.image,
        Lessons: {
          data: formatChapterLessons(chapter.lessons),
        },
      });
    });

    const result = {
      object: {
        title: subjectInfo.title,
        short_description: subjectInfo.short_description,
        class_id: subjectInfo.class_id,
        image: subjectInfo.image,
        overview: subjectInfo.overview,
        subject_code: subjectInfo.subject_code,
        is_active: true,
        Chapters: {
          data: chapters,
        },
      },
    };

    const pre = {
      object: {
        Chapters: {
          data: [
            {
              number: 1,
              title: "Introduction to Chemistry",
              image: "https://picsum.photos/200/300",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
              Lessons: {
                data: [
                  {
                    number: 4,
                    title: "Lesson 4",
                    description:
                      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norma",
                    type: "video",
                    Video: {
                      data: {
                        preview:
                          "https://www.cheatsheet.com/wp-content/uploads/2020/10/victoria_pedretti.jpg",
                        url: "https://youtu.be/4y33h81phKU",
                      },
                    },
                  },
                ],
              },
            },
            {
              number: 2,
              title: "Elements and Matter",
              image: "https://picsum.photos/200/300",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
              Lessons: {
                data: [
                  {
                    number: 1,
                    title: "Lesson 1",
                    description:
                      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norma",
                    type: "video",
                    Video: {
                      data: {
                        preview: "https://picsum.photos/200/300",
                        url: "https://youtu.be/Fbh8Mocj1Kk",
                      },
                    },
                  },

                  {
                    number: 3,
                    title: "Lesson 3",
                    description:
                      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norma",
                    type: "material",
                    Material: {
                      data: {
                        fileType: ".pdf",
                        url: "http://www.africau.edu/images/default/sample.pdf",
                      },
                    },
                  },
                ],
              },
            },
            {
              number: 3,
              title: "Organic Chemistry",
              image: "https://picsum.photos/200/300",
              description:
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal",
              Lessons: {
                data: [
                  {
                    number: 1,
                    title: "Lesson 1",
                    description:
                      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less norma",
                    type: "video",
                    Video: {
                      data: {
                        preview: "https://picsum.photos/200/300",
                        url: "https://youtu.be/Fbh8Mocj1Kk",
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
        SubjectContributors: {
          data: [
            {
              contributor_id: "33343d14645",
            },
            {
              contributor_id: "3334465",
            },
            {
              contributor_id: "33344645",
            },
          ],
        },
      },
    };
  };

  const getStepContent = (step, classList, classContributors) => {
    switch (step) {
      case 0:
        return (
          <AddSubjectDetailsForm
            classList={classList}
            setSubjectInfo={setSubjectInfo}
          />
        );
      case 1:
        return <AddChaptersForm setChapters={setChapters} />;
      case 2:
        return (
          <AddContributorForm
            classContributors={classContributors}
            setContributorInfo={setContributorInfo}
          />
        );
      case 3:
        return <ConfirmSubjectForm onSubmitClick={onSubmitClick} />;
      default:
        return "unknown step";
    }
  };

  /* handle next */
  const handleNext = (e) => {
    console.log(subjectInfo);
    console.log(chapters);
    console.log(contributorInfo);

    setActiveStep(activeStep + 1);
  };

  /* handle back */
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  if (loading) {
    return <h>Loading</h>;
  }

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleNext)}>
            {/* content part */}
            {getStepContent(activeStep, classList, classContributors)}
            {/* buttom part with buttons */}

            <div style={{ display: "flex", padding: "0 2.5rem" }}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                disabled={activeStep === 0}
                onClick={handleBack}
                fullWidth={true}
              >
                Back
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                disabled={activeStep === 3}
                //onClick={handleNext}
                type="submit"
                style={{ marginLeft: "auto" }}
                fullWidth={true}
              >
                Next
              </Button>
            </div>
          </form>
        </FormProvider>
      </>
    </div>
  );
}
