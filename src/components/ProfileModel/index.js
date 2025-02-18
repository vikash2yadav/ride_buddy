import { Box, Modal } from "@mui/material";
import React from "react";
import { CloseOutlined } from "@mui/icons-material";

const ProfileModel = ({ open, onClose, src }) => {
  return (
    <>
      <Modal open={open} onClose={onclose}>
        <Box
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "500px",
            height: "90%",
            maxHeight: "500px",
            width: "90%",
            borderRadius: "10px",
            background: "rgba(243, 111, 2, 0.8)",
            "&:focus-visible": {
              outline: "none",
            },
          }}
        >
          <CloseOutlined
            onClick={onClose}
            sx={{
              position: "absolute",
              top: "-12px",
              right: "-12px",
              background: "white",
              color: "black",
              zIndex: 10,
              width: "30px",
              height: "30px",
              padding: "5px",
              borderRadius: "100%",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(243, 111, 2, 0.8)",
                color: "white",
              },
            }}
          />
          <img
            src={src}
            alt="Selected"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default ProfileModel;
