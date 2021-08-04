import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      fontSize: "1rem",
      marginBottom: "14px",
      span: {
        fontSize: "1.2rem",
      },
    },
    tags: {
      height: "30px",
      borderRadius: "4px",
      marginRight: "4px",
      color: "#ffffff",
      fontSize: "14px",
    },
  })
);

export default useStyles;