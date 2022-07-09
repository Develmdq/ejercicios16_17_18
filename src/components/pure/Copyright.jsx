import { Link, Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Typography variant="body2" color="GrayText" align="center">
      {"Copyright\u00A9"}
      <Link color="inherit" href="https://imaginaformacion.com">
        Imagina Formación
      </Link>
      {''}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;
