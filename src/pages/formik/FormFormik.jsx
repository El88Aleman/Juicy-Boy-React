import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormFormik = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      correoElectronico: "",
      nombreApellido: "",
      ciudad: "",
      provincia: "",
      direccion: "",
      cp: "",
      telefono: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      correoElectronico: Yup.string()
        .required("Este campo es obligatorio")
        .email("No corresponde a un email valido")
        .matches(/^(?=.*[!@#$%^&*])(?=.*[a-z])/),
      nombreApellido: Yup.string()
        .required("El Nombre y Apellido no son validos")
        .matches(/^(?=.*[a-z])/),
      ciudad: Yup.string()
        .required("La Ciudad no es valida")
        .matches(/^(?=.*[a-z])/),
      provincia: Yup.string()
        .required("La Provincia no es valida")
        .matches(/^(?=.*[a-z])/),
      direccion: Yup.string()
        .required("La direccion no es valida")
        .matches(/^(?=.*\d)(?=.*[a-z])/),
      cp: Yup.string()
        .required("El Codigo Postal no es valido")
        .matches(/^(?=.*\d)/),
      telefono: Yup.string()
        .required("El numero de telefono no es valido")
        .matches(/^(?=.*\d)/),
    }),
    validateOnChange: false,
  });

  return (
    <div style={{ padding: "40px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Correo Electronico"
          variant="outlined"
          name="correoElectronico"
          onChange={handleChange}
          error={errors.correoElectronico ? true : false}
          helperText={errors.correoElectronico}
        />
        <TextField
          label="Nombre y Apellido"
          variant="outlined"
          name="nombreApellido"
          onChange={handleChange}
          error={errors.nombreApellido ? true : false}
          helperText={errors.nombreApellido}
        />
        <TextField
          label="Ciudad"
          variant="outlined"
          name="ciudad"
          onChange={handleChange}
          error={errors.ciudad ? true : false}
          helperText={errors.ciudad}
        />
        <TextField
          label="Provincia"
          variant="outlined"
          name="provincia"
          onChange={handleChange}
          error={errors.provincia ? true : false}
          helperText={errors.provincia}
        />
        <TextField
          label="Direccion"
          variant="outlined"
          name="direccion"
          onChange={handleChange}
          error={errors.direccion ? true : false}
          helperText={errors.direccion}
        />
        <TextField
          label="CP"
          variant="outlined"
          name="cp"
          onChange={handleChange}
          error={errors.cp ? true : false}
          helperText={errors.cp}
        />
        <TextField
          label="Telefono"
          variant="outlined"
          name="telefono"
          onChange={handleChange}
          error={errors.telefono ? true : false}
          helperText={errors.telefono}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default FormFormik;
