import { Grid } from "@material-ui/core";

import Subject from "../../components/Subject";

const OurSubjects = (props) => {
  return (
    <Grid container spacing={2} alignItems="flex-end">
      {props.subjects.map((subject, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Subject
            id={subject.id}
            title={subject.title}
            body={subject.body}
            image={subject.image}
            labelColor={subject.Class.labelColor}
            category={subject.Class.category}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default OurSubjects;
