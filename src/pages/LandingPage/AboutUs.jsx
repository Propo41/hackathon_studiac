import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@material-ui/core";
import { useNavigate } from "react-router";

const AboutUs = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} alignItems="flex-end" justifyContent="center">
      {props.tiers.map((tier) => (
        // Enterprise card is full width at sm breakpoint
        <Grid item key={tier.title} xs={12} sm={6} md={4}>
          <Card
            elevation={0}
            onClick={(e) => {
              e.preventDefault();
              navigate(tier.navigateUrl);
            }}
          >
            <div
              style={{
                textAlign: "-webkit-center",
                backgroundColor: theme.palette.lightash,
                padding: theme.spacing(5),
              }}
            >
              <Avatar
                alt="brand logo"
                className={props.classes.cardAvatar}
                src={tier.icon}
              />
            </div>

            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "baseline",
                  mb: 2,
                }}
              >
                <Typography variant="h4" color="textPrimary">
                  {tier.title}
                </Typography>
              </Box>
              <ul>
                {tier.description.map((line) => (
                  <Typography
                    component="li"
                    variant="body1"
                    align="center"
                    color="textSecondary"
                    key={line}
                    style={{ listStyleType: "none" }}
                    className={props.classes.disableTextSelection}
                  >
                    {line}
                  </Typography>
                ))}
              </ul>
            </CardContent>
            <CardActions>
              <Button
                variant={tier.buttonVariant}
                fullWidth
                className={
                  tier.buttonVariant === "contained"
                    ? props.classes.buttonPrimary
                    : props.classes.buttonSecondary
                }
                disableElevation
              >
                {tier.buttonText}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AboutUs;
