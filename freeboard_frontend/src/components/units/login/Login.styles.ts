import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

export const Background = styled.div`
  background-image: url(/images/soy_register_bw.png);
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 50px;
`;

export const LogoImg = styled.img`
  cursor: pointer;
`;

export const LeftWrapper = styled.div`
  width: 50%;
  height: 100%;
`;

export const RightWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const Register = styled.div`
  width: 100%;
  height: 70%;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightgreen; */
`;

export const Title = styled.div`
  padding-bottom: 30px;
  font-family: "Montserrat";
  font-size: 33px;
  text-align: center;
`;

export const ColorTitle = styled.span`
  color: #1dbc67;
  font-family: "Montserrat";
`;

export const InputWrapper = styled.div``;

export const Input = styled.input`
  width: 430px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 20px;
  padding: 15px;
  border: none;
  transition: all 0.5s;
  border-bottom: 1px solid rgba(232, 232, 232, 1);
  :focus {
    outline: none;
    border: none;
    border-bottom: 2px solid gray;
    background-color: #f5f5f5;
  }
`;

export const Error = styled.div`
  width: 100%;
  color: red;
  font-size: 12px;
  margin-left: 10px;
`;

export const RegisterBtn = styled.div`
  margin-top: 45px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 16px;
  width: 430px;
  height: 60px;
  padding: 8px;
  background-color: #1dbc67;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    color: white;
    background-color: #787878;
  }
`;

export const EmailInputStyle = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2,
  },
});

export const InputBox = styled(Box)({
  "& > :not(style)": {
    m: 1,
    width: "49ch",
    marginTop: "5px",
    marginLeft: "9.5px",
    marginBottom: "8px",
  },

  "& .MuiInput-underline": {
    padding: "10px",

    borderBottom: "1px solid #f5f5f5",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderBottomColor: "red",
    },
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "#1dbc67",
  },

  "& .MuiInput-placeholder": {
    padding: "10px",
    marginLeft: "10px",
  },

  "& label.Mui-focused": {
    color: "#1dbc67",
  },
});

export const FormBox = styled(FormControl)({
  "& > :not(style)": {
    m: 1,
    width: "48.7ch",
  },

  "& .MuiInput-underline": {
    padding: "10px",
    borderBottom: "1px solid #f5f5f5",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderBottomColor: "red",
    },
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "#1dbc67",
  },

  "& .MuiInput-placeholder": {
    padding: "10px",
  },

  "& label.Mui-focused": {
    color: "#1dbc67",
  },
});
