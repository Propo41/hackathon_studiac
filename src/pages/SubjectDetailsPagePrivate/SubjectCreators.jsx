import { makeStyles } from "@material-ui/core";
import AvatarProfile from "../../components/AvatarProfile";
import { Carousel } from "@trendyol-js/react-carousel";

const useStyles = makeStyles((theme) => ({
  carousel: {
    textAlign: "left",
  },
}));

const SubjectCreators = ({ creators }) => {
  const classes = useStyles();
  return (
    <Carousel
      show={3}
      slide={1}
      swiping={creators.length > 3 ? true : false}
      responsive={true}
      dynamic={true}
      className={classes.carousel}
    >
      {creators.map((creator, index) => (
        <AvatarProfile
          key={index}
          id={creator.id}
          title={creator.name}
          body={creator.bio}
          image={creator.image}
          subtitle={creator.designation}
        />
      ))}
    </Carousel>
  );
};

export default SubjectCreators;
