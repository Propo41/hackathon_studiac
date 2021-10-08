import { makeStyles } from "@material-ui/core";
import AvatarProfile from "../../components/AvatarProfile";
import { Carousel } from "@trendyol-js/react-carousel";

const useStyles = makeStyles((theme) => ({
  carousel: {
    textAlign: "-webkit-center",
  },
}));

const OurInstructors = ({ instructors }) => {
  const classes = useStyles();
  return (
    <Carousel
      show={3}
      slide={3}
      swiping={true}
      responsive={true}
      dynamic={true}
      className={classes.carousel}
    >
      {instructors.map((instructor) => (
        <AvatarProfile
          key={instructor.id}
          id={instructor.id}
          title={instructor.title}
          body={instructor.body}
          image={instructor.image}
        />
      ))}
    </Carousel>
  );
};

export default OurInstructors;
