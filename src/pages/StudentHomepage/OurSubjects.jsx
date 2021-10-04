import { Grid } from "@material-ui/core";

import Subject from "../../components/Subject";

const OurSubjects = (props) => {
  return (
    <Grid container spacing={2} alignItems="flex-end">
      {props.subjects.map((subject, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Subject
            title={subject.title}
            body={subject.body}
            image={subject.image}
            labelColor={subject.category.color}
            category={subject.category.name}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default OurSubjects;
